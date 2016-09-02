module $fileinputname$.Controllers {

    import Models = $fileinputname$.Models;
    import Services = $fileinputname$.Services;

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
    app.controller(MyCtrl);
}