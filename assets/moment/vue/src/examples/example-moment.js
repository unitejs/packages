/**
 * Example of moment usage.
 *
 * @export
 * @class ExampleMoment
 */
import moment from "moment";
import Vue from "vue";
import Component from "vue-class-component";

@Component({
    template: "./example-moment.vue"
})
export class ExampleMoment extends Vue {
    /**
     * Current date and time displayed in the view.
     * @type {string}
     */
    currentDateTime;

    /**
     * Creates an instance of ExampleMoment.
     */
    constructor() {
        super();
        setInterval(() => {
                        this.currentDateTime = moment().format("YYYY-MM-DD HH:mm:ss");
                    },
                    1000);
    }
}
