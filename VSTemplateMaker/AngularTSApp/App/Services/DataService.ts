/// <reference path="../../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../../scripts/typings/angularjs/angular-resource.d.ts" />
/// <reference path="../models/mymodel.d.ts" />

module Angular.App.Services {

    import ngr = ng.resource;

    export class DataService<T> {
        private resource: ngr.IResourceClass<ngr.IResource<T>>;
        public get Resource() {
            return this.resource;
        }

        constructor($resource: ngr.IResourceService, protected url: string) {
            this.resource = $resource(url, { id: "@id" },
            {
                'get': { method: "GET" },
                'save': { method: "PUT" },
                'query': { method: "GET", isArray: true },
                'delete': {method: "DELETE"}
            });
        }
    }
}