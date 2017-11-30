/**
 * Example of moment usage.
 *
 * @export
 * @class ExampleMoment
 */
import moment from "moment";

export class ExampleMoment {
    /**
     * The component has been attached to the DOM.
     * @returns {void}
     */
    attached() {
        this._intervalId = window.setInterval(() => {
            this._elem.innerText = moment().format("YYYY-MM-DD HH:mm:ss");
        },
        1000);
    }

    /**
     * The component has been detached from the DOM.
     * @returns {void}
     */
    detached() {
        window.clearInterval(this._intervalId);
    }

    /**
     * Render the component.
     * @returns {void}
     */
    render(parent) {
        this._elem = document.createElement("span");
        parent.appendChild(this._elem);
    }
}
