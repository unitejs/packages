/**
 * Example of moment usage.
 *
 * @export
 * @class ExampleMoment
 */
import moment from "moment";
import {Component, h} from "preact";

export class ExampleMoment extends Component {
    /**
     * Creates an instance of ExampleMoment.
     */
    constructor(props, context) {
        super(props, context);
        this.state = { currentDateTime: undefined };
        this._intervalId = window.setInterval(() => {
            this.setState({ currentDateTime: moment().format("YYYY-MM-DD HH:mm:ss") });
        },
        1000);
    }

    /**
     * The component is about to be unmounted.
     * @returns {void}
     */
    componentWillUnmount() {
        window.clearInterval(this._intervalId);
    }

    /**
     * Render the component.
     * @returns {JSX.Element}
     */
    render() {
        return <span id="moment-example">{this.state.currentDateTime}</span>;
    }
}
