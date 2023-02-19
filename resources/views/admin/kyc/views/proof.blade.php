@if ($row->document3 != null)
    @if (pathinfo(storage_path('app/' . $row->document3), PATHINFO_EXTENSION) != 'pdf')
        <a href="{{ getimage('assets/images/kyc/' . $row->document3) }}" class="image-popup">Proof</a>
    @else
        <a>Proof</a>
    @endif
    &nbsp; <a title="Download" href="{{ getimage('assets/images/kyc/' . $row->document3) }}" target="_blank"><i
            class="bi bi-download"></i></a>
@else
    &nbsp;
@endif
