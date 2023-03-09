@extends('layouts.admin')
@section('content')
<form action="/admin/membership/updateCommission" method="POST" enctype="multipart/form-data" id="settings">
  @csrf
  <div class="space-y-3 px-3 mb-1" id="mlm_rewards" aria-labelledby="mlm_rewards-tab" role="tabpanel">
    <div class="border rounded dark:border-gray-600 shadow p-2">
      <div class="flex items-center justify-between">
        <div>
          <label class="text-sm font-medium text-gray-900 dark:text-gray-300"
            for="unilevel_upline1_percentage">{{ __('1st Upline') }}
          </label>
        </div>
        <div class="input-group">
          <input type="text" name="unilevel_upline1_percentage" value="{{ $commissions[0]->commission }}">
          <span>%</span>
        </div>
      </div>
      <small class="text-warning">{{ __('First Referrer Commission Percentage') }}</small>
    </div>
    <div class="border rounded dark:border-gray-600 shadow p-2">
      <div class="flex items-center justify-between">
        <div>
          <label class="text-sm font-medium text-gray-900 dark:text-gray-300"
            for="unilevel_upline1_percentage">{{ __('2nd Upline') }}
          </label>
        </div>
        <div class="input-group">
          <input type="text" name="unilevel_upline2_percentage" value="{{ $commissions[1]->commission }}">
          <span>%</span>
        </div>
      </div>
      <small class="text-warning">{{ __('Second Referrer Commission Percentage') }}</small>
    </div>
    <div class="border rounded dark:border-gray-600 shadow p-2">
      <div class="flex items-center justify-between">
        <div>
          <label class="text-sm font-medium text-gray-900 dark:text-gray-300"
            for="unilevel_upline1_percentage">{{ __('3rd Upline') }}
          </label>
        </div>
        <div class="input-group">
          <input type="text" name="unilevel_upline3_percentage" value="{{ $commissions[2]->commission }}">
          <span>%</span>
        </div>
      </div>
      <small class="text-warning">{{ __('Third Referrer Commission Percentage') }}</small>
    </div>
    <div class="border rounded dark:border-gray-600 shadow p-2">
      <div class="flex items-center justify-between">
        <div>
          <label class="text-sm font-medium text-gray-900 dark:text-gray-300"
            for="unilevel_upline1_percentage">{{ __('4th Upline') }}
          </label>
        </div>
        <div class="input-group">
          <input type="text" name="unilevel_upline4_percentage" value="{{ $commissions[3]->commission }}">
          <span>%</span>
        </div>
      </div>
      <small class="text-warning">{{ __('Forth Referrer Commission Percentage') }}</small>
    </div>
    <div class="border rounded dark:border-gray-600 shadow p-2">
      <div class="flex items-center justify-between">
        <div>
          <label class="text-sm font-medium text-gray-900 dark:text-gray-300"
            for="unilevel_upline1_percentage">{{ __('5th Upline') }}
          </label>
        </div>
        <div class="input-group">
          <input type="text" name="unilevel_upline5_percentage" value="{{ $commissions[4]->commission }}">
          <span>%</span>
        </div>
      </div>
      <small class="text-warning">{{ __('Fivth Referrer Commission Percentage') }}</small>
    </div>
    <div class="border rounded dark:border-gray-600 shadow p-2">
      <div class="flex items-center justify-between">
        <div>
          <label class="text-sm font-medium text-gray-900 dark:text-gray-300"
            for="unilevel_upline1_percentage">{{ __('6th Upline') }}
          </label>
        </div>
        <div class="input-group">
          <input type="text" name="unilevel_upline6_percentage" value="{{ $commissions[5]->commission }}">
          <span>%</span>
        </div>
      </div>
      <small class="text-warning">{{ __('Sixth Referrer Commission Percentage') }}</small>
    </div>
    <div class="border rounded dark:border-gray-600 shadow p-2">
      <div class="flex items-center justify-between">
        <div>
          <label class="text-sm font-medium text-gray-900 dark:text-gray-300"
            for="unilevel_upline1_percentage">{{ __('7th Upline') }}
          </label>
        </div>
        <div class="input-group">
          <input type="text" name="unilevel_upline7_percentage" value="{{ $commissions[6]->commission }}">
          <span>%</span>
        </div>
      </div>
      <small class="text-warning">{{ __('Seventh Referrer Commission Percentage') }}</small>
    </div>
    <div class="border rounded dark:border-gray-600 shadow p-2">
      <div class="flex items-center justify-between">
        <div>
          <label class="text-sm font-medium text-gray-900 dark:text-gray-300"
            for="unilevel_upline1_percentage">{{ __('8th Upline') }}
          </label>
        </div>
        <div class="input-group">
          <input type="text" name="unilevel_upline8_percentage" value="{{ $commissions[7]->commission }}">
          <span>%</span>
        </div>
      </div>
      <small class="text-warning">{{ __('Eighth Referrer Commission Percentage') }}</small>
    </div>
    <div class="border rounded dark:border-gray-600 shadow p-2">
      <div class="flex items-center justify-between">
        <div>
          <label class="text-sm font-medium text-gray-900 dark:text-gray-300"
            for="unilevel_upline1_percentage">{{ __('9th Upline') }}
          </label>
        </div>
        <div class="input-group">
          <input type="text" name="unilevel_upline9_percentage" value="{{ $commissions[8]->commission }}">
          <span>%</span>
        </div>
      </div>
      <small class="text-warning">{{ __('Nineth Referrer Commission Percentage') }}</small>
    </div>
    <div class="border rounded dark:border-gray-600 shadow p-2">
      <div class="flex items-center justify-between">
        <div>
          <label class="text-sm font-medium text-gray-900 dark:text-gray-300"
            for="unilevel_upline1_percentage">{{ __('10th Upline') }}
          </label>
        </div>
        <div class="input-group">
          <input type="text" name="unilevel_upline10_percentage" value="{{ $commissions[9]->commission }}">
          <span>%</span>
        </div>
      </div>
      <small class="text-warning">{{ __('Tenth Referrer Commission Percentage') }}</small>
    </div>
    <div class="border rounded dark:border-gray-600 shadow p-2">
      <div class="flex items-center justify-between">
        <div>
          <label class="text-sm font-medium text-gray-900 dark:text-gray-300"
            for="unilevel_upline1_percentage">{{ __('11th Upline') }}
          </label>
        </div>
        <div class="input-group">
          <input type="text" name="unilevel_upline11_percentage" value="{{ $commissions[10]->commission }}">
          <span>%</span>
        </div>
      </div>
      <small class="text-warning">{{ __('Eleventh Referrer Commission Percentage') }}</small>
    </div>
    <div class="border rounded dark:border-gray-600 shadow p-2">
      <div class="flex items-center justify-between">
        <div>
          <label class="text-sm font-medium text-gray-900 dark:text-gray-300"
            for="unilevel_upline1_percentage">{{ __('12th Upline') }}
          </label>
        </div>
        <div class="input-group">
          <input type="text" name="unilevel_upline12_percentage" value="{{ $commissions[11]->commission }}">
          <span>%</span>
        </div>
      </div>
      <small class="text-warning">{{ __('Twelfth Referrer Commission Percentage') }}</small>
    </div>
  </div>
  <div class="card-footer text-end">
    <button type="submit" class="btn btn-primary">{{ __('Update') }}</button>
  </div>
  </div>
</form>
@endsection


@section('page-scripts')
<script src="https://cdn.tiny.cloud/1/{{ $general->tinymce }}/tinymce/6/tinymce.min.js" referrerpolicy="origin">
</script>
<script>
$(function() {
  "use strict";
  tinymce.init({
    selector: 'textarea#membership_terms',
    plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount code',
    toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat | code',
  });
})
</script>
@endsection