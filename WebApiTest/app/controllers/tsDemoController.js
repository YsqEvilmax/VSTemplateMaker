/// <reference path="../services/playlistservice.ts" />
/// <reference path="../interfaces/interfaces.ts" />
/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
var TestApp;
(function (TestApp) {
    var controllers;
    (function (controllers) {
        "use strict";
        var TSDemoController = (function () {
            //static $inject = ["TestApp.Services.PlayListService"];
            function TSDemoController(playListService) {
                var _this = this;
                this.getFavourites = function () {
                    _this.favorites = _this.playListService.getPlayList();
                };
                this.playListService = playListService;
            }
            return TSDemoController;
        }());
        controllers.TSDemoController = TSDemoController;
        //angular.module("angularWithTS").controller("TestApp.controllers.tsDemoController", TSDemoController);
        TSDemoController.$inject = ["TestApp.Services.PlayListService"];
        TestApp.AngularWithTS._module.controller("TestApp.controllers.TSDemoController", TSDemoController);
    })(controllers = TestApp.controllers || (TestApp.controllers = {}));
})(TestApp || (TestApp = {}));
//# sourceMappingURL=tsDemoController.js.map