@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <a href="documents/create" class="btn btn-sm">Create Document</a>
            <div class="card">
                <div class="card-header">Documents</div>
                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif
                    
                    <h4>My Documents</h4>

                    @if ($documents)
                      <ol>
                          @foreach ($documents as $document)
                              <li>
                                  <a href="documents/{{ $document->id }}">{{ $document->title }}</a>
                              </li>
                          @endforeach
                      </ol>
                    @endif
                </div>
            </div>
        </div>
    </div>
</div>
<div id="example" class="mt-3"></div>
@endsection
