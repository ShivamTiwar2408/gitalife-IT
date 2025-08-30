// @ts-check
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  timeout: 30_000,
  retries: 1,
  use: {
    baseURL: 'https://gitalife.co.in',
    headless: true,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },
  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
  ],
  projects: [
    { name: 'chromium', use: { browserName: 'chromium' } }
  ],
});
