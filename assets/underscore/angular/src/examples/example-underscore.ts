/**
 * Example of underscore usage.
 *
 * @export
 * @class ExampleUnderscore
 */
import { Component } from "@angular/core";
import /* Synthetic Import */ _ from "underscore";

@Component({
    moduleId: "genModuleId",
    templateUrl: "./example-underscore.html"
})
export class ExampleUnderscore {
    /**
     * Result 1 displayed in the view.
     * @type {string}
     */
    public result1: string;

    /**
     * The component has been initialised.
     * @returns {void}
     */
    public ngOnInit(): void {
        const objA = { name: "bob", car: "porsche" };
        const objB = { name: "bill", age: 40 };

        this.result1 = JSON.stringify(_.extend(objA, objB));
    }
}
