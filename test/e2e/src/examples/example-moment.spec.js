/**
 * Tests for Moment Example.
 */
import { loadExampleElement, waitForAnyText } from "../helpers/element-helper";

describe("ExampleMoment", () => {
    it("the example result is correct", (done) => {
        loadExampleElement("Moment")
            .then((elem) => {
                waitForAnyText(elem)
                    .then((result) => {
                        expect(/\d\d\d\d-\d\d-\d\d \d\d:\d\d:\d\d/.test(result)).toEqual(true);
                        done();
                    });
            });
    });
});

/* Generated by UniteJS */
