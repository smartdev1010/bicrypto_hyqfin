@extends('layouts.admin')

@section('content')
    <div class="card">
        <form action="{{ route('admin.investment.plans.update', $plan->id) }}" method="POST">
            @csrf
            @method('PUT')
            <div class="card-body">
                <div class="mb-4">
                    <label for="name" class="form-label">Plan Name:</label>
                    <input type="text" name="name" id="name" value="{{ $plan->name }}" class="form-control">
                </div>
                <div class="mb-4">
                    <label for="description" class="form-label">Plan Description:</label>
                    <textarea name="description" id="description" class="form-control">{{ $plan->description }}</textarea>
                </div>
                <div class="mb-4">
                    <label for="minimum" class="form-label">Minimum Investment:</label>
                    <input type="text" name="minimum" id="minimum" value="{{ $plan->min_amount }}"
                        class="form-control">
                </div>
                <div class="mb-4">
                    <label for="maximum" class="form-label">Maximum Investment:</label>
                    <input type="text" name="maximum" id="maximum" value="{{ $plan->max_amount }}"
                        class="form-control">
                </div>
                <div class="mb-4">
                    <label for="interest" class="form-label">Interest Rate:</label>
                    <input type="text" name="interest" id="interest" value="{{ $plan->interest_rate }}"
                        class="form-control">
                </div>
                <div class="mb-4">
                    <label for="duration" class="form-label">Duration (in days):</label>
                    <input type="text" name="duration" id="duration" value="{{ $plan->duration_in_days }}"
                        class="form-control">
                </div>
                <div class="mb-4">
                    <label for="status" class="form-label">Status:</label>
                    <select name="status" id="status" class="form-control">
                        <option value="1" @if ($plan->status == 1) selected @endif>Active</option>
                        <option value="0" @if ($plan->status == 0) selected @endif>Inactive</option>
                    </select>
                </div>
                <div class="mb-4">
                    <label for="recommanded" class="form-label">Recommanded:</label>
                    <select name="recommanded" id="recommanded" class="form-control">
                        <option value="1" @if ($plan->recommanded == 1) selected @endif>True</option>
                        <option value="0" @if ($plan->recommanded == 0) selected @endif>False</option>
                    </select>
                </div>
            </div>
            <div class="card-footer">
                <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded font-medium">Update</button>
            </div>
        </form>
    </div>
@endsection

@push('breadcrumb-plugins')
    <a href="{{ route('admin.investment.plans.index') }}" class="btn btn-outline-secondary"><i
            class="bi bi-chevron-left"></i>
        {{ __('Back') }} </a>
@endpush
