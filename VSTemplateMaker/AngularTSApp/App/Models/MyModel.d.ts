/// <reference path="../../../scripts/typings/angularjs/angular.d.ts" />

declare module Angular.App.Models {
    interface MyModel {
        id:number,
        title: string;
        description: string;
        author: string;
        rating: number;
        category: number;
    }
}
