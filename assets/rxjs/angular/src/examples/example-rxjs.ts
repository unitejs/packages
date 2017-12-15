/**
 * Example of rxjs usage.
 *
 * @export
 * @class ExampleRxjs
 */
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import "rxjs/add/observable/fromEvent";
import "rxjs/add/operator/bufferCount";
import /* Synthetic Import */ RXO from "rxjs/Observable";

@Component({
    moduleId: "genModuleId",
    templateUrl: "./example-rxjs.html"
})
export class ExampleRxjs implements OnInit {
    /**
     * Result 1 displayed in the view.
     * @type {string}
     */
    public result1: string;

    /**
     * btn is the button from the template
     * @type {ElementRef}
     */
    @ViewChild("btn")
    public btn: ElementRef;

    /**
     * The component has been initialised.
     * @returns {void}
     */
    public ngOnInit(): void {
        RXO.Observable
            .fromEvent(this.btn.nativeElement, "click")
            .bufferCount(3)
            .subscribe(() => {
                this.result1 = "Clicked 3 times!";
            });
    }
}
