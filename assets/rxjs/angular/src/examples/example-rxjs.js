/**
 * Example of rxjs usage.
 *
 * @export
 * @class ExampleRxjs
 */
import {Component, ViewChild} from "@angular/core";
import { fromEvent } from "rxjs";
import { bufferCount } from "rxjs/operators";

@Component({
    moduleId: "genModuleId",
    templateUrl: "./example-rxjs.html"
})
export class ExampleRxjs {
    /**
     * Result 1 displayed in the view.
     * @type {string}
     */
    result1;

    /**
     * btn is the button from the template
     * @type {ElementRef}
     */
    @ViewChild("btn")
    btn = undefined;

    /**
     * The component has been initialised.
     * @returns {void}
     */
    ngOnInit() {
        fromEvent(this.btn.nativeElement, "click")
            .pipe(bufferCount(3))
            .subscribe(() => {
                this.result1 = "Clicked 3 times!";
            });
    }
}
