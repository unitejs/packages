/**
 * Example of moment usage.
 *
 * @export
 * @class ExampleMoment
 */
import /* Synthetic Import */ moment from "moment";

export class ExampleMoment {
    /**
     * Current date and time displayed in the view.
     * @type {string}
     */
    public currentDateTime: string;

    /**
     * Creates an instance of ExampleMoment.
     */
    constructor() {
        setInterval(() => {
                        this.currentDateTime = moment().format("YYYY-MM-DD HH:mm:ss");
                    },
                    1000);
    }
}
