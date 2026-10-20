import { test, expect } from '@playwright/test';

test('navigate to EPAM Client Work from Services', async ({ page }) => {
  await page.goto('https://www.epam.com/', {
    waitUntil: 'domcontentloaded',
  });

  await page.getByRole('link', { name: 'Services' }).hover();
  await page.getByRole('link', { name: 'Explore Our Client Work' }).click();

  await expect(page).toHaveURL(/\/services\/client-work/);
  await expect(
    page.getByRole('heading', { name: 'Client Work' })
  ).toBeVisible();
});
