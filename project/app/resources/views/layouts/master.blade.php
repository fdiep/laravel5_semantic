<html>
    <head>
        <title>Laravel App</title>
        {{-- Fonts --}}
        <link href="https://fonts.googleapis.com/css?family=Lato:100" rel="stylesheet" type="text/css">
        {{-- CSS --}}
        <link rel="stylesheet" href="{{ elixir('css/vendor.css') }}">
        <link rel="stylesheet" href="{{ elixir('css/app.css') }}">
    </head>
    <body ng-app="LaravelApp" ng-app="LaravelApp" ng-controller="MainController">

      @yield('content')

      {{-- JS --}}
      <script src="{{ elixir('js/vendor.js') }}"></script>
      <script src="{{ elixir('js/app.js') }}"></script>
    </body>
</html>
