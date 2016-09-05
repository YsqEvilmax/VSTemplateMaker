/// <reference path="../../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../services/myds.ts" />
/// <reference path="../module.ts" />

module Angular.App.Controllers {

    export class DataController<T>{
        scope: any;
        constructor(protected $scope: ng.IScope,
            protected service: Angular.App.Services.DataService<T>) {
            this.scope = $scope;
        }
    }
}