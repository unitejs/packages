/**
 * Example of lodash usage.
 *
 * @export
 * @class ExampleLodash
 */
import _ from "lodash";
import /* Synthetic Import */ React from "react";

export class ExampleLodash extends React.Component  {
    /**
     * Creates an instance of ExampleLodash.
     */
    constructor(props, context) {
        super(props, context);

        const objA = {name: "bob", car: "porsche"};
        const objB = {name: "bill", age: 40};

        this.state = { result1: JSON.stringify(_.assign(objA, objB)) };
    }

    /**
     * Render the component.
     * @returns {JSX.Element}
     */
    render() {
        return <span id="lodash-example">{this.state.result1}</span>;
    }
}
