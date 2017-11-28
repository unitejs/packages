/**
 * Example of moment usage.
 *
 * @export
 * @class ExampleMoment
 */
import /* Synthetic Import */ moment from "moment";

export class ExampleMoment {
    private _elem: HTMLElement;

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
    public render(parent: Element): void {
        this._elem = document.createElement("span");
        this._elem.className = "child";
        parent.appendChild(this._elem);
    }
}
