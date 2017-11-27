/**
 * Example of moment usage.
 *
 * @export
 * @class ExampleMoment
 */
import moment from "moment";
import { Component, h } from "preact";

export class ExampleMoment extends Component<any, any> {
    /**
     * Current date and time displayed in the view.
     * @type {string}
     */
    public currentDateTime: string;

    /**
     * Creates an instance of ExampleMoment.
     */
    constructor() {
        super();
        setInterval(() => {
                        this.currentDateTime = moment().format("YYYY-MM-DD HH:mm:ss");
                    },
                    1000);
    }

    /**
     * Render the component.
     * @returns {JSX.Element}
     */
    public render(): JSX.Element {
        return <span>{ this.currentDateTime }</span>;
    }
}
