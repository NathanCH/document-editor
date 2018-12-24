@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-12">
            <div class="text-left">
                <a href="{{ route('profile') }}" class="btn btn-link mb-3">
                  Back to Profile
                </a>
            </div>
            <div class="card">
                <div class="card-header">Update Password</div>
                <div class="card-body">
                    <form method="POST" action="{{ route('profile/password') }}" aria-label="{{ __('Update Password') }}">
                        @csrf
                        <div class="form-group row">
                            <label for="name" class="col-md-4 col-form-label text-md-right">{{ __('Current Password') }}</label>
                            <div class="col-md-6">
                                <input 
                                  id="current_password"
                                  type="password"
                                  class="form-control{{ $errors->has('current_password') ? ' is-invalid' : '' }}" 
                                  name="current_password"
                                  autocomplete="off"
                                  autofocus
                                >
                                @if ($errors->has('current_password'))
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('current_password') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="name" class="col-md-4 col-form-label text-md-right">{{ __('New Password') }}</label>
                            <div class="col-md-6">
                                <input 
                                  id="password"
                                  type="password"
                                  class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}"
                                  autocomplete="off"
                                  name="password"
                                >
                                @if ($errors->has('password'))
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="name" class="col-md-4 col-form-label text-md-right">{{ __('Confirm New Password') }}</label>
                            <div class="col-md-6">
                                <input 
                                  id="password_confirmation"
                                  type="password"
                                  class="form-control{{ $errors->has('password_confirmation') ? ' is-invalid' : '' }}"
                                  autocomplete="off"
                                  name="password_confirmation"
                                >
                                @if ($errors->has('password_confirmation'))
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('password_confirmation') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>
                        <div class="form-group row mb-0">
                            <div class="col-md-6 offset-md-4">
                                <button type="submit" class="btn btn-primary">
                                    {{ __('Update Password') }}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
