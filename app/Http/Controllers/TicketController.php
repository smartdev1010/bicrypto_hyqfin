<?php

namespace App\Http\Controllers;

use App\Models\AdminNotification;
use App\Models\SupportAttachment;
use App\Models\SupportMessage;
use App\Models\SupportTicket;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TicketController extends Controller
{

    public function __construct()
    {
    }

    public function supportTicket()
    {
        if (Auth::id() == null) {
            abort(404);
        }
        $page_title = "Support Tickets";
        $supports = SupportTicket::where('user_id', Auth::id())->latest()->paginate(getPaginate());
        return view('user.support.index', compact('supports', 'page_title'));
    }

    public function fetch_supportTicket()
    {
        return response()->json([
            'supports' => SupportTicket::where('user_id', Auth::id())->latest()->get(),
        ]);
    }

    public function openSupportTicket()
    {
        if (!Auth::user()) {
            abort(404);
        }
        $page_title = "Support Tickets";
        $auth = Auth::user();
        $user = User::where('id', $auth->id)->select(['firstname', 'lastname', 'email', 'profile_photo_path'])->first();
        return view('user.support.create', compact('page_title', 'user'));
    }

    public function storeSupportTicket(Request $request)
    {

        $ticket = new SupportTicket();
        $message = new SupportMessage();

        $files = $request->file('attachments');
        $allowedExts = array('jpg', 'png', 'jpeg', 'pdf', 'doc', 'docx');


        $this->validate($request, [
            'attachments' => [
                'max:4096',
                function ($attribute, $value, $fail) use ($files, $allowedExts) {
                    foreach ($files as $file) {
                        $ext = strtolower($file->getClientOriginalExtension());
                        if (($file->getSize() / 1000000) > 2) {
                            return $fail("Images MAX  2MB ALLOW!");
                        }
                        if (!in_array($ext, $allowedExts)) {
                            return $fail("Only png, jpg, jpeg, pdf, doc, docx files are allowed");
                        }
                    }
                    if (count($files) > 5) {
                        return $fail("Maximum 5 files can be uploaded");
                    }
                },
            ],
            'name' => 'required|max:191',
            'email' => 'required|email|max:191',
            'subject' => 'required|max:100',
            'message' => 'required',
        ]);

        $user = auth()->user();
        $ticket->user_id = $user->id;
        $random = rand(100000, 999999);
        $ticket->ticket = $random;
        $ticket->name = $request->name;
        $ticket->email = $request->email;
        $ticket->subject = $request->subject;
        $ticket->last_reply = Carbon::now();
        $ticket->status = 0;
        $ticket->save();

        $message->supportticket_id = $ticket->id;
        $message->message = $request->message;
        $message->save();


        $adminNotification = new AdminNotification();
        $adminNotification->user_id = $user->id;
        $adminNotification->title = 'New support ticket has opened';
        $adminNotification->click_url = route('admin.ticket.view', $ticket->id);
        $adminNotification->save();


        $path = imagePath()['ticket']['path'];
        if ($request->hasFile('attachments')) {
            foreach ($request->file('attachments') as  $file) {
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
        $notify[] = ['success', 'ticket created successfully!'];
        return redirect('/app/support')->withNotify($notify);
    }

    public function viewTicket($ticket)
    {
        $page_title = "Support Tickets";
        $my_ticket = SupportTicket::where('ticket', $ticket)->latest()->first();
        $messages = SupportMessage::where('supportticket_id', $my_ticket->id)->latest()->get();

        $auth = Auth::user();
        $user = User::where('id', $auth->id)->select(['firstname', 'lastname', 'email', 'profile_photo_path'])->first();
        if ($user) {
            return view('user.support.view', compact('my_ticket', 'messages', 'page_title'));
        }
        return view('ticket_view', compact('my_ticket', 'messages', 'page_title'));
    }

    public function fetch_tickets()
    {
        return response()->json(
            [
                'tickets' => SupportTicket::with('user')->where('user_id', Auth::id())->latest()->get()
            ]
        );
    }
    public function fetch_ticket_messages($id)
    {
        $ticket = SupportTicket::where('ticket', $id)->firstOrFail();
        $messages = SupportMessage::where('supportticket_id', $ticket->id)
            ->with(['ticket', 'admin'])
            ->latest()
            ->get();

        $data = [];
        foreach ($messages as $message) {
            $user = $message->admin_id ? $message->admin : $message->ticket->user;
            $data[] = [
                'message' => $message->message,
                'user' => [
                    'name' => $user->name ?? $user->firstname . ' ' . $user->lastname,
                    'username' => $user->username,
                    'icon' => $user->profile_photo_path,
                ],
                'date' => $message->created_at->format('Y/m/d H:i:s'),
                'datetime' => $message->created_at->format('H:i:s'),
                'side' => $message->admin_id ? 2 : 1
            ];
        }

        $ticket->messages = $data;
        $ticket->unread = $messages->where('viewed_at', '<', $ticket->last_reply)->count();

        return response()->json(['ticket' => $ticket]);
    }

    public function fetch_Ticket(Request $request)
    {
        $my_ticket = SupportTicket::where('ticket', $request->ticket)->latest()->first();
        return response()->json([
            'my_ticket' => $my_ticket,
            'admin' => User::where('id', $my_ticket->admin_id)->select('name', 'profile_photo_path')->first(),
            'attachments' => SupportAttachment::where('support_message_id', $my_ticket->id)->get(),
            'messages' => SupportMessage::where('supportticket_id', $my_ticket->id)->latest()->get(),
        ]);
    }

    public function replyTicket(Request $request, $id)
    {
        $ticket = SupportTicket::findOrFail($id);
        $message = new SupportMessage();
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
                                return $fail("Only png, jpg, jpeg, pdf doc docx files are allowed");
                            }
                        }
                        if (count($imgs) > 5) {
                            return $fail("Maximum 5 files can be uploaded");
                        }
                    },
                ],
                'message' => 'required',
            ]);

            $ticket->status = 2;
            $ticket->last_reply = Carbon::now();
            $ticket->save();

            $message->supportticket_id = $ticket->id;
            $message->message = $request->message;
            $message->save();

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
            $notify[] = ['success', 'Support ticket replied successfully!'];
        } elseif ($request->replayTicket == 2) {
            $ticket->status = 3;
            $ticket->last_reply = Carbon::now();
            $ticket->save();
            $notify[] = ['success', 'Support ticket closed successfully!'];
            return response()->json(
                [
                    'success' => true,
                    'type' => $notify[0][0],
                    'message' => $notify[0][1],
                    'redirect' => '/app/support'
                ]
            );
        }
        return back()->withNotify($notify);
    }





    public function ticketDownload($ticket_id)
    {
        $attachment = SupportAttachment::findOrFail(decrypt($ticket_id));
        $file = $attachment->attachment;

        $path = imagePath()['ticket']['path'];
        $full_path = $path . '/' . $file;

        $title = str_slug($attachment->supportMessage->ticket->subject);
        $ext = pathinfo($file, PATHINFO_EXTENSION);
        $mimetype = mime_content_type($full_path);


        header('Content-Disposition: attachment; filename="' . $title . '.' . $ext . '";');
        header("Content-Type: " . $mimetype);
        return readfile($full_path);
    }
}
