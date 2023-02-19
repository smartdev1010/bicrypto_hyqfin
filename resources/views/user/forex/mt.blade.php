@extends('layouts.app')
@section('page-style')
<style>

</style>
@endsection
@section('content')
    <iframe src="https://trade.mql5.com/trade?servers={{ $account->broker }}&amp;trade_server={{ $account->broker }}&demo_all_servers=1&amp;startup_mode=open_trade&amp;lang={{ $account->language }}&amp;save_password=on&login={{ $account->number }}" allowfullscreen="allowfullscreen" style="width: 100%; height: 83vh; border: none;"></iframe>
@endsection
