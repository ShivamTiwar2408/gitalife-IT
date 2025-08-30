const { test, expect } = require('@playwright/test');

test('home loads and shows GitaLife brand', async ({ page }) => {
  const resp = await page.goto('/');
  expect(resp?.ok(), 'Home response not OK').toBeTruthy();
  await expect(page.locator('body')).toContainText('GitaLife');
});

test('volunteer page reachable and has heading', async ({ page }) => {
  const resp = await page.goto('/volunteer');
  expect(resp?.ok(), 'Volunteer response not OK').toBeTruthy();
  // Heading text visible on your page
  await expect(page.locator('body')).toContainText('Join GitaLife as a Volunteer');
});

test('contact page shows public email', async ({ page }) => {
  const resp = await page.goto('/contact');
  expect(resp?.ok(), 'Contact response not OK').toBeTruthy();
  // Public email on your site
  await expect(page.locator('body')).toContainText('gitalifeinfo@gmail.com');
});

test('blog reachable (newsletter block)', async ({ page }) => {
  const resp = await page.goto('/blog');
  expect(resp?.ok(), 'Blog response not OK').toBeTruthy();
  await expect(page.locator('body')).toContainText(/Subscribe/i);
});
