import { test, expect } from '@playwright/test';

test.describe('Economic Dashboard', () => {
  test('should load the dashboard page', async ({ page }) => {
    await page.goto('/');

    // Check if the page loads
    await expect(page).toHaveTitle(/Economic Dashboard/);

    // Check if main navigation is present
    await expect(page.locator('nav')).toBeVisible();
  });

  test('should have accessible navigation', async ({ page }) => {
    await page.goto('/');

    // Check ARIA labels
    const nav = page.locator('nav');
    await expect(nav).toHaveAttribute('role', 'navigation');

    // Check keyboard navigation
    await page.keyboard.press('Tab');
    await expect(page.locator(':focus')).toBeVisible();
  });

  test('should display GDP chart section', async ({ page }) => {
    await page.goto('/');

    // Check if GDP section exists
    await expect(page.locator('[data-testid="gdp-section"]')).toBeVisible();
  });

  test('should be responsive on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    // Check if mobile menu is accessible
    await expect(page.locator('[data-testid="mobile-menu"]')).toBeVisible();
  });
});
