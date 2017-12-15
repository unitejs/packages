/**
 * Example of rxjs usage.
 *
 * @export
 * @class ExampleRxjs
 */
// import /* Synthetic Import */ _ from "rxjs";

export class ExampleRxjs {
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
        this.result1 = "Clicked 3 times!";
    }
}
