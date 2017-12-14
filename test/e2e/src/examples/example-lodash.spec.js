/**
 * Tests for Lodash Example.
 */
import { loadExampleElement } from "../helpers/element-helper";

describe("ExampleLodash", () => {
    it("the example result is correct", (done) => {
        loadExampleElement("Lodash")
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
