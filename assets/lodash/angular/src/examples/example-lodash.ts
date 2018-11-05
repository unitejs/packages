/**
 * Example of lodash usage.
 *
 * @export
 * @class ExampleLodash
 */
import { Component } from "@angular/core";
import _ from "lodash";

@Component({
    moduleId: "genModuleId",
    templateUrl: "./example-lodash.html"
})
export class ExampleLodash {
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

        this.result1 = JSON.stringify(_.assign(objA, objB));
    }
}
