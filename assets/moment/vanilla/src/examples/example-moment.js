/**
 * Example of moment usage.
 *
 * @export
 * @class ExampleMoment
 */
import moment from "moment";

export class ExampleMoment {
    _elem;

    /**
     * Creates an instance of ExampleMoment.
     */
    constructor() {
        setInterval(() => {
                        this._elem.innerText = moment().format("YYYY-MM-DD HH:mm:ss");
                    },
                    1000);
    }

    /**
     * Render the component.
     * @returns {void}
     */
    render(parent) {
        this._elem = document.createElement("span");
        this._elem.className = "child";
        parent.appendChild(this._elem);
    }
}
