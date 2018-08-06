@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Dashboard</div>
                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                    @foreach ($users as $user)
                        <p>{{ $user->name }} is user {{ $user->id }}</p>
                    @endforeach

                    You are logged in!
                </div>
            </div>
        </div>
    </div>
</div>
<div id="example" class="mt-3"></div>
@endsection
