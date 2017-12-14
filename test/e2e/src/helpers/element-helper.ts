/**
 * Example page helpers.
 */
import { $, browser, by, element, ElementFinder, protractor } from "protractor";
import { promise as wdpromise } from "selenium-webdriver";

export function loadExampleElement(exampleName: string): wdpromise.Promise<ElementFinder> {
    return browser.uniteLoadAndWaitForPage("/")
        .then(() => {
            const elemLink = element(by.linkText(`Example ${exampleName}`));
            elemLink.click();

            const elemExample = element(by.id(`${exampleName.toLowerCase()}-example`));
            return browser.wait(protractor.ExpectedConditions.presenceOf(elemExample),
                5000,
                `${exampleName} Example taking too long to appear in the DOM`)
                .then(() => elemExample);
        });
}

export function waitForAnyText(elem: ElementFinder): wdpromise.Promise<string> {
    return browser.wait(protractor.ExpectedConditions.and(protractor.ExpectedConditions.presenceOf(elem),
        () => {
            return elem.getText()
                .then((text) => {
                    return text && text.length > 0;
                });
        }), 5000, "Timeout expired waiting for text in element")
        .then(() => elem.getText());
}

// Generated by UniteJS
