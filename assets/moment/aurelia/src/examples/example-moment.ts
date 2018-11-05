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
    public currentDateTime: string;

    private _intervalId: number;

    /**
     * The component is being attached to the DOM.
     * @returns {void}
     */
    public attached(): void {
        this._intervalId = window.setInterval(() => {
            this.currentDateTime = moment().format("YYYY-MM-DD HH:mm:ss");
        },
        1000);
    }

    /**
     * The component is being detached from the DOM.
     * @returns {void}
     */
    public detached(): void {
        window.clearInterval(this._intervalId);
    }
}
