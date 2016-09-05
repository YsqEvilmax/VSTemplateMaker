/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../scripts/typings/angularjs/angular-route.d.ts" />
/// <reference path="../../scripts/typings/angularjs/angular-resource.d.ts" />

module $fileinputname$App {
    export class $fileinputname$ {
        public static Dir(): string {
            let path = window.location.pathname;
            let dir = path.substring(0, path.lastIndexOf('/') + 1);
            return dir;
        }

        static _module = angular.module("$fileinputname$",
            ["ngRoute", "ngResource"])
            .config(($routeProvider: ng.route.IRouteProvider) => {
                $routeProvider.when("/My", {
                    templateUrl: $fileinputname$.Dir() + "Views/MyView.html",
                    controller: "AppModuleApp.Controllers.MyCtrl",
                    controllerAs: "MC"
                }).otherwise({
                    redirectTo: "/My"
                });
            });
    }
} 