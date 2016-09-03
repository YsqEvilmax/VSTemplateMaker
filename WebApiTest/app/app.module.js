/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
//((): void=> {
//    var app = angular.module("angularWithTS", ['ngRoute']);
//    app.config(TestApp.Routes.configureRoutes);
//})() 
var TestApp;
(function (TestApp) {
    var AngularWithTS = (function () {
        function AngularWithTS() {
        }
        AngularWithTS._module = angular.module("angularWithTS", ["ngRoute"]).config(TestApp.Routes);
        return AngularWithTS;
    }());
    TestApp.AngularWithTS = AngularWithTS;
})(TestApp || (TestApp = {}));
//# sourceMappingURL=app.module.js.map