import { test } from '@playwright/test'

test('should navigate to the about page', async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto('http://localhost:3000/')
  // Find an element with the text 'About Page' and click on it
  await page.click('text=Learn')
  // // The new url should be "/about" (baseURL is used there)
  // await expect(page).toHaveURL('https://nextjs.org/learn')
  // // The new page should contain an h1 with "About Page"
  // await expect(page.locator('h1')).toContainText('Learn')
})
