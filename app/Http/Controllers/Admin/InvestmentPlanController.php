<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\InvestmentPlans;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Contracts\Validation\Factory;

class InvestmentPlanController extends Controller
{
    /**
     * Display a listing of the investment plans.
     *
     * @return JsonResponse
     */
    public function index()
    {
        $plans  = InvestmentPlans::all();

        $page_title = 'Investment Plans';

        return view('admin.investment.index', compact('page_title', 'plans'));
    }

    public function create()
    {

        $page_title = 'Create investment Plan';

        return view('admin.investment.create', compact('page_title'));
    }

    /**
     * Store a newly created investment plan in storage.
     *
     * @param  Request  $request
     * @return JsonResponse
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|max:255',
            'description' => 'required',
            'minimum' => 'required|numeric|min:0',
            'maximum' => 'required|numeric|min:0',
            'interest' => 'required|numeric|min:0',
            'duration' => 'required|numeric|min:0',
            'status' => 'required|boolean',
            'recommanded' => 'required|boolean',
        ]);

        $plan = new InvestmentPlans();

        $plan->name = $validatedData['name'];
        $plan->description = $validatedData['description'];
        $plan->min_amount = $validatedData['minimum'];
        $plan->max_amount = $validatedData['maximum'];
        $plan->interest_rate = $validatedData['interest'];
        $plan->duration_in_days = $validatedData['duration'];
        $plan->status = $validatedData['status'];
        $plan->recommanded = $validatedData['recommanded'];

        $plan->save();

        return redirect()->route('admin.investment.plans.index')
            ->with(['success', 'Investment plan created successfully.']);
    }

    /**
     * Display the specified investment plan.
     *
     * @param  int  $id
     * @return JsonResponse
     */
    public function edit($id)
    {
        $plan = InvestmentPlans::findOrFail($id);
        $page_title = 'Edit Investment Plans';

        return view('admin.investment.edit', compact('plan', 'page_title'));
    }

    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'name' => 'required|max:255',
            'description' => 'required',
            'minimum' => 'required|numeric',
            'maximum' => 'required|numeric',
            'interest' => 'required|numeric',
            'duration' => 'required|numeric',
            'status' => 'required|boolean',
            'recommanded' => 'required|boolean',
        ]);

        $plan = InvestmentPlans::findOrFail($id);

        $plan->name = $validatedData['name'];
        $plan->description = $validatedData['description'];
        $plan->min_amount = $validatedData['minimum'];
        $plan->max_amount = $validatedData['maximum'];
        $plan->interest_rate = $validatedData['interest'];
        $plan->duration_in_days = $validatedData['duration'];
        $plan->recommanded = $validatedData['recommanded'];
        $plan->status = $validatedData['status'];

        $plan->save();

        return redirect()->route('admin.investment.plans.index')
            ->with(['success', 'Investment plan updated successfully.']);
    }

    public function toggleStatus(Request $request, $id)
    {
        $plan = InvestmentPlans::findOrFail($id);
        $plan->status = !$plan->status;
        $plan->save();

        return response()->json(['status' => $plan->status]);
    }

    public function toggleRecommanded(Request $request, $id)
    {
        $plan = InvestmentPlans::findOrFail($id);
        $plan->recommanded = !$plan->recommanded;
        $plan->save();

        return response()->json(['recommanded' => $plan->recommanded]);
    }

    public function destroy($id)
    {
        $plan = InvestmentPlans::findOrFail($id);

        // delete the investment plan
        $plan->delete();

        // return a success message and redirect to the investment plans index page
        return redirect()->route('admin.investment.plans.index')->with('success', 'Investment plan deleted successfully.');
    }
}
