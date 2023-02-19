<script>
    'use strict';

    var $barColor = '#f3f3f3';
    var $trackBgColor = '#EBEBEB';
    var $primary_light = '#A9A2F6';
    var $success_light = '#55DD92';
    var $warning_light = '#ffc085';
    var $strokeColor2 = '#df87f2';
    var $strokeColor = "#ebe9f1";
    var $textMutedColor = "#b9b9c3";
    var $budgetStrokeColor2 = "#dcdae3";

    var statisticsBarChartOptions;
    var statisticsLineChartOptions;
    var withdrawChartOptions;
    var withdrawamountChartOptions;
    var withdrawchargeChartOptions;
    var withdrawpendingChartOptions;

    var trxsLineChartOptions;
    var tradesLineChartOptions;
    var tradesAmountLineChartOptions;

    var trafficChartOptions;
    var userChartOptions;
    var newsletterChartOptions;
    var binaryReportChartOptions;
    var budgetChartOptions;

    var lineAreaChart1 = document.querySelector('#line-area-chart-1');
    var lineAreaChart2 = document.querySelector('#line-area-chart-2');
    var lineAreaChart3 = document.querySelector('#line-area-chart-3');
    var lineAreaChart4 = document.querySelector('#line-area-chart-4');
    var lineAreaChart6 = document.querySelector('#line-area-chart-6');
    var lineAreaChart7 = document.querySelector('#line-area-chart-7');
    var lineAreaChart8 = document.querySelector('#line-area-chart-8');
    var lineAreaChart9 = document.querySelector('#line-area-chart-9');
    var lineAreaChart10 = document.querySelector('#line-area-chart-10');
    var lineAreaChart11 = document.querySelector('#line-area-chart-11');
    var lineAreaChart12 = document.querySelector('#line-area-chart-12');
    var $trxsLineChart = document.querySelector('#trxs-chart');
    var $tradesLineChart = document.querySelector('#trades-numbers-chart');
    var $tradesAmountLineChart = document.querySelector('#trades-amount-chart');
    var $binaryReportChart = document.querySelector("#binary-report-chart");
    var $budgetChart = document.querySelector("#budget-chart");

    var statisticsBar;
    var statisticsLine;
    var withdrawChart;
    var withdrawamountChart;
    var withdrawchargeChart;
    var withdrawpendingChart;
    var trafficChart;
    var userChart;
    var newsletterChart;

    var trxsLineChart;
    var tradesLineChart;
    var tradesAmountLineChart;
    var binaryReportChart;
    var budgetChart;


    @if ($plat->trading->binary_status == 1)
        // Binary Trades Chart
        // ----------------------------------
        budgetChartOptions = {
            chart: {
                height: 100,
                type: 'area',
                toolbar: {
                    show: false
                },
                sparkline: {
                    enabled: true
                },
                grid: {
                    show: false,
                    padding: {
                        left: 0,
                        right: 0
                    }
                }
            },
            colors: [window.colors.solid.primary],
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth',
                width: 2.5
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shadeIntensity: 0.9,
                    opacityFrom: 0.7,
                    opacityTo: 0.5,
                    stops: [0, 80, 100]
                }
            },
            series: [{
                name: "Trades",
                data: [
                    @foreach ($binary_trades as $trade)
                        {{ $trade['total'] }},
                    @endforeach
                ],
            }],
            xaxis: {
                labels: {
                    show: false
                },
                axisBorder: {
                    show: false
                }
            },
            yaxis: [{
                y: 0,
                offsetX: 0,
                offsetY: 0,
                padding: {
                    left: 0,
                    right: 0
                }
            }],
            tooltip: {
                x: {
                    show: false
                }
            }
        };
        budgetChart = new ApexCharts($budgetChart, budgetChartOptions);
        budgetChart.render();

        // Binary Report Chart
        // ----------------------------------
        binaryReportChartOptions = {
            chart: {
                height: 230,
                stacked: true,
                type: "bar",
                toolbar: {
                    show: false
                },
                dropShadow: {
                    enabled: true,
                    top: 5,
                    left: 2,
                    blur: 5,
                    opacity: 0.2
                },
            },
            plotOptions: {
                bar: {
                    columnWidth: "17%",
                    endingShape: "rounded",
                },
                distributed: true,
            },
            colors: [window.colors.solid.success, window.colors.solid.danger],
            series: [{
                    name: "Wins",
                    data: [
                        @foreach ($binary_trades as $trade)
                            {{ $trade['wins'] }},
                        @endforeach
                    ],
                },
                {
                    name: "Loses",
                    data: [
                        @foreach ($binary_trades as $trade)
                            -{{ $trade['loses'] }},
                        @endforeach
                    ],
                },
            ],
            dataLabels: {
                enabled: false,
            },
            legend: {
                show: false,
            },
            grid: {
                borderColor: $strokeColor,
                padding: {
                    top: -20,
                    bottom: 5,
                    left: 20
                }
            },
            xaxis: {
                categories: [
                    @foreach ($binary_trades as $month => $count)
                        "{{ $month }}",
                    @endforeach
                ],
                labels: {
                    style: {
                        colors: $textMutedColor,
                        fontSize: "0.86rem",
                    },
                },
                axisTicks: {
                    show: false,
                },
                axisBorder: {
                    show: false,
                },
            },
            yaxis: {
                labels: {
                    style: {
                        colors: $textMutedColor,
                        fontSize: "0.86rem",
                    },
                },
            },
        };
        binaryReportChart = new ApexCharts(
            $binaryReportChart,
            binaryReportChartOptions
        );
        binaryReportChart.render();
    @endif

    // Trades Line Chart
    // -----------------------------
    tradesLineChartOptions = {
        chart: {
            height: 240,
            toolbar: {
                show: false
            },
            zoom: {
                enabled: false
            },
            type: 'line',
            dropShadow: {
                enabled: true,
                top: 18,
                left: 2,
                blur: 5,
                opacity: 0.2
            },
            offsetX: -10
        },
        stroke: {
            curve: 'smooth',
            width: 4
        },
        grid: {
            borderColor: $strokeColor,
            padding: {
                top: -20,
                bottom: 5,
                left: 20
            }
        },
        legend: {
            show: false
        },
        colors: [window.colors.solid.success, window.colors.solid.danger],
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                inverseColors: false,
                gradientToColors: [window.colors.solid.success],
                shadeIntensity: 1,
                type: 'horizontal',
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100, 100, 100]
            }
        },
        markers: {
            size: 0,
            hover: {
                size: 5
            }
        },
        xaxis: {
            labels: {
                offsetY: 5,
                style: {
                    colors: $textMutedColor,
                    fontSize: '0.857rem'
                }
            },
            axisTicks: {
                show: false
            },
            categories: [
                @foreach ($trades as $month => $count)
                    "{{ $month }}",
                @endforeach
            ],
            axisBorder: {
                show: false
            },
            tickPlacement: 'on'
        },
        yaxis: {
            tickAmount: 5,
            labels: {
                style: {
                    colors: $textMutedColor,
                    fontSize: '0.857rem'
                },
                formatter: function(val) {
                    return val > 999 ? (val / 1000).toFixed(1) + 'k' : val;
                }
            }
        },
        tooltip: {
            x: {
                show: false
            }
        },
        series: [{
            name: 'Buy',
            data: [
                @foreach ($trades as $trade)
                    {{ $trade['buy']['count'] }},
                @endforeach
            ]
        }, {
            name: 'Sell',
            data: [
                @foreach ($trades as $trade)
                    {{ $trade['sell']['count'] }},
                @endforeach
            ]
        }]
    };
    tradesLineChart = new ApexCharts($tradesLineChart, tradesLineChartOptions);
    tradesLineChart.render();

    // Trades Amount Line Chart
    // -----------------------------
    tradesAmountLineChartOptions = {
        chart: {
            height: 240,
            toolbar: {
                show: false
            },
            zoom: {
                enabled: false
            },
            type: 'line',
            dropShadow: {
                enabled: true,
                top: 18,
                left: 2,
                blur: 5,
                opacity: 0.2
            },
            offsetX: -10
        },
        stroke: {
            curve: 'smooth',
            width: 4
        },
        grid: {
            borderColor: $strokeColor,
            padding: {
                top: -20,
                bottom: 5,
                left: 20
            }
        },
        legend: {
            show: false
        },
        colors: [window.colors.solid.success, window.colors.solid.danger],
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                inverseColors: false,
                gradientToColors: [window.colors.solid.success],
                shadeIntensity: 1,
                type: 'horizontal',
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100, 100, 100]
            }
        },
        markers: {
            size: 0,
            hover: {
                size: 5
            }
        },
        xaxis: {
            labels: {
                offsetY: 5,
                style: {
                    colors: $textMutedColor,
                    fontSize: '0.857rem'
                }
            },
            axisTicks: {
                show: false
            },
            categories: [
                @foreach ($trades as $month => $count)
                    "{{ $month }}",
                @endforeach
            ],
            axisBorder: {
                show: false
            },
            tickPlacement: 'on'
        },
        yaxis: {
            tickAmount: 5,
            labels: {
                style: {
                    colors: $textMutedColor,
                    fontSize: '0.857rem'
                },
                formatter: function(val) {
                    return '$' + (val > 999 ? (val / 1000).toFixed(1) + 'k' : val);
                }
            }
        },
        tooltip: {
            x: {
                show: false
            }
        },
        series: [{
            name: 'Buy',
            data: [
                @foreach ($trades as $trade)
                    {{ $trade['buy']['amount'] }},
                @endforeach
            ]
        }, {
            name: 'Sell',
            data: [
                @foreach ($trades as $trade)
                    {{ $trade['sell']['amount'] }},
                @endforeach
            ]
        }]
    };
    tradesAmountLineChart = new ApexCharts($tradesAmountLineChart, tradesAmountLineChartOptions);
    tradesAmountLineChart.render();


    // Trxs Line Chart
    // -----------------------------
    trxsLineChartOptions = {
        chart: {
            height: 240,
            toolbar: {
                show: false
            },
            zoom: {
                enabled: false
            },
            type: 'line',
            dropShadow: {
                enabled: true,
                top: 18,
                left: 2,
                blur: 5,
                opacity: 0.2
            },
            offsetX: -10
        },
        stroke: {
            curve: 'smooth',
            width: 4
        },
        grid: {
            borderColor: $strokeColor,
            padding: {
                top: -20,
                bottom: 5,
                left: 20
            }
        },
        legend: {
            show: false
        },
        colors: [$strokeColor2],
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                inverseColors: false,
                gradientToColors: [window.colors.solid.primary],
                shadeIntensity: 1,
                type: 'horizontal',
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100, 100, 100]
            }
        },
        markers: {
            size: 0,
            hover: {
                size: 5
            }
        },
        xaxis: {
            labels: {
                offsetY: 5,
                style: {
                    colors: $textMutedColor,
                    fontSize: '0.857rem'
                }
            },
            axisTicks: {
                show: false
            },
            categories: [
                @foreach ($trxs as $month => $count)
                    "{{ $month }}",
                @endforeach
            ],
            axisBorder: {
                show: false
            },
            tickPlacement: 'on'
        },
        yaxis: {
            tickAmount: 5,
            labels: {
                style: {
                    colors: $textMutedColor,
                    fontSize: '0.857rem'
                },
                formatter: function(val) {
                    return val > 999 ? (val / 1000).toFixed(1) + 'k' : val;
                }
            }
        },
        tooltip: {
            x: {
                show: false
            }
        },
        series: [{
            name: 'Deposits',
            data: [
                @foreach ($trxs as $date => $trx)
                    @if (isset($trx['deposits']))
                        {{ $trx['deposits'] }},
                    @else
                        0,
                    @endif
                @endforeach
            ]
        }, {
            name: 'Withdraws',
            data: [
                @foreach ($trxs as $date => $trx)
                    @if (isset($trx['withdraws']))
                        {{ $trx['withdraws'] }},
                    @else
                        0,
                    @endif
                @endforeach
            ]
        }]
    };
    trxsLineChart = new ApexCharts($trxsLineChart, trxsLineChartOptions);
    trxsLineChart.render();


    // Total Users Chart
    // ----------------------------------

    userChartOptions = {
        chart: {
            height: 100,
            type: 'line',
            dropShadow: {
                enabled: true,
                top: 5,
                left: 0,
                blur: 4,
                opacity: 0.1
            },
            toolbar: {
                show: false
            },
            sparkline: {
                enabled: true
            },
            grid: {
                show: false,
                padding: {
                    left: 0,
                    right: 0
                }
            }
        },
        colors: [window.colors.solid.success],
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth',
            width: 2.5
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                gradientToColors: [$success_light],
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100, 100, 100]
            }
        },
        series: [{
            name: 'Total Users',
            data: [0
                @foreach ($dates['total_users'] as $date => $count)
                    , {{ $count }}
                @endforeach
            ]
        }],
        xaxis: {
            labels: {
                show: false
            },
            axisBorder: {
                show: false
            }
        },
        yaxis: [{
            y: 0,
            offsetX: 0,
            offsetY: 0,
            padding: {
                left: 0,
                right: 0
            }
        }],
        tooltip: {
            x: {
                show: false
            }
        }
    };

    userChart = new ApexCharts(lineAreaChart1, userChartOptions);
    userChart.render();

    // Total Verified Users Chart
    // ----------------------------------

    userChartOptions = {
        chart: {
            height: 100,
            type: 'line',
            dropShadow: {
                enabled: true,
                top: 5,
                left: 0,
                blur: 4,
                opacity: 0.1
            },
            toolbar: {
                show: false
            },
            sparkline: {
                enabled: true
            },
            grid: {
                show: false,
                padding: {
                    left: 0,
                    right: 0
                }
            }
        },
        colors: [window.colors.solid.success],
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth',
            width: 2.5
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                gradientToColors: [$success_light],
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100, 100, 100]
            }
        },
        series: [{
            name: 'Verified Users',
            data: [0
                @foreach ($dates['verified_users'] as $date => $count)
                    , {{ $count }}
                @endforeach
            ]
        }],
        xaxis: {
            labels: {
                show: false
            },
            axisBorder: {
                show: false
            }
        },
        yaxis: [{
            y: 0,
            offsetX: 0,
            offsetY: 0,
            padding: {
                left: 0,
                right: 0
            }
        }],
        tooltip: {
            x: {
                show: false
            }
        }
    };

    userChart = new ApexCharts(lineAreaChart2, userChartOptions);
    userChart.render();

    // Total Email Unverified Users Chart
    // ----------------------------------

    userChartOptions = {
        chart: {
            height: 100,
            type: 'line',
            dropShadow: {
                enabled: true,
                top: 5,
                left: 0,
                blur: 4,
                opacity: 0.1
            },
            toolbar: {
                show: false
            },
            sparkline: {
                enabled: true
            },
            grid: {
                show: false,
                padding: {
                    left: 0,
                    right: 0
                }
            }
        },
        colors: [window.colors.solid.warning],
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth',
            width: 2.5
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                gradientToColors: [$warning_light],
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100, 100, 100]
            }
        },
        series: [{
            name: 'Email Unverified Users',
            data: [0
                @foreach ($dates['email_unverified_users'] as $date => $count)
                    , {{ $count }}
                @endforeach
            ]
        }],
        xaxis: {
            labels: {
                show: false
            },
            axisBorder: {
                show: false
            }
        },
        yaxis: [{
            y: 0,
            offsetX: 0,
            offsetY: 0,
            padding: {
                left: 0,
                right: 0
            }
        }],
        tooltip: {
            x: {
                show: false
            }
        }
    };

    userChart = new ApexCharts(lineAreaChart3, userChartOptions);
    userChart.render();

    // Total Withdraw Chart
    // ----------------------------------

    withdrawChartOptions = {
        chart: {
            height: 100,
            type: 'area',
            toolbar: {
                show: false
            },
            sparkline: {
                enabled: true
            },
            grid: {
                show: false,
                padding: {
                    left: 0,
                    right: 0
                }
            }
        },
        colors: [window.colors.solid.primary],
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth',
            width: 2.5
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 0.9,
                opacityFrom: 0.7,
                opacityTo: 0.5,
                stops: [0, 80, 100]
            }
        },
        series: [{
            name: 'Withdrawels',
            data: [0
                @foreach ($dates['total_withdraw'] as $date => $count)
                    , {{ $count }}
                @endforeach
            ]
        }],
        xaxis: {
            labels: {
                show: false
            },
            axisBorder: {
                show: false
            }
        },
        yaxis: [{
            y: 0,
            offsetX: 0,
            offsetY: 0,
            padding: {
                left: 0,
                right: 0
            }
        }],
        tooltip: {
            x: {
                show: false
            }
        }
    };

    withdrawChart = new ApexCharts(lineAreaChart9, withdrawChartOptions);
    withdrawChart.render();

    // Total Withdrawel Amount Chart
    // ----------------------------------

    withdrawamountChartOptions = {
        chart: {
            height: 100,
            type: 'area',
            toolbar: {
                show: false
            },
            sparkline: {
                enabled: true
            },
            grid: {
                show: false,
                padding: {
                    left: 0,
                    right: 0
                }
            }
        },
        colors: [window.colors.solid.success],
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth',
            width: 2.5
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 0.9,
                opacityFrom: 0.7,
                opacityTo: 0.5,
                stops: [0, 80, 100]
            }
        },
        series: [{
            name: 'Withdrawel Amount',
            data: [0, {{ getAmount($paymentWithdraw['total_withdraw_amount']) }}]
        }],
        xaxis: {
            labels: {
                show: false
            },
            axisBorder: {
                show: false
            }
        },
        yaxis: [{
            y: 0,
            offsetX: 0,
            offsetY: 0,
            padding: {
                left: 0,
                right: 0
            }
        }],
        tooltip: {
            x: {
                show: false
            }
        }
    };

    withdrawamountChart = new ApexCharts(lineAreaChart10, withdrawamountChartOptions);
    withdrawamountChart.render();

    // Total Withdrwael Charge Chart
    // ----------------------------------

    withdrawchargeChartOptions = {
        chart: {
            height: 100,
            type: 'area',
            toolbar: {
                show: false
            },
            sparkline: {
                enabled: true
            },
            grid: {
                show: false,
                padding: {
                    left: 0,
                    right: 0
                }
            }
        },
        colors: [window.colors.solid.danger],
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth',
            width: 2.5
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 0.9,
                opacityFrom: 0.7,
                opacityTo: 0.5,
                stops: [0, 80, 100]
            }
        },
        series: [{
            name: 'Withdrawel Charge',
            data: [0, {{ getAmount($paymentWithdraw['total_withdraw_charge']) }}]
        }],
        xaxis: {
            labels: {
                show: false
            },
            axisBorder: {
                show: false
            }
        },
        yaxis: [{
            y: 0,
            offsetX: 0,
            offsetY: 0,
            padding: {
                left: 0,
                right: 0
            }
        }],
        tooltip: {
            x: {
                show: false
            }
        }
    };

    withdrawchargeChart = new ApexCharts(lineAreaChart11, withdrawchargeChartOptions);
    withdrawchargeChart.render();

    // Total Pending Withdrawel Chart
    // ----------------------------------

    withdrawpendingChartOptions = {
        chart: {
            height: 100,
            type: 'area',
            toolbar: {
                show: false
            },
            sparkline: {
                enabled: true
            },
            grid: {
                show: false,
                padding: {
                    left: 0,
                    right: 0
                }
            }
        },
        colors: [window.colors.solid.warning],
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth',
            width: 2.5
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 0.9,
                opacityFrom: 0.7,
                opacityTo: 0.5,
                stops: [0, 80, 100]
            }
        },
        series: [{
            name: 'Pending Withdrawel',
            data: [0
                @foreach ($dates['total_withdraw_pending'] as $date => $count)
                    , {{ $count }}
                @endforeach
            ]
        }],
        xaxis: {
            labels: {
                show: false
            },
            axisBorder: {
                show: false
            }
        },
        yaxis: [{
            y: 0,
            offsetX: 0,
            offsetY: 0,
            padding: {
                left: 0,
                right: 0
            }
        }],
        tooltip: {
            x: {
                show: false
            }
        }
    };

    withdrawpendingChart = new ApexCharts(lineAreaChart12, withdrawpendingChartOptions);
    withdrawpendingChart.render();
</script>
