/**
 * Example of moment usage.
 *
 * @export
 * @class ExampleMoment
 */
import moment from "moment";

import {Component} from "@angular/core";

@Component({
    moduleId: "genModuleId",
    templateUrl: "./example-moment.html"
})
export class ExampleMoment {
    /**
     * Current date and time displayed in the view.
     * @type {string}
     */
    currentDateTime;

    /**
     * The component has been initialised.
     * @returns {void}
     */
    ngOnInit() {
        this._intervalId = window.setInterval(() => {
            this.currentDateTime = moment().format("YYYY-MM-DD HH:mm:ss");
        },
        1000);
    }

    /**
     * The component has been destroyed.
     * @returns {void}
     */
    ngOnDestroy() {
        window.clearInterval(this._intervalId);
    }
}
