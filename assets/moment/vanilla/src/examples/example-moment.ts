/**
 * Example of moment usage.
 *
 * @export
 * @class ExampleMoment
 */
import /* Synthetic Import */ moment from "moment";

export class ExampleMoment {
    private _elem: HTMLElement;
    private _intervalId: number;

    /**
     * The component has been attached to the DOM.
     * @returns {void}
     */
    public attached(): void {
        this._intervalId = window.setInterval(() => {
            this._elem.innerText = moment().format("YYYY-MM-DD HH:mm:ss");
        },
        1000);
    }

    /**
     * The component has been detached from the DOM.
     * @returns {void}
     */
    public detached(): void {
        window.clearInterval(this._intervalId);
    }

    /**
     * Render the component.
     * @returns {void}
     */
    public render(parent: Element): void {
        this._elem = document.createElement("span");
        parent.appendChild(this._elem);
    }
}
