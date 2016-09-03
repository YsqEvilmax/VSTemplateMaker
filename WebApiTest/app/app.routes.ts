/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../scripts/typings/angularjs/angular-route.d.ts" />
module TestApp {
    export class Routes {
        //static $inject = ["$routeProvider"];
        //static configureRoutes($routeProvider: ng.route.IRouteProvider) {
        //    $routeProvider.when("/home", { controller: "TestApp.controllers.TSDemoController", templateUrl: "/app/views/playlist.html", controllerAs: "playList" });
        //    $routeProvider.otherwise({ redirectTo: "/home" });
        //}
        constructor($routeProvider: ng.route.IRouteProvider) {
            $routeProvider.when("/home", { controller: "TestApp.controllers.TSDemoController", templateUrl: "/app/views/playlist.html", controllerAs: "playList" });
            $routeProvider.otherwise({ redirectTo: "/home" });
        }
    }


    Routes.$inject = ["$routeProvider"];
    //TestApp.AngularWithTS._module.config(TestApp.Routes.configureRoutes);
}