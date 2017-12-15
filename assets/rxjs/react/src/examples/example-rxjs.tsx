/**
 * Example of rxjs usage.
 *
 * @export
 * @class ExampleRxjs
 */
import /* Synthetic Import */ React from "react";
// import /* Synthetic Import */ _ from "rxjs";

export class ExampleRxjs extends React.Component<any, {result1: string}>  {
    /**
     * Creates an instance of ExampleRxjs.
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
        this.setState({ result1: "Clicked 3 times!" });
    }

    /**
     * Render the component.
     * @returns {JSX.Element}
     */
    public render(): JSX.Element {
        return <div id="rxjs-example">
            <button>Click Me</button>
            <span>{this.state.result1}</span>
        </div>;
    }
}
