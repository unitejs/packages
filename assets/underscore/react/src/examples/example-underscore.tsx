/**
 * Example of underscore usage.
 *
 * @export
 * @class ExampleUnderscore
 */
import /* Synthetic Import */ React from "react";
import /* Synthetic Import */ _ from "underscore";

export class ExampleUnderscore extends React.Component<any, {result1: string}>  {
    /**
     * Creates an instance of ExampleUnderscore.
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

        this.setState({ result1: JSON.stringify(_.extend(objA, objB)) });
    }

    /**
     * Render the component.
     * @returns {JSX.Element}
     */
    public render(): JSX.Element {
        return <span id="underscore-example">{this.state.result1}</span>;
    }
}
