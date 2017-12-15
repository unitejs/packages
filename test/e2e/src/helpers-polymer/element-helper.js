/**
 * Example page helpers.
 */
import { browser, by, element, protractor } from "protractor";

export function loadExampleElement(exampleName) {
    return browser.uniteLoadAndWaitForPage("/")
        .then(() => {
            const appRoot = element(by.customShadowRoot("#root unite-app::sr"));
            const navRoot = appRoot.element(by.css("nav"));

            const elemLink = navRoot.element(by.linkText(`Example ${exampleName}`));
            elemLink.click();

            const exampleRoot = appRoot.element(by.customShadowRoot(`co-example-${exampleName.toLowerCase()}::sr`));

            const elemExample = exampleRoot.element(by.id(`${exampleName.toLowerCase()}-example`));
            return browser.wait(protractor.ExpectedConditions.presenceOf(elemExample),
                5000,
                `${exampleName} Example taking too long to appear in the DOM`)
                .then(() => elemExample);
        });
}

export function waitForAnyText(elem) {
    return browser.wait(protractor.ExpectedConditions.and(protractor.ExpectedConditions.presenceOf(elem),
        () => {
            return elem.getText()
                .then((text) => {
                    return text && text.length > 0;
                });
        }), 5000, "Timeout expired waiting for text in element")
        .then(() => elem.getText());
}

/* Generated by UniteJS */