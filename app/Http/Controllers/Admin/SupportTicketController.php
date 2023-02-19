<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\SupportAttachment;
use App\Models\SupportMessage;
use App\Models\SupportTicket;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Throwable;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Gate;

class SupportTicketController extends Controller
{
    public function tickets()
    {
        abort_if(Gate::denies('support_ticket_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $page_title = 'Support Tickets';
        return view('admin.support.tickets', compact('page_title'));
    }

    public function tickets_live()
    {
        abort_if(Gate::denies('support_ticket_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $page_title = 'Support Tickets';
        $empty_message = 'No Data found.';
        $items = SupportTicket::latest()->with('user')->get();
        foreach ($items as $item) {
            $datas = SupportMessage::with('ticket')->where('supportticket_id', $item->id)->latest()->get();
            for ($i = 0; $i < count($datas); $i++) {
                if ($datas[$i]->admin_id == 0) {
                    $data[$i] = [
                        'message' => $datas[$i]->message,
                        'user' => [
                            'name' => $datas[$i]->ticket->user->name ?? $datas[$i]->ticket->user->firstname . ' ' . $datas[$i]->ticket->user->lastname,
                            'username' => $datas[$i]->ticket->user->username,
                            'icon' => $datas[$i]->ticket->user->profile_photo_path,
                        ],
                        'date' => $datas[$i]->created_at->format('Y/m/d H:i:s'),
                        'datetime' => $datas[$i]->created_at->format('H:i:s'),
                        'side' => 1
                    ];
                } else {
                    $data[$i] = [
                        'message' => $datas[$i]->message,
                        'user' => [
                            'name' => $datas[$i]->admin->name ?? $datas[$i]->admin->firstname . ' ' . $datas[$i]->admin->lastname,
                            'username' => $datas[$i]->admin->username,
                            'icon' => $datas[$i]->admin->profile_photo_path,
                        ],
                        'date' => $datas[$i]->created_at->format('Y/m/d H:i:s'),
                        'datetime' => $datas[$i]->created_at->format('H:i:s'),
                        'side' => 2,
                    ];
                }
                $unread = $datas->where('viewed_at', '<', $item->last_reply)->count();
            }
            $item->messages = $data;
            $item->unread = $unread;
        }
        return view('admin.support.index', compact('items', 'page_title', 'empty_message'));
    }

    public function ticketReply($id)
    {
        abort_if(Gate::denies('support_ticket_reply'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $ticket = SupportTicket::with('user')->where('id', $id)->firstOrFail();
        $page_title = 'Support Tickets';
        $messages = SupportMessage::with('ticket')->where('supportticket_id', $ticket->id)->latest()->get();

        return view('admin.support.reply', compact('ticket', 'messages', 'page_title'));
    }
    public function ticketReplySend(Request $request, $id)
    {
        $ticket = SupportTicket::with('user')->where('id', $id)->firstOrFail();
        $message = new SupportMessage();
        $user = Auth::user();
        if ($request->replayTicket == 1) {

            $imgs = $request->file('attachments');
            $allowedExts = array('jpg', 'png', 'jpeg', 'pdf', 'doc', 'docx');

            $this->validate($request, [
                'attachments' => [
                    'max:4096',
                    function ($attribute, $value, $fail) use ($imgs, $allowedExts) {
                        foreach ($imgs as $img) {
                            $ext = strtolower($img->getClientOriginalExtension());
                            if (($img->getSize() / 1000000) > 2) {
                                return $fail("Images MAX  2MB ALLOW!");
                            }

                            if (!in_array($ext, $allowedExts)) {
                                return $fail("Only png, jpg, jpeg, pdf, doc, docx files are allowed");
                            }
                        }
                        if (count($imgs) > 5) {
                            return $fail("Maximum 5 files can be uploaded");
                        }
                    }
                ],
                'message' => 'required',
            ]);

            $message->supportticket_id = $ticket->id;
            $message->admin_id = $user->id;
            $message->message = $request->message;
            $message->save();

            if ($message) {
                $ticket->status = 1;
                $ticket->last_reply = Carbon::now();
                $ticket->save();
                try {
                    notify($ticket->user, 'ADMIN_SUPPORT_REPLY', [
                        "ticket_id" => $ticket->id,
                        "ticket_subject" => "Support ticket reply",
                        "reply" => $request->message,
                        "link" => route('user.ticket.view', $ticket->id)
                    ]);
                    $notify[] = ['success', 'Client Notified By Email Successfully'];
                } catch (Throwable $e) {
                    $notify[] = ['warning', 'Mail Not Properly Set'];
                }
            }

            $path = imagePath()['ticket']['path'];
            if ($request->hasFile('attachments')) {
                foreach ($request->file('attachments') as $file) {
                    try {
                        $attachment = new SupportAttachment();
                        $attachment->support_message_id = $message->id;
                        $attachment->attachment = uploadFile($file, $path);
                        $attachment->save();
                    } catch (\Exception $exp) {
                        $notify[] = ['error', 'Could not upload your ' . $file];
                        return back()->withNotify($notify)->withInput();
                    }
                }
            }

            $notify[] = ['success', "Support ticket replied successfully"];
        } elseif ($request->replayTicket == 2) {
            $ticket->status = 3;
            $ticket->save();
            $notify[] = ['success', "Support ticket closed successfully"];
        }
        return back()->withNotify($notify);
    }


    public function ticketDownload($ticket_id)
    {
        $attachment = SupportAttachment::findOrFail(decrypt($ticket_id));
        $file = $attachment->attachment;


        $path = imagePath()['ticket']['path'];

        $full_path = $path . '/' . $file;
        $title = $attachment->supportMessage->ticket->subject . '-' . $file;
        $ext = pathinfo($file, PATHINFO_EXTENSION);
        $mimetype = mime_content_type($full_path);
        header('Content-Disposition: attachment; filename="' . $title);
        header("Content-Type: " . $mimetype);
        return readfile($full_path);
    }
    public function ticketDelete(Request $request)
    {
        abort_if(Gate::denies('support_ticket_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $message = SupportMessage::findOrFail($request->message_id);
        $path = imagePath()['ticket']['path'];
        if ($message->attachments()->count() > 0) {
            foreach ($message->attachments as $img) {
                @unlink($path . '/' . $img->image);
                $img->delete();
            }
        }
        $message->delete();
        $notify[] = ['success', "Delete Successfully"];
        return back()->withNotify($notify);
    }
}