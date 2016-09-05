/// <reference path="../../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../../scripts/typings/angularjs/angular-resource.d.ts" />
/// <reference path="../models/mymodel.d.ts" />
/// <reference path="dataservice.ts" />

module Angular.App.Services {

    import ngr = ng.resource;

    export class MyDS extends DataService<Angular.App.Models.MyModel>{
        constructor($resource: ngr.IResourceService) {
            super($resource, window.location.protocol + "//" + window.location.host + "/api/values/:id");
        }

        public DummyData(): Array<Angular.App.Models.MyModel> {
            let res: Array<Angular.App.Models.MyModel> = [
                { id: 1, title: "aa", description: "a", author: "a", category: 1, rating: 11 },
                { id: 2, title: "ab", description: "b", author: "a", category: 2, rating: 12 },
                { id: 3, title: "ac", description: "c", author: "a", category: 3, rating: 13 },
                { id: 4, title: "ad", description: "d", author: "a", category: 4, rating: 14 },
                { id: 5, title: "ae", description: "e", author: "a", category: 5, rating: 15 },
                { id: 6, title: "af", description: "f", author: "a", category: 6, rating: 16 }
            ];

            return res;
        }
    }

    MyDS.$inject = ["$resource"];
    Angular.App.$fileinputname$._module.service("Angular.App.Services.MyDS", MyDS);
}