/**
 * Example of rxjs usage.
 *
 * @export
 * @class ExampleRxjs
 */
// import _ from "rxjs";
import /* Synthetic Import */ React from "react";

export class ExampleRxjs extends React.Component  {
    /**
     * Creates an instance of ExampleRxjs.
     */
    constructor(props, context) {
        super(props, context);
        this.state = { result1: undefined };
    }

    /**
     * The component is about to be mounted.
     * @returns {void}
     */
    componentWillMount() {
        this.setState({ result1: "Clicked 3 times!" });
    }

    /**
     * Render the component.
     * @returns {JSX.Element}
     */
    render() {
        return <div id="rxjs-example">
            <button>Click Me</button>
            <span>{this.state.result1}</span>
        </div>;
    }
}
