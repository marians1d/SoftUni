const {chromium} = require('playwright-chromium');
const {expect} = require('chai');

const mockData = {
    'd953e5fb-a585-4d6b-92d3-ee90697398a0': {
        author: 'J.K.Rowling',
        title: "Harry Potter and the Philosopher's Stone"
    },
    'd953e5fb-a585-4d6b-92d3-ee90697398a1': {
        author: 'Svetlin Nakov',
        title: 'C# Fundamentals'
    }
};

function json(data) {
    return {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
}

describe('Book Library tests', async function () {
    this.timeout(60000);

    let browser, page;

    before(async () => {
        browser = await chromium.launch(); //{headless: false, slowMo: 500}
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

    it('Loading messages test', async () => {
        await page.route('**/jsonstore/collections/books*', (route) => {
            route.fulfill(json(mockData));
        });
        await page.goto('http://localhost:5500');
        await page.click('text=Load all books');

        await page.waitForSelector('text=Harry Potter');

        const rows = await page.$$eval('tr', (rows) =>
            rows.map((r) => r.textContent.trim())
        );

        expect(rows[1]).to.contain('Harry Potter');
        expect(rows[1]).to.contain('Rowling');

        expect(rows[2]).to.contain('C# Fundamentals');
        expect(rows[2]).to.contain('Svetlin Nakov');
    });

    it('Adding book test', async () => {
        await page.goto('http://localhost:5500');
        await page.fill('form#createForm >> input[name="title"]', 'Dune');
        await page.fill('form#createForm >> input[name="author"]', 'Frank');

        const [request] = await Promise.all([
            page.waitForRequest((request) => request.method() == 'POST'),
            page.click('form#createForm >> text=Submit')
        ]);

        const data = JSON.parse(request.postData());

        expect(data.title).to.be.equal('Dune');
        expect(data.author).to.be.equal('Frank');
    });

    it.only('Edit book test', async () => {
        await page.route('**/jsonstore/collections/books*', (route) => {
            route.fulfill(json(mockData));
        });
        await page.goto('http://localhost:5500');

        await page.click('text=Load all books');

        await page.click(
            'tr[data-id="d953e5fb-a585-4d6b-92d3-ee90697398a0"] >> text=Edit'
        );

        await page.fill('form#editForm >> input[name="title"]', 'Edit Title');
        await page.fill('form#editForm >> input[name="author"]', 'Edit Author');

        const [request] = await Promise.all([
            page.waitForRequest((request) => request.method() == 'PUT'),
            page.click('form#editForm >> text=Save')
        ]);

        const data = JSON.parse(request.postData());

        expect(data.title).to.be.equal('Edit Title');
        expect(data.author).to.be.equal('Edit Author');
    });

    it('Delete book test', async () => {
        await page.route('**/jsonstore/collections/books*', (route) => {
            route.fulfill(json(mockData));
        });
        await page.goto('http://localhost:5500');

        await page.click('text=Load all books');

        page.on('dialog', async (dialog) => dialog.accept());
        await page.click(
            'tr[data-id="d953e5fb-a585-4d6b-92d3-ee90697398a0"] >> text=Delete'
        );

        const request = await page.waitForRequest(
            (request) => request.method() == 'DELETE'
        );

        expect(request != undefined).to.be.true;
    });
});
