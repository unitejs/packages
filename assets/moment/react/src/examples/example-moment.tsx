/**
 * Example of moment usage.
 *
 * @export
 * @class ExampleMoment
 */
import /* Synthetic Import */ moment from "moment";
import /* Synthetic Import */ React from "react";

export class ExampleMoment extends React.Component<any, {currentDateTime: string}>  {
    private _intervalId: number;

    /**
     * Creates an instance of ExampleMoment.
     */
    constructor(props?: any, context?: any) {
        super(props, context);
        this.state = { currentDateTime: undefined };
    }

    /**
     * The component is about to be mounted.
     * @returns {void}
     */
    public componentWillMount(): void {
        this._intervalId = window.setInterval(() => {
            this.setState({ currentDateTime: moment().format("YYYY-MM-DD HH:mm:ss") });
        },
        1000);
    }

    /**
     * The component is about to be unmounted.
     * @returns {void}
     */
    public componentWillUnmount(): void {
        window.clearInterval(this._intervalId);
    }

    /**
     * Render the component.
     * @returns {JSX.Element}
     */
    public render(): JSX.Element {
        return <span id="moment-example">{this.state.currentDateTime}</span>;
    }
}
