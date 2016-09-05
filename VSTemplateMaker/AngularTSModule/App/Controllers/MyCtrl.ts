/// <reference path="../../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../services/myds.ts" />
/// <reference path="../module.ts" />

module $fileinputname$App.Controllers {

    import Models = $fileinputname$App.Models;
    import Services = $fileinputname$App.Services;

    export class MyCtrl {
        scope: any;
        constructor(private $scope: ng.IScope,
            private service: Services.DataService<Models.MyModel>) {
            this.scope = $scope;
        }

        getData() {
            this.scope.data = this.service.Resource.query();
        }
    }

    MyCtrl.$inject = ["$scope", "$fileinputname$App.Services.MyDS"];
    $fileinputname$App.$fileinputname$._module.controller("$fileinputname$App.Controllers.MyCtrl", MyCtrl);
}