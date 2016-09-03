module TestApp.Interfaces {

    export interface IPlaylistService {
        getPlayList: () => Array<ITrack>;
    }

    export interface ITrack {
        title: string;
        artist: string;
        rating: number;
    }
}