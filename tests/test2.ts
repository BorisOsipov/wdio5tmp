const assert = require("assert");
import {expect} from 'chai';

describe("sdsdsd", ()=> {
    before(() => {
        browser.url("http://google.com");
    });

    it('should ', () => {
        //debugger;
        const title : string = browser.getTitle();
        expect(title).to.contain("Google");
        browser.pause(1000);

        let element = $("[name=q]");
        element.setValue("wdio");
        browser.pause(1000);
        $("[name=btnK]").click();
    });
});