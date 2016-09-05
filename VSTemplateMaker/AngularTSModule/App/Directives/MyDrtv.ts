module $fileinputname$App.Directives {

    export class MyDrtv {

        constructor() {
            return {
                restrict: "E",
                template: "<div>MyDirective</div>"
            };
        }
    }

    $fileinputname$App.$fileinputname$._module.directive(MyDrtv);
}