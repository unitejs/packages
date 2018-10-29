/**
 * Example of rxjs usage.
 *
 * @export
 * @class ExampleRxjs
 */
import /* Synthetic Import */ React from "react";
import { fromEvent } from "rxjs";
import { bufferCount } from "rxjs/operators";

export class ExampleRxjs extends React.Component<any, {result1: string}>  {
    /**
     * btn is the button from the template
     * @type {Element}
     */
    public btn: Element;

    /**
     * Creates an instance of ExampleRxjs.
     */
    constructor(props?: any, context?: any) {
        super(props, context);
        this.state = { result1: undefined };
    }

    /**
     * The component was mounted.
     * @returns {void}
     */
    public componentDidMount(): void {
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
    public render(): JSX.Element {
        return <div id="rxjs-example">
            <button ref={(btn) => { this.btn = btn; }}>Click Me</button>
            <span>{this.state.result1}</span>
        </div>;
    }
}
