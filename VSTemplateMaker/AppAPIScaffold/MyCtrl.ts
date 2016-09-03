module $rootnamespace$.Controllers {

    import Models = $fileinputname$App.Models;
    import Services = $fileinputname$App.Services;

    export class MyCtrl {
        scope: any;
        constructor(private $scope: ng.IScope,
            private service: Services.APIService<Models.MyModel>) {
            this.scope = $scope;
            service.Get();
            this.scope.data = service.Data;
        }
    }

    MyCtrl.$inject = ['$scope', 'service'];
    $fileinputname$._module.controller(MyCtrl);
}