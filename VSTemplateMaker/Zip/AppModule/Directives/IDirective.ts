module $fileinputname$.Directives {

    export interface IDirective {
        CreateDirective();
    }

    export abstract class Directive implements IDirective {
        public constructor() {
            return this.CreateDirective();
        }

        public abstract CreateDirective();
    }
}

