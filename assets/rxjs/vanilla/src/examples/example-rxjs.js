/**
 * Example of rxjs usage.
 *
 * @export
 * @class ExampleRxjs
 */
import "rxjs/add/observable/fromEvent";
import "rxjs/add/operator/bufferCount";
import /* Synthetic Import */ RXO from "rxjs/Observable";

export class ExampleRxjs {
    /**
     * The component has been attached to the DOM.
     * @returns {void}
     */
    attached() {
        RXO.Observable
            .fromEvent(this._btn, "click")
            .bufferCount(3)
            .subscribe(() => {
                this._span.innerText = "Clicked 3 times!";
            });
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
