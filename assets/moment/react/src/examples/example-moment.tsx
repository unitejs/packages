/**
 * Example of moment usage.
 *
 * @export
 * @class ExampleMoment
 */
import /* Synthetic Import */ moment from "moment";
import /* Synthetic Import */ React from "react";

export class ExampleMoment extends React.Component {
    /**
     * Current date and time displayed in the view.
     * @type {string}
     */
    public currentDateTime: string;

    /**
     * Creates an instance of ExampleMoment.
     */
    constructor() {
        super(undefined, undefined);
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
