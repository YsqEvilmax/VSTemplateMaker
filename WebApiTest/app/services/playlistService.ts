/// <reference path="../interfaces/interfaces.ts" />
module TestApp.Services {

    

    export class PlayListService implements TestApp.Interfaces.IPlaylistService {
        httpService: ng.IHttpService
        static $inject = ["$http"];
        constructor($http: ng.IHttpService) {
            this.httpService = $http;
        }

        getPlayList = () => {
            //For the purpose of this demo I am returning the hard coded values, hoever in real world TestApplication
            //You would probably use "this.httpService.get" method to call backend REST apis to fetch the data from server.

            var res: Array<TestApp.Interfaces.ITrack> = [
                { title: "Numb", artist: "Linkin Park", rating: 5 },
                { title: "Fire Flies", artist: "Owl City", rating: 4.3 },
                { title: "Yellow", artist: "coldplay", rating: 4.5 },
                { title: "Skyfall", artist: "Adele", rating: 4.5 }
            ];
            return res;
        };
    }
    //angular.module("angularWithTS").service("TestApp.Services.PlayListService", PlayListService);
    TestApp.AngularWithTS._module.service("TestApp.Services.PlayListService", PlayListService);
} 