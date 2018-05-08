var app = angular.
    module("main", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider.when("/home", {
        templateUrl: '/scripts/app/pages/dashboard.html',
        controller: 'homeController'
    });

    $routeProvider.when("/subscribe", {
        templateUrl: '/scripts/app/pages/subscribe.html',
        controller: 'homeController'
    });

    $routeProvider.otherwise({ redirectTo: "/home" });
});

