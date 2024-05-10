import puppeteer from 'puppeteer';

describe('Page start', () => {
    let browser;
    let page;
  
    beforeEach(async () => {
      browser = await puppeteer.launch({
        headless: false,
        slowMo: 10,
        devtools: true,
      });
  
      page = await browser.newPage();
    });
  
    // test('test', async () => {
    //   await page.goto('http://localhost:9000');
  
    //   await page.waitForSelector('body');
    // });

    test('Correct card number', async () => {
        jest.setTimeout(100000);
        await page.goto('http://localhost:9000');
        await page.waitFor('.form-group');
        const form = await page.$('.form-group');
        const input = await form.$('.form-input');
        const submit = await form.$('.submit');
    
        await input.type('2200240751986825');
        await submit.click();
    
        await page.waitFor('.form-group .form-input.valid');
      });
  
    afterEach(async () => {
      await browser.close();
    });
  });