/**
 * Example of lodash usage.
 *
 * @export
 * @class ExampleLodash
 */
import /* Synthetic Import */ _ from "lodash";
import /* Synthetic Import */ React from "react";

export class ExampleLodash extends React.Component<any, {result1: string}>  {
    /**
     * Creates an instance of ExampleLodash.
     */
    constructor(props?: any, context?: any) {
        super(props, context);
        this.state = { result1: undefined };
    }

    /**
     * The component is about to be mounted.
     * @returns {void}
     */
    public componentWillMount(): void {
        const objA = { name: "bob", car: "porsche" };
        const objB = { name: "bill", age: 40 };

        this.setState({ result1: JSON.stringify(_.assign(objA, objB)) });
    }

    /**
     * Render the component.
     * @returns {JSX.Element}
     */
    public render(): JSX.Element {
        return <span id="lodash-example">{this.state.result1}</span>;
    }
}
