/**
 * Example of underscore usage.
 *
 * @export
 * @class ExampleUnderscore
 */
import {customElement, observe, property} from "@polymer/decorators/src/decorators";
import {Element as PolymerElement} from "@polymer/polymer/polymer-element";
import /* Synthetic Import */ _ from "underscore";
import /* Synthetic Import */ template from "./example-underscore.html";

@customElement("co-example-underscore")
export class ExampleUnderscore extends PolymerElement {
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
        const objA = {name: "bob", car: "porsche"};
        const objB = {name: "bill", age: 40};

        this.result1 = JSON.stringify(_.extend(objA, objB));
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