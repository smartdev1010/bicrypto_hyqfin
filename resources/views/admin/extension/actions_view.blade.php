 @if ($row->installed == 1)
     @php
         $res = (new \App\Http\Controllers\Admin\Ext\InstallController())->check_update($row->product_id);
     @endphp
     @if ($res['status'])
         <a type="button" class="btn btn-outline-warning" style="top:80%"
             href="{{ route('admin.extensions.install', [$row->product_id]) }}">
             <i class="bi bi-download"></i> {{ __('Update') }}
             V{{ $res['version'] }}
             {{ __('Available') }}</a>
     @endif
     @if ($row->status == 0)
         <button type="button" class="btn btn-icon btn-outline-success rounded ml-1"
             onclick="$('#activateModal').find('.extension-name').text('{{ __($row->name) }}');
         $('#activateModal').find('input[name=id]').val('{{ $row->id }}');"
             data-modal-toggle="activateModal" title="{{ __('Enable') }}">
             <i class="bi bi-eye"></i>
         </button>
     @else
         <button type="button" class="btn btn-icon btn-outline-danger ml-1 deactivateBtn"
             data-modal-toggle="deactivateModal"
             onclick="$('#deactivateModal').find('.extension-name').text('{{ __($row->name) }}');
             $('#deactivateModal').find('input[name=id]').val('{{ $row->id }}');"
             title="{{ __('Disable') }}">
             <i class="bi bi-eye-slash"></i>
         </button>
     @endif
     <a href="{{ route('admin.extensions.activater', [$row->product_id]) }}"
         class="btn btn-icon btn-outline-success ml-1" title="{{ __('Re-Verify License') }}">
         <i class="bi bi-check-lg"></i>
     </a>
 @else
     @if ($row->activated == 0)
         <a href="{{ route('admin.extensions.activater', [$row->product_id]) }}"
             class="btn btn-icon btn-outline-success ml-1" title="{{ __('Verify License') }}">
             <i class="bi bi-check-lg"></i>
         </a>
     @else
         <a href="{{ route('admin.extensions.install', [$row->product_id]) }}"
             class="btn btn-icon btn-outline-dark ml-1" title="{{ __('Install') }}">
             <i class="bi bi-download"></i>
         </a>
         <a href="{{ route('admin.extensions.activater', [$row->product_id]) }}"
             class="btn btn-icon btn-outline-success ml-1" title="{{ __('Re-Verify License') }}">
             <i class="bi bi-check-lg"></i>
         </a>
     @endif
 @endif
