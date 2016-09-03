/// <reference path="../interfaces/interfaces.ts" />
var TestApp;
(function (TestApp) {
    var Services;
    (function (Services) {
        var PlayListService = (function () {
            function PlayListService($http) {
                this.getPlayList = function () {
                    //For the purpose of this demo I am returning the hard coded values, hoever in real world TestApplication
                    //You would probably use "this.httpService.get" method to call backend REST apis to fetch the data from server.
                    var res = [
                        { title: "Numb", artist: "Linkin Park", rating: 5 },
                        { title: "Fire Flies", artist: "Owl City", rating: 4.3 },
                        { title: "Yellow", artist: "coldplay", rating: 4.5 },
                        { title: "Skyfall", artist: "Adele", rating: 4.5 }
                    ];
                    return res;
                };
                this.httpService = $http;
            }
            PlayListService.$inject = ["$http"];
            return PlayListService;
        }());
        Services.PlayListService = PlayListService;
        //angular.module("angularWithTS").service("TestApp.Services.PlayListService", PlayListService);
        TestApp.AngularWithTS._module.service("TestApp.Services.PlayListService", PlayListService);
    })(Services = TestApp.Services || (TestApp.Services = {}));
})(TestApp || (TestApp = {}));
//# sourceMappingURL=playlistservice.js.map