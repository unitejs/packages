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

    data() {
        return { currentDateTime: this.currentDateTime };
    }

    /**
     * The component has been mounted in the DOM.
     * @returns {void}
     */
    mounted() {
        this._intervalId = window.setInterval(() => {
            this.currentDateTime = moment().format("YYYY-MM-DD HH:mm:ss");
        },
        1000);
    }

    /**
     * The component has been destroyed.
     * @returns {void}
     */
    destroyed() {
        window.clearInterval(this._intervalId);
    }
}
