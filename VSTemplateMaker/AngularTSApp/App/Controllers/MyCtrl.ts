/// <reference path="../../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../services/myds.ts" />
/// <reference path="../models/mymodel.d.ts" />
/// <reference path="datacontroller.ts" />

module Angular.App.Controllers {

    export class MyCtrl extends DataController<Angular.App.Models.MyModel> {

        getData() {
            this.scope.data = this.service.Resource.query();
        }
    }

    MyCtrl.$inject = ["$scope", "Angular.App.Services.MyDS"];
    Angular.App.$fileinputname$._module.controller("Angular.App.Controllers.MyCtrl", MyCtrl);
}