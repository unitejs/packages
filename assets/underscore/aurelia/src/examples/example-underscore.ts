/**
 * Example of underscore usage.
 *
 * @export
 * @class ExampleUnderscore
 */
import _ from "underscore";

export class ExampleUnderscore {
    /**
     * Result 1 displayed in the view.
     * @type {string}
     */
    public result1: string;

    /**
     * The component is being attached to the DOM.
     * @returns {void}
     */
    public attached(): void {
        const objA = { name: "bob", car: "porsche" };
        const objB = { name: "bill", age: 40 };

        this.result1 = JSON.stringify(_.extend(objA, objB));
    }
}
