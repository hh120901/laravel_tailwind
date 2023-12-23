<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Laravel + Tailwind</title>
    @include('layouts.sections.styles')
</head>
<body>
    @include('layouts.sections.header')
    @yield('content')
    @include('layouts.sections.footer')
    @include('layouts.sections.scripts')
</body>
</html>