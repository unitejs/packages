/**
 * Example of rxjs usage.
 *
 * @export
 * @class ExampleRxjs
 */
// import _ from "rxjs";

export class ExampleRxjs {
    /**
     * The component has been attached to the DOM.
     * @returns {void}
     */
    attached() {
        this._span.innerText = "Clicked 3 times!";
    }

    /**
     * Render the component.
     * @returns {void}
     */
    render(parent) {
        this._elem = document.createElement("div");
        this._elem.id = "rxjs-example";
        parent.appendChild(this._elem);

        this._btn = document.createElement("button");
        this._btn.innerText = "Click Me";

        this._span = document.createElement("span");

        this._elem.appendChild(this._btn);
        this._elem.appendChild(this._span);
    }
}
