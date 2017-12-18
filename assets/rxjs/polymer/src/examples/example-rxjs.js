/**
 * Example of rxjs usage.
 *
 * @export
 * @class ExampleRxjs
 */
import {customElement, observe} from "@polymer/decorators/src/decorators";
import {Element as PolymerElement} from "@polymer/polymer/polymer-element";
import "rxjs/add/observable/fromEvent";
import "rxjs/add/operator/bufferCount";
import /* Synthetic Import */ RXO from "rxjs/Observable";
import template from "./example-rxjs.html";

@customElement("co-example-rxjs")
export class ExampleRxjs extends PolymerElement {
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
        if (newValue) {
            const btn = this.shadowRoot.querySelector("button");

            RXO.Observable
                .fromEvent(btn, "click")
                .bufferCount(3)
                .subscribe(() => {
                    this.result1 = "Clicked 3 times!";
                });
        } else {
            this.result1 = undefined;
        }
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
