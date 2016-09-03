/// <reference path="../services/playlistservice.ts" />
/// <reference path="../interfaces/interfaces.ts" />
/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
module TestApp.controllers {
    "use strict";
    export class TSDemoController {

        playListService: TestApp.Interfaces.IPlaylistService;
        //static $inject = ["TestApp.Services.PlayListService"];
        constructor(playListService: TestApp.Interfaces.IPlaylistService) {

            this.playListService = playListService;
        }
        favorites: Array<TestApp.Interfaces.ITrack>;

        getFavourites = () => {
            this.favorites = this.playListService.getPlayList();
        };
    }

    //angular.module("angularWithTS").controller("TestApp.controllers.tsDemoController", TSDemoController);
    TSDemoController.$inject = ["TestApp.Services.PlayListService"];
    TestApp.AngularWithTS._module.controller("TestApp.controllers.TSDemoController", TSDemoController);
} 