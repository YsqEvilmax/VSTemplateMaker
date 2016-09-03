/// <reference path="../scripts/typings/angularjs/angular.d.ts" />


//((): void=> {
//    var app = angular.module("angularWithTS", ['ngRoute']);
//    app.config(TestApp.Routes.configureRoutes);
//})() 

module TestApp {
    export class AngularWithTS {
        static _module = angular.module("angularWithTS", ["ngRoute"]).config(TestApp.Routes);
    }
} 