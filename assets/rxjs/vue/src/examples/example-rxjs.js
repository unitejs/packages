/**
 * Example of rxjs usage.
 *
 * @export
 * @class ExampleRxjs
 */
import { fromEvent } from "rxjs";
import { bufferCount } from "rxjs/operators";
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
        fromEvent(this.$refs.btn, "click")
            .pipe(bufferCount(3))
            .subscribe(() => {
                this.result1 = "Clicked 3 times!";
            });
    }
}
