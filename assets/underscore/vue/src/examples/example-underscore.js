/**
 * Example of underscore usage.
 *
 * @export
 * @class ExampleUnderscore
 */
import _ from "underscore";
import Vue from "vue";
import Component from "vue-class-component";

@Component({
    template: "./example-underscore.vue"
})
export class ExampleUnderscore extends Vue {
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

        this.result1 = JSON.stringify(_.extend(objA, objB));
    }
}
