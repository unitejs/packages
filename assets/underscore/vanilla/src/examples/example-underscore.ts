/**
 * Example of underscore usage.
 *
 * @export
 * @class ExampleUnderscore
 */
import _ from "underscore";

export class ExampleUnderscore {
    private _elem: HTMLElement;

    /**
     * The component has been attached to the DOM.
     * @returns {void}
     */
    public attached(): void {
        const objA = { name: "bob", car: "porsche" };
        const objB = { name: "bill", age: 40 };

        this._elem.innerText = JSON.stringify(_.extend(objA, objB));
    }

    /**
     * Render the component.
     * @returns {void}
     */
    public render(parent: Element): void {
        this._elem = document.createElement("span");
        this._elem.id = "underscore-example";
        parent.appendChild(this._elem);
    }
}
