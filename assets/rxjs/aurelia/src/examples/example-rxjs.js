/**
 * Example of rxjs usage.
 *
 * @export
 * @class ExampleRxjs
 */
import { fromEvent } from "rxjs";
import { bufferCount } from "rxjs/operators";

export class ExampleRxjs {
    /**
     * Result 1 displayed in the view.
     * @type {string}
     */
    result1;

    /**
     * btn is the button from the template
     * @type {HTMLButtonElement}
     */
    btn;

    /**
     * The component is being attached to the DOM.
     * @returns {void}
     */
    attached() {
        fromEvent(this.btn, "click")
            .pipe(bufferCount(3))
            .subscribe(() => {
                this.result1 = "Clicked 3 times!";
            });
    }
}
