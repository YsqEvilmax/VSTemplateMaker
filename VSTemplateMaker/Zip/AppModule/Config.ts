module $fileinputname$ {
    export class Config {
        constructor($routeProvider: ng.route.IRouteProvider) {
            $routeProvider.when("/My", {
                templateUrl: "./Templates/My.html",
                controller: "MyCtrl"
            }).otherwise({
                redirectTo: "/My"
            });
        }
    }

    Config.$inject = ["$routeProvider"];
    app.config(Config);
}