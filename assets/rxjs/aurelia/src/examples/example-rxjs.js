/**
 * Example of rxjs usage.
 *
 * @export
 * @class ExampleRxjs
 */
// import _ from "rxjs";

export class ExampleRxjs {
    /**
     * Result 1 displayed in the view.
     * @type {string}
     */
    result1;

    /**
     * The component is being attached to the DOM.
     * @returns {void}
     */
    attached() {
        this.result1 = "Clicked 3 times!";
    }
}
