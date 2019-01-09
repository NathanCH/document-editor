<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <title>{{ config('app.name') }}</title>
  <script src="{{ asset('js/app.js') }}" defer></script>
  <link href="https://fonts.googleapis.com/css?family=Niramit:400,600" rel="stylesheet" type="text/css">
  <link href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" rel="stylesheet" integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" crossorigin="anonymous">
  <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
  <div id="app">
    <nav class="navbar navbar-expand-sm navbar-grey">
      <div class="container">
        <span class="text-muted"><?= date('l, F d') ?></span>
        <a href="#" class="text-muted">View Source</a>
      </div>
    </nav>
    <nav class="navbar navbar-expand-sm navbar-light">
      <div class="container">
        <div class="navbar-brand-container">
          <a class="navbar-brand" href="{{ url('/') }}">
            {{ config('app.name') }} <span class="navbar-brand-icon"><span>
          </a>
          <p class="navbar-lead">free online document editor</p>
        </div>
        <ul class="navbar-nav">
          @guest
            <li class="nav-item">
              <a class="btn btn-primary" href="{{ route('login') }}">{{ __('Sign In') }}</a>
              <a class="btn btn-link ml-2" href="{{ route('register') }}">{{ __('create account') }}</a>
            </li>
          @else
            <li class="nav-item dropdown">
              <a id="navbarDropdown" class="nav-link dropdown-toggle btn btn-light" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                {{ Auth::user()->name }} <span class="caret"></span>
              </a>
              <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="{{ route('profile') }}">
                  {{ __('My Profile') }}
                </a>
                <a class="dropdown-item" href="{{ route('pages') }}">
                  {{ __('My Pages') }}
                </a>
                <a class="dropdown-item" href="{{ route('logout') }}"
                   onclick="event.preventDefault();
                         document.getElementById('logout-form').submit();">
                  {{ __('Logout') }}
                </a>
                <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                  @csrf
                </form>
              </div>
            </li>
          @endguest
        </ul>
      </div>
    </nav>
    <main class="main">
      @yield('content')
    </main>
  </div>
</body>
</html>
