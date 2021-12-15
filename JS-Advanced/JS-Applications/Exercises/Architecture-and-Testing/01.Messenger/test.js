const {chromium} = require('playwright-chromium');
const {expect} = require('chai');

describe('Messenger tests', async function () {
    this.timeout(50000);

    let browser, page;

    before(async () => {
        browser = await chromium.launch();
    });

    after(async () => {
        await browser.close();
    });

    beforeEach(async () => {
        page = await browser.newPage();
    });

    afterEach(async () => {
        await page.close();
    });

    it('Loading messagess', async () => {
        await page.goto('http://localhost:5500');
        await page.click('text=Refresh');

        await page.waitForResponse(/jsonstore\/messenger/i);

        const [content] = await page.$$eval('textarea', (rows) =>
            rows.map((r) => r.value)
        );

        expect(content).to.contain('Spami: Hello, are you there?');
        expect(content).to.contain('Garry: Yep, whats up :?');
        expect(content).to.contain('Spami: How are you? Long time no see? :)');
        expect(content).to.contain('George: Hello, guys! :))');
        expect(content).to.contain(
            'Spami: Hello, George nice to see you! :)))'
        );
    });

    it('Sending messages', async () => {
        await page.goto('http://localhost:5500');
        await page.fill('#author', 'Peter');
        await page.fill('#content', 'Hello');

        await page.click('text=Send');
        
        await page.waitForResponse(/jsonstore\/messenger/i);
        
        await page.click('text=Refresh');
        
        await page.waitForResponse(/jsonstore\/messenger/i);

        const [content] = await page.$$eval('textarea', (rows) =>
            rows.map((r) => r.value)
        );

        expect(content).to.contain('Peter: Hello');
    });
});