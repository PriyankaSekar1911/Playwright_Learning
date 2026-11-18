import {test, expect} from '@playwright/test';

test("First test in playwright", async({page})=>{
  await page.goto("https://sdetqa.vercel.app/pw-locators-practice-app")
  await expect (page).toHaveTitle("Playwright Locators Demo")
}
)