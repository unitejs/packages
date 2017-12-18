/**
 * Example of rxjs usage.
 *
 * @export
 * @class ExampleRxjs
 */
import "rxjs/add/observable/fromEvent";
import "rxjs/add/operator/bufferCount";
import /* Synthetic Import */ RXO from "rxjs/Observable";
import Vue from "vue";
import Component from "vue-class-component";

@Component({
    template: "./example-rxjs.vue"
})
export class ExampleRxjs extends Vue {
    /**
     * Result 1 displayed in the view.
     * @type {string}
     */
    result1;

    data() {
        return { result1: this.result1 };
    }

    /**
     * The component has been mounted in the DOM.
     * @returns {void}
     */
    mounted() {
        RXO.Observable
            .fromEvent(this.$refs.btn, "click")
            .bufferCount(3)
            .subscribe(() => {
                this.result1 = "Clicked 3 times!";
            });
    }
}
