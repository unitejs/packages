/**
 * Example of rxjs usage.
 *
 * @export
 * @class ExampleRxjs
 */
import { Component, h } from "preact";
import "rxjs/add/observable/fromEvent";
import "rxjs/add/operator/bufferCount";
import /* Synthetic Import */ RXO from "rxjs/Observable";

export class ExampleRxjs extends Component<any, { result1: string }>  {
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
    public render(): JSX.Element {
        return <div id="rxjs-example">
            <button ref={(btn) => { this.btn = btn; }}>Click Me</button>
            <span>{this.state.result1}</span>
        </div>;
    }
}
