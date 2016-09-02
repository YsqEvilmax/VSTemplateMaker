module $fileinputname$.Services {

    export class MyService extends APIService<Models.MyModel> {
        public constructor(APIUrl: string,
            httpService: ng.IHttpService,
            qService: ng.IQService) {
            super(APIUrl, httpService, qService);
        }

        public GetByID(id: number): Models.MyModel{
            this.Get();
            return this.data[id];
        }
    }

}