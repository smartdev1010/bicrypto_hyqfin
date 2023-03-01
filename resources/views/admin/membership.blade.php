@extends('layouts.admin')
@section('content')
<style>
.submit-btn {
  padding: 5px 10px;
  border-radius: 5px;
}

.submit-btn:hover {
  cursor: pointer;
}

.save-btn {
  margin-left: 20px;
  border: 1px solid white;
  padding: 10px 20px;
  border-radius: 10px;
}
</style>
<form action="/admin/membership/fee" method="post"
  style="display:flex; flex-direction: row; justify-content:space-between;align-items:center" class="mb-3">
  @csrf
  <span style="flex: 1">Membership Fee : </span>
  <input type="number" name="fee" class="form-control" value={{$membership_fee}} style="flex: 3" />
  <label class="ml-3">USDT</label>
  <button class="save-btn">Save</button>
</form>
<livewire:membership-table />
@endsection