/**
 * Example of underscore usage.
 *
 * @export
 * @class ExampleUnderscore
 */
import _ from "underscore";
import /* Synthetic Import */ React from "react";

export class ExampleUnderscore extends React.Component  {
    /**
     * Creates an instance of ExampleUnderscore.
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
        const objA = {name: "bob", car: "porsche"};
        const objB = {name: "bill", age: 40};

        this.setState({result1: JSON.stringify(_.extend(objA, objB))});
    }

    /**
     * Render the component.
     * @returns {JSX.Element}
     */
    render() {
        return <span id="underscore-example">{this.state.result1}</span>;
    }
}
