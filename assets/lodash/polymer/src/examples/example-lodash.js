/**
 * Example of lodash usage.
 *
 * @export
 * @class ExampleLodash
 */
import {customElement, observe} from "@polymer/decorators";
import {PolymerElement} from "@polymer/polymer/polymer-element";
import _ from "lodash";
import template from "./example-lodash.html";

@customElement("co-example-lodash")
export class ExampleLodash extends PolymerElement {
    /**
     * Result 1 displayed in the view.
     * @type {string}
     */
    result1;

    /**
     * Is the component activated.
     * @type {boolean}
     */
    activated;

    /**
     * Get the properties
     */
    static get properties() {
        return {
            result1: {
                type: String
            },
            activated: {
                type: Boolean,
                notify: true
            }
        };
    }

    /**
     * Notification that the activated flag has changed.
     */
    @observe("activated")
    activatedChanged(newValue) {
        const objA = {name: "bob", car: "porsche"};
        const objB = {name: "bill", age: 40};

        this.result1 = JSON.stringify(_.assign(objA, objB));
    }

    /**
     * Get the template.
     * @readonly
     * @static
     * @returns {HTMLTemplateElement}
     */
    static get template() {
        const temp = document.createElement("template");
        temp.innerHTML = template.trim();
        return temp;
    }
}
