/**
 * Example of rxjs usage.
 *
 * @export
 * @class ExampleRxjs
 */
import /* Synthetic Import */ React from "react";
import "rxjs/add/observable/fromEvent";
import "rxjs/add/operator/bufferCount";
import /* Synthetic Import */ RXO from "rxjs/Observable";

export class ExampleRxjs extends React.Component  {
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
        RXO.Observable
            .fromEvent(this.btn, "click")
            .bufferCount(3)
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
