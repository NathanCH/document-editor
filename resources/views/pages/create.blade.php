@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">
                    {{ __('Create Page') }}
                </div>
                <div class="card-body">
                    <form method="POST" action="{{ route('pages') }}" aria-label="{{ __('Create Page') }}">
                        @csrf
                        <div class="form-group row">
                            <label for="document_id" class="col-md-4 col-form-label text-md-right">
                                {{ __('Document') }}
                            </label>
                            <div class="col-md-6">
                                <select 
                                    id="document_id"
                                    name="document_id"
                                    class="form-control {{ $errors->has('document_id') ? 'is-invalid' : '' }}" 
                                    autofocus
                                >
                                    @foreach($documents as $document)
                                        <option value="{{$document->id}}">{{$document->title}}</option>
                                    @endforeach
                                </select>

                                @if ($errors->has('document_id'))
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('document_id') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="order" class="col-md-4 col-form-label text-md-right">
                              {{ __('Order') }}
                            </label>
                            <div class="col-md-6">
                                <input
                                    id="order"
                                    name="order"
                                    type="text"
                                    class="form-control {{ $errors->has('order') ? 'is-invalid' : '' }}"
                                    placeholder="0"
                                    autofocus
                                />
                                @if ($errors->has('order'))
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('order') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>
                        <div class="form-group row mb-0">
                            <div class="col-md-6 offset-md-4">
                                <button type="submit" class="btn btn-primary">
                                    {{ __('Create Page') }}
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
