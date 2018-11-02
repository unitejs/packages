/**
 * Example of rxjs usage.
 *
 * @export
 * @class ExampleRxjs
 */
import {customElement, observe, property} from "@polymer/decorators";
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
    static get template(): HTMLTemplateElement {
        const temp = document.createElement("template");
        temp.innerHTML = template.trim();
        return temp;
    }
}
