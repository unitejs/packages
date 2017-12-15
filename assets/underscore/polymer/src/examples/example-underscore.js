/**
 * Example of underscore usage.
 *
 * @export
 * @class ExampleUnderscore
 */
import {customElement, observe} from "@polymer/decorators/src/decorators";
import {Element as PolymerElement} from "@polymer/polymer/polymer-element";
import _ from "underscore";
import template from "./example-underscore.html";

@customElement("co-example-underscore")
export class ExampleUnderscore extends PolymerElement {
    /**
     * Result 1 displayed in the view.
     * @type {string}
     */
    result1;

    /**
     * Is the component activated.
     * @type {boolean}
     */
    activated;

    /**
     * Get the properties
     */
    static get properties() {
        return {
            result1: {
                type: String
            },
            activated: {
                type: Boolean,
                notify: true
            }
        };
    }

    /**
     * Notification that the activated flag has changed.
     */
    @observe("activated")
    activatedChanged(newValue) {
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
