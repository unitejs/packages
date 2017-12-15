/**
 * Example of underscore usage.
 *
 * @export
 * @class ExampleUnderscore
 */
import _ from "underscore";
import {Component} from "@angular/core";

@Component({
    moduleId: "genModuleId",
    templateUrl: "./example-underscore.html"
})
export class ExampleUnderscore {
    /**
     * Result 1 displayed in the view.
     * @type {string}
     */
    result1;

    /**
     * The component has been initialised.
     * @returns {void}
     */
    ngOnInit() {
        const objA = {name: "bob", car: "porsche"};
        const objB = {name: "bill", age: 40};

        this.result1 = JSON.stringify(_.extend(objA, objB));
    }
}
