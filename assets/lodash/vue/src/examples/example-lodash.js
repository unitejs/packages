/**
 * Example of lodash usage.
 *
 * @export
 * @class ExampleLodash
 */
import _ from "lodash";
import Vue from "vue";
import Component from "vue-class-component";

@Component({
    template: "./example-lodash.vue"
})
export class ExampleLodash extends Vue {
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
        const objA = {name: "bob", car: "porsche"};
        const objB = {name: "bill", age: 40};

        this.result1 = JSON.stringify(_.assign(objA, objB));
    }
}
