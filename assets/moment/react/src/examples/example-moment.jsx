/**
 * Example of moment usage.
 *
 * @export
 * @class ExampleMoment
 */
import moment from "moment";
import React from "react";

export class ExampleMoment extends React.Component {
    /**
     * Current date and time displayed in the view.
     * @type {string}
     */
    currentDateTime;

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
    render() {
        return <span>{ this.currentDateTime }</span>;
    }
}
