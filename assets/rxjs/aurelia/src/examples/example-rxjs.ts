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
     * Result 1 displayed in the view.
     * @type {string}
     */
    public result1: string;

    /**
     * btn is the button from the template
     * @type {HTMLButtonElement}
     */
    public btn: HTMLButtonElement;

    /**
     * The component is being attached to the DOM.
     * @returns {void}
     */
    public attached(): void {
        RXO.Observable
            .fromEvent(this.btn, "click")
            .bufferCount(3)
            .subscribe(() => {
                this.result1 = "Clicked 3 times!";
            });
    }
}
