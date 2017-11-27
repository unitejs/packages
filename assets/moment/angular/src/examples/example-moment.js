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
    currentDateTime;

    /**
     * Creates an instance of ExampleMoment.
     */
    constructor() {
        setInterval(() => {
                        this.currentDateTime = moment().format("YYYY-MM-DD HH:mm:ss");
                    },
                    1000);
    }
}
