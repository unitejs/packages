/**
 * Example of underscore usage.
 *
 * @export
 * @class ExampleUnderscore
 */
import _ from "underscore";
import {Component, h} from "preact";

export class ExampleUnderscore extends Component {
    /**
     * Creates an instance of ExampleUnderscore.
     */
    constructor(props, context) {
        super(props, context);

        const objA = {name: "bob", car: "porsche"};
        const objB = {name: "bill", age: 40};

        this.state = { result1: JSON.stringify(_.extend(objA, objB)) };
    }

    /**
     * Render the component.
     * @returns {JSX.Element}
     */
    render() {
        return <span id="underscore-example">{this.state.result1}</span>;
    }
}
