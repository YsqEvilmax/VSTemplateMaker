/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../scripts/typings/angularjs/angular-route.d.ts" />
var TestApp;
(function (TestApp) {
    var Routes = (function () {
        //static $inject = ["$routeProvider"];
        //static configureRoutes($routeProvider: ng.route.IRouteProvider) {
        //    $routeProvider.when("/home", { controller: "TestApp.controllers.TSDemoController", templateUrl: "/app/views/playlist.html", controllerAs: "playList" });
        //    $routeProvider.otherwise({ redirectTo: "/home" });
        //}
        function Routes($routeProvider) {
            $routeProvider.when("/homee", { controller: "TestApp.controllers.TSDemoController", templateUrl: "/app/views/playlist.html", controllerAs: "playList" });
            $routeProvider.otherwise({ redirectTo: "/homee" });
        }
        return Routes;
    }());
    TestApp.Routes = Routes;
    Routes.$inject = ["$routeProvider"];
})(TestApp || (TestApp = {}));
//# sourceMappingURL=app.routes.js.map