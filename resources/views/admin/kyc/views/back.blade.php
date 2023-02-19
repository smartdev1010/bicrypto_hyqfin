@if ($row->document2 != null)
    @if (pathinfo(storage_path('app/' . $row->document2), PATHINFO_EXTENSION) != 'pdf')
        <a href="{{ getimage('assets/images/kyc/' . $row->document2) }}"
            class="image-popup">{{ $row->documentType == 'nidcard' ? 'Back Side' : 'Proof' }}</a>
    @else
        {!! $row->documentType == 'nidcard' ? '<a>Back Side</a>' : '<a>Proof</a>' !!}
    @endif
    &nbsp; <a title="Download" href="{{ getimage('assets/images/kyc/' . $row->document2) }}" target="_blank"><i
            class="bi bi-download"></i></a>
@else
    &nbsp;
@endif
