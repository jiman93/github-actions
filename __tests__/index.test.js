const { Builder, By, until } = require('selenium-webdriver');

describe('Selenium Test', () => {
  let driver;

  beforeAll(async () => {
    driver = await new Builder().forBrowser('chrome').build();
  });

  afterAll(async () => {
    await driver.quit();
  });

  test('should load the homepage', async () => {
    await driver.get('http://localhost:3000'); // Your Next.js app running locally

    const title = await driver.getTitle();
    expect(title).toBe('Expected Title'); // Replace with your actual title
  });
});
