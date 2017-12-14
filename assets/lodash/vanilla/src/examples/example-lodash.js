/**
 * Example of lodash usage.
 *
 * @export
 * @class ExampleLodash
 */
import _ from "lodash";

export class ExampleLodash {
    /**
     * The component has been attached to the DOM.
     * @returns {void}
     */
    attached() {
        const objA = {name: "bob", car: "porsche"};
        const objB = {name: "bill", age: 40};

        this._elem.innerText = JSON.stringify(_.assign(objA, objB));
    }

    /**
     * Render the component.
     * @returns {void}
     */
    render(parent) {
        this._elem = document.createElement("span");
        this._elem.id = "lodash-example";
        parent.appendChild(this._elem);
    }
}
