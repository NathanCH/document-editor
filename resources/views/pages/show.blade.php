@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-12">
          <div class="text-left">
              <a href="{{ route('pages') }}" class="btn btn-link mb-3">
                Back to Pages
              </a>
              <a href="/documents/{{ $page->document->id }}" class="btn btn-link mb-3">
                Back to {{ $page->document->title }}
              </a>
          </div>
            <div class="card">
                <div class="card-header">{{ $page->document->title }}</div>
                <div class="card-body text-center">
                  Blank canvas
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
