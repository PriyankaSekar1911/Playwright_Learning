import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/');
  await page.getByRole('link', { name: 'Tricentis Demo Web Shop' }).click();
  await page.getByRole('strong').filter({ hasText: 'Categories' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Books' }).nth(2).click();
  await page.getByRole('listitem').filter({ hasText: 'Computers' }).nth(1).click();
  await page.getByRole('listitem').filter({ hasText: 'Digital downloads' }).nth(1).click();
  await page.getByRole('listitem').filter({ hasText: 'Electronics' }).nth(1).click();
  await page.getByRole('listitem').filter({ hasText: 'Gift Cards' }).nth(1).click();
  await expect(page.locator('body')).toContainText('Apparel & Shoes');
  await page.getByRole('link', { name: 'Electronics' }).first().click();
  });

//use playwright extension from the testing folder you will see newrecord will do the sme job like codegen
