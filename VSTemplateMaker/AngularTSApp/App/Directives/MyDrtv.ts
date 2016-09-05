module Angular.App.Directives {

    export class MyDrtv {

        constructor() {
            return {
                restrict: "E",
                template: "<div>MyDirective</div>"
            };
        }
    }

    Angular.App.$fileinputname$._module.directive(MyDrtv);
}