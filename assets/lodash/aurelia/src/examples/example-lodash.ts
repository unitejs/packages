/**
 * Example of lodash usage.
 *
 * @export
 * @class ExampleLodash
 */
import /* Synthetic Import */ _ from "lodash";

export class ExampleLodash {
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

        this.result1 = JSON.stringify(_.assign(objA, objB));
    }
}
