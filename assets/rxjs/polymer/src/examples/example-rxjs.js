/**
 * Example of rxjs usage.
 *
 * @export
 * @class ExampleRxjs
 */
import {customElement, observe} from "@polymer/decorators";
import {PolymerElement} from "@polymer/polymer/polymer-element";
import { fromEvent } from "rxjs";
import { bufferCount } from "rxjs/operators";
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

            fromEvent(btn, "click")
                .pipe(bufferCount(3))
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
     * @returns {HTMLTemplateElement}
     */
    static get template() {
        const temp = document.createElement("template");
        temp.innerHTML = template.trim();
        return temp;
    }
}
