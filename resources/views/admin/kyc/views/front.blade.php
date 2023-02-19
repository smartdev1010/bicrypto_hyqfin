@if ($row->document != null)
    @if (pathinfo(storage_path('app/' . $row->document), PATHINFO_EXTENSION) != 'pdf')
        <a href="{{ getImage('assets/images/kyc/' . $row->document) }}"
            class="image-popup">{{ $row->documentType == 'nidcard' ? 'Front Side' : 'Document' }}</a>
    @else
        {!! $row->documentType == 'nidcard' ? '<a>Front Side</a>' : '<a>Document</a>' !!}
    @endif
    &nbsp; <a title="Download" href="{{ getImage('assets/images/kyc/' . $row->document) }}" target="_blank"><i
            class="bi bi-download"></i></a>
@else
    &nbsp;
@endif
