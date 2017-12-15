/**
 * Example of rxjs usage.
 *
 * @export
 * @class ExampleRxjs
 */
// import /* Synthetic Import */ _ from "rxjs";

export class ExampleRxjs {
    private _elem: HTMLDivElement;
    private _btn: HTMLButtonElement;
    private _span: HTMLSpanElement;

    /**
     * The component has been attached to the DOM.
     * @returns {void}
     */
    public attached(): void {
        this._span.innerText = "Clicked 3 times!";
    }

    /**
     * Render the component.
     * @returns {void}
     */
    public render(parent: Element): void {
        this._elem = document.createElement("div");
        this._elem.id = "rxjs-example";
        parent.appendChild(this._elem);

        this._btn = document.createElement("button");
        this._btn.innerText = "Click Me";

        this._span = document.createElement("span");

        this._elem.appendChild(this._btn);
        this._elem.appendChild(this._span);
    }
}
