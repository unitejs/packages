/**
 * Example of moment usage.
 *
 * @export
 * @class ExampleMoment
 */
import moment from "moment";

import { Component } from "@angular/core";

@Component({
    moduleId: "genModuleId",
    templateUrl: "./example-moment.html"
})
export class ExampleMoment {
    /**
     * Current date and time displayed in the view.
     * @type {string}
     */
    public currentDateTime: string;

    private _intervalId: number;

    /**
     * The component has been initialised.
     * @returns {void}
     */
    public ngOnInit(): void {
        this._intervalId = window.setInterval(() => {
            this.currentDateTime = moment().format("YYYY-MM-DD HH:mm:ss");
        },
        1000);
    }

    /**
     * The component has been destroyed.
     * @returns {void}
     */
    public ngOnDestroy(): void {
        window.clearInterval(this._intervalId);
    }
}
