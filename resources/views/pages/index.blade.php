@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="text-right">
                <a href="pages/create" class="btn btn-primary mb-3">Create Page</a>
            </div>
            <div class="card">
                <div class="card-header">Pages</div>
                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif
                    
                    <h4>My Pages</h4>

                    @if ($pages)
                      <ul>
                          @foreach ($pages as $page)
                              <li>
                                  <a href="pages/{{ $page->id }}">
                                      Page {{ $page->id }}
                                  </a>
                                  from
                                  <a href="documents/{{ $page->document->id }}">
                                     {{ $page->document->title }}
                                  </a>
                              </li>
                          @endforeach
                      </ul>
                    @endif
                </div>
            </div>
        </div>
    </div>
</div>
<div id="example" class="mt-3"></div>
@endsection
