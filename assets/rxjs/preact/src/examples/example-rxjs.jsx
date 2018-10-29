/**
 * Example of rxjs usage.
 *
 * @export
 * @class ExampleRxjs
 */
import {Component, h} from "preact";
import { fromEvent } from "rxjs";
import { bufferCount } from "rxjs/operators";

export class ExampleRxjs extends Component {
    /**
     * btn is the button from the template
     * @type {Element}
     */
    btn;

    /**
     * Creates an instance of ExampleRxjs.
     */
    constructor(props, context) {
        super(props, context);
        this.state = { result1: undefined };
    }

    /**
     * The component was mounted.
     * @returns {void}
     */
    componentDidMount() {
        fromEvent(this.btn, "click")
            .pipe(bufferCount(3))
            .subscribe(() => {
                this.setState({ result1: "Clicked 3 times!" });
            });
    }

    /**
     * Render the component.
     * @returns {JSX.Element}
     */
    render() {
        return <div id="rxjs-example">
            <button ref={(btn) => { this.btn = btn; }}>Click Me</button>
            <span>{this.state.result1}</span>
        </div>;
    }
}
