module $fileinputname$.Services {

    export interface IAPIService<T extends Models.Model> {
        Get(): ng.IPromise<any>;
        Post(item: T): ng.IPromise<any>;
        Put(id: number, data: T): ng.IPromise<any>;
        Delete(id: number): ng.IPromise<any>;
    }

    export class APIService<T extends Models.Model> implements IAPIService<T>{
        protected data: Array<T> = new Array<T>();;
        public get Data(): Array<T> {
            return this.data;
        }

        public constructor(protected APIUrl: string,
            protected httpService: ng.IHttpService,
            protected qService: ng.IQService) {
        }

        public Get(): ng.IPromise<any> {
            let deferred = this.qService.defer();

            this.httpService.get(this.APIUrl)
                .then(function (success: any) {
                    this.data = success.data;
                    deferred.resolve(this.data);
                }, function (error: any) {
                    deferred.reject(error);
                });

            return deferred.promise;
        }

        public Post(item: T): ng.IPromise<any>{
            let deferred = this.qService.defer();

            this.httpService.post(this.APIUrl, item)
                .then((result:any) => {
                    item.id = result.data.id;
                    this.data.push(item);
                    deferred.resolve();
                }, error => {
                    deferred.reject(error);
                });

            return deferred.promise;
        }

        public Put(id: number, data: T): ng.IPromise<any> {
            let deferred = this.qService.defer();

            this.httpService.put(this.APIUrl, data, id)
                .success((result: any, status) => {
                    let index: number = result;
                    this.data[index] = data;
                })
                .error(error => {
                    deferred.reject(error);
                });
            return deferred.promise;
        }

        public Delete(id: number): ng.IPromise<any> {
            let deferred = this.qService.defer();

            this.httpService.delete(this.APIUrl, id)
                .then((result: any) => {
                    id = result.data;
                    let items = this.data.filter(item => item.id == id);
                    for (var item of items) {
                        let index: number = this.data.indexOf(item);
                        if (index > -1) {
                            this.data.splice(index, 1);
                        }
                    }
                    deferred.resolve();
                }, error => {
                    deferred.reject(error);
                });

            return deferred.promise;
        }
    }
}
