
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/');
  await page.getByRole('link', { name: 'Tricentis Demo Web Shop' }).click();
  await page.getByRole('button', { name: 'Search' }).click();

});

//npx playwright codegen  This will help you record the session and give you the scripts
//npx playwright codegen https://sdetqa.vercel.app/pw-locators-practice-app