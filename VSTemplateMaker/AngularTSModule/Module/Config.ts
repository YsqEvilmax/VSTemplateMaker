/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../scripts/typings/angularjs/angular-route.d.ts" />

module $fileinputname$App {
    export class Config {
        constructor($routeProvider: ng.route.IRouteProvider) {
            $routeProvider.when("/My", {
                templateUrl: "./Views/MyView.html",
                controller: "$fileinputname$App.Controllers.MyCtrl",
                controllerAs: "MC"
            }).otherwise({
                redirectTo: "/My"
            });
        }
    }

    Config.$inject = ["$routeProvider"];
}