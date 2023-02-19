@extends('layouts.app')
@section('page-style')
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" />
    <link rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/select2-bootstrap-5-theme@1.3.0/dist/select2-bootstrap-5-theme.min.css" />

    <link href="https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.5.1/min/dropzone.min.css" rel="stylesheet" />
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.12.1/css/dataTables.bootstrap5.min.css" />
    <link rel="stylesheet" type="text/css"
        href="https://cdn.datatables.net/responsive/2.3.0/css/responsive.bootstrap5.min.css" />
    <link rel="stylesheet" type="text/css"
        href="https://cdn.datatables.net/scroller/2.0.7/css/scroller.bootstrap5.min.css" />
    <link rel="stylesheet" type="text/css"
        href="https://cdn.datatables.net/searchbuilder/1.3.4/css/searchBuilder.bootstrap5.min.css" />
    <link rel="stylesheet" type="text/css"
        href="https://cdn.datatables.net/searchpanes/2.0.2/css/searchPanes.bootstrap5.min.css" />
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/select/1.4.0/css/select.bootstrap5.min.css" />
@endsection

@section('content')
    @if (session('message'))
        <div class="row mb-2">
            <div class="col-lg-12">
                <div class="alert alert-success" role="alert">{{ session('message') }}</div>
            </div>
        </div>
    @endif
    @if ($errors->count() > 0)
        <div class="alert alert-danger">
            <ul class="list-unstyled">
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif
    @yield('content')
@endsection

@section('page-script')
    <script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.5.1/min/dropzone.min.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/1.12.1/js/jquery.dataTables.min.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/1.12.1/js/dataTables.bootstrap5.min.js"></script>
    {{-- <script type="text/javascript" src="https://cdn.datatables.net/buttons/2.2.3/js/dataTables.buttons.min.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/buttons/2.2.3/js/buttons.bootstrap5.min.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/buttons/2.2.3/js/buttons.colVis.min.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/buttons/2.2.3/js/buttons.html5.min.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/buttons/2.2.3/js/buttons.print.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jszip/2.5.0/jszip.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.36/pdfmake.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.36/vfs_fonts.js"></script> --}}
    <script type="text/javascript" src="https://cdn.datatables.net/responsive/2.3.0/js/dataTables.responsive.min.js">
    </script>
    <script type="text/javascript" src="https://cdn.datatables.net/responsive/2.3.0/js/responsive.bootstrap5.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/scroller/2.0.7/js/dataTables.scroller.min.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/searchbuilder/1.3.4/js/dataTables.searchBuilder.min.js">
    </script>
    <script type="text/javascript" src="https://cdn.datatables.net/searchbuilder/1.3.4/js/searchBuilder.bootstrap5.min.js">
    </script>
    <script type="text/javascript" src="https://cdn.datatables.net/searchpanes/2.0.2/js/dataTables.searchPanes.min.js">
    </script>
    <script type="text/javascript" src="https://cdn.datatables.net/searchpanes/2.0.2/js/searchPanes.bootstrap5.min.js">
    </script>
    <script type="text/javascript" src="https://cdn.datatables.net/select/1.4.0/js/dataTables.select.min.js"></script>

    <script>
        /*$(function() {
                            let copyButtonTrans = '{{ trans('global.datatables.copy') }}'
                            let csvButtonTrans = '{{ trans('global.datatables.csv') }}'
                            let excelButtonTrans = '{{ trans('global.datatables.excel') }}'
                            let pdfButtonTrans = '{{ trans('global.datatables.pdf') }}'
                            let printButtonTrans = '{{ trans('global.datatables.print') }}'

                            let languages = {
                                'en': '//cdn.datatables.net/plug-ins/1.12.1/i18n/English.json'
                            };

                            $.extend(true, $.fn.dataTable.Buttons.defaults.dom.button, {
                                className: 'btn'
                            })
                            $.extend(true, $.fn.dataTable.defaults, {
                                language: {
                                    url: languages['{{ app()->getLocale() }}']
                                },
                                columnDefs: [{
                                    orderable: false,
                                    className: 'select-checkbox',
                                    targets: 0
                                }, {
                                    orderable: false,
                                    searchable: false,
                                    targets: -1
                                }],
                                select: {
                                    style: 'multi+shift',
                                    selector: 'td:first-child'
                                },
                                order: [],
                                scrollX: true,
                                pageLength: 100,
                                dom: 'lBfrtip<"actions">',
                                buttons: [{
                                        extend: 'copy',
                                        className: 'btn-primary',
                                        text: copyButtonTrans,
                                        exportOptions: {
                                            columns: ':visible'
                                        }
                                    },
                                    {
                                        extend: 'csv',
                                        className: 'btn-primary',
                                        text: csvButtonTrans,
                                        exportOptions: {
                                            columns: ':visible'
                                        }
                                    },
                                    {
                                        extend: 'excel',
                                        className: 'btn-primary',
                                        text: excelButtonTrans,
                                        exportOptions: {
                                            columns: ':visible'
                                        }
                                    },
                                    {
                                        extend: 'pdf',
                                        className: 'btn-primary',
                                        text: pdfButtonTrans,
                                        exportOptions: {
                                            columns: ':visible'
                                        }
                                    },
                                    {
                                        extend: 'print',
                                        className: 'btn-primary',
                                        text: printButtonTrans,
                                        exportOptions: {
                                            columns: ':visible'
                                        }
                                    }
                                ]
                            });

                            $.fn.dataTable.ext.classes.sPageButton = '';
                        });*/
    </script>
    @yield('scripts')
@endsection
