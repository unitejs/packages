/**
 * Tests for Underscore Example.
 */
import { loadExampleElement } from "../helpers/element-helper";

describe("ExampleUnderscore", () => {
    it("the example result is correct", (done) => {
        loadExampleElement("Underscore")
            .then((elem) => {
                elem.getText()
                    .then((result) => {
                        expect(result).toEqual(`{"name":"bill","car":"porsche","age":40}`);
                        done();
                    });
            });
    });
});

/* Generated by UniteJS */
