/**
 * Example of moment usage.
 *
 * @export
 * @class ExampleMoment
 */
import {customElement, observe, property} from "@polymer/decorators/src/decorators";
import {Element as PolymerElement} from "@polymer/polymer/polymer-element";
import /* Synthetic Import */ moment from "moment";
import /* Synthetic Import */ template from "./example-moment.html";

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
     * @returns {string}
     */
    static get template() {
        return `${template}`;
    }
}
