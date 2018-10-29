/**
 * Example of rxjs usage.
 *
 * @export
 * @class ExampleRxjs
 */
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { fromEvent } from "rxjs";
import { bufferCount } from "rxjs/operators";

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
        fromEvent(this.btn.nativeElement, "click")
            .pipe(bufferCount(3))
            .subscribe(() => {
                this.result1 = "Clicked 3 times!";
            });
    }
}
