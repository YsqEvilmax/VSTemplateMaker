module $fileinputname$.Directives {

    export class MyDrtv extends Directive {

        CreateDirective() {
            return {
                restrict: 'E',
                template: '<div>MyDirective</div>'
            };
        }
    }

    app.directive(MyDrtv);
}