/**
 * Example of moment usage.
 *
 * @export
 * @class ExampleMoment
 */
import {customElement, observe} from "@polymer/decorators";
import {PolymerElement} from "@polymer/polymer/polymer-element";
import moment from "moment";
import template from "./example-moment.html";

@customElement("co-example-moment")
export class ExampleMoment extends PolymerElement {
    /**
     * Current date and time displayed in the view.
     * @type {string}
     */
    currentDateTime;

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
            currentDateTime: {
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
    static get template() {
        const temp = document.createElement("template");
        temp.innerHTML = template.trim();
        return temp;
    }
}
