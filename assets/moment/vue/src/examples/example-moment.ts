/**
 * Example of moment usage.
 *
 * @export
 * @class ExampleMoment
 */
import /* Synthetic Import */ moment from "moment";
import /* Synthetic Import */ Vue from "vue";
import Component from "vue-class-component";

@Component({
    template: "./example-moment.vue"
})
export class ExampleMoment extends Vue {
    /**
     * Current date and time displayed in the view.
     * @type {string}
     */
    public currentDateTime: string;

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
