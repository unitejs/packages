/**
 * Example of rxjs usage.
 *
 * @export
 * @class ExampleRxjs
 */
import {customElement, observe, property} from "@polymer/decorators/src/decorators";
import {Element as PolymerElement} from "@polymer/polymer/polymer-element";
// import /* Synthetic Import */ _ from "rxjs";
import /* Synthetic Import */ template from "./example-rxjs.html";

@customElement("co-example-rxjs")
export class ExampleRxjs extends PolymerElement {
    /**
     * Result 1 displayed in the view.
     * @type {string}
     */
    @property({ type: String })
    public result1: string;

    /**
     * Is the component activated.
     * @type {boolean}
     */
    @property({ type: Boolean, notify: true})
    public activated: boolean;

    /**
     * Notification that the activated flag has changed.
     */
    @observe("activated")
    public activatedChanged(newValue: boolean): void {
        this.result1 = "Clicked 3 times!";
    }

    /**
     * Get the template.
     * @readonly
     * @static
     * @returns {string}
     */
    static get template() {
        return `${template}`;
    }
}
