/**
 * Example of moment usage.
 *
 * @export
 * @class ExampleMoment
 */
import moment from "moment";

export class ExampleMoment {
    /**
     * Current date and time displayed in the view.
     * @type {string}
     */
    currentDateTime;

    /**
     * The component is being attached to the DOM.
     * @returns {void}
     */
    attached() {
        this._intervalId = window.setInterval(() => {
            this.currentDateTime = moment().format("YYYY-MM-DD HH:mm:ss");
        },
        1000);
    }

    /**
     * The component is being detached from the DOM.
     * @returns {void}
     */
    detached() {
        window.clearInterval(this._intervalId);
    }
}
