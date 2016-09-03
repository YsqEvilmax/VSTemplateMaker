/// <reference path="../../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../../scripts/typings/angularjs/angular-resource.d.ts" />
/// <reference path="../models/mymodel.d.ts" />

module $fileinputname$App.Services {

    import ngr = ng.resource;

    export class DataService<T> {
        private resource: ngr.IResourceClass<ngr.IResource<T>>;
        public get Resource() {
            return this.resource;
        }

        constructor($resource: ngr.IResourceService) {
            this.resource = $resource("api/values/:id", { id: "@id" },
            {
                'get': { method: "GET" },
                'save': { method: "PUT" },
                'query': { method: "GET", isArray: true },
                'delete': {method: "DELETE"}
            });
        }
    }

    export class MyDS extends DataService<$fileinputname$App.Models.MyModel>{
        constructor($resource: ngr.IResourceService) {
            super($resource);
        }
    }

    $fileinputname$App.$fileinputname$._module.factory("$fileinputname$App.Services.MyDS", ["$resource", (r) => { return new MyDS(r) }]);
}