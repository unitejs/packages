/**
 * Example of moment usage.
 *
 * @export
 * @class ExampleMoment
 */
import {customElement, observe, property} from "@polymer/decorators";
import {PolymerElement} from "@polymer/polymer/polymer-element";
import moment from "moment";
import template from "./example-moment.html";

@customElement("co-example-moment")
export class ExampleMoment extends PolymerElement {
    /**
     * Current date and time displayed in the view.
     * @type {string}
     */
    @property({ type: String })
    public currentDateTime: string;

    /**
     * Is the component activated.
     * @type {boolean}
     */
    @property({ type: Boolean, notify: true})
    public activated: boolean;

    private _intervalId: number;

    /**
     * Notification that the activated flag has changed.
     */
    @observe("activated")
    public activatedChanged(newValue: boolean): void {
        if (newValue) {
            this._intervalId = window.setInterval(() => {
                this.currentDateTime = moment().format("YYYY-MM-DD HH:mm:ss");
            },
            1000);
        } else {
            window.clearInterval(this._intervalId);
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
