/**
 * Example of moment usage.
 *
 * @export
 * @class ExampleMoment
 */
import /* Synthetic Import */ moment from "moment";
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
    public currentDateTime: string;

    private _intervalId: number;

    public data(): any {
        return { currentDateTime: this.currentDateTime };
    }

    /**
     * The component has been mounted in the DOM.
     * @returns {void}
     */
    public mounted(): any {
        this._intervalId = window.setInterval(() => {
            this.currentDateTime = moment().format("YYYY-MM-DD HH:mm:ss");
        },
        1000);
    }

    /**
     * The component has been destroyed.
     * @returns {void}
     */
    public destroyed(): void {
        window.clearInterval(this._intervalId);
    }
}
