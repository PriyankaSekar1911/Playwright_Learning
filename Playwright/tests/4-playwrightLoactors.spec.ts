/* button, link, textbox, checkbox, radio, combobox, heading, img, table, row, cell, dialog and tab, list, listitem */

import {test, expect}from '@playwright/test'

//Before All

test.beforeEach(async({page})=>
  {await page.goto("https://sdetqa.vercel.app/pw-locators-practice-app.html")}
)
//After Each

test.afterEach(async({page})=>{
  await page.close()
})


test("1.Get By Role portion", async({page})=>{
await expect(page.getByText("Locate elements by their explicit or implicit ARIA roles.")).toBeVisible()
await expect(page.getByRole('button',{name:'Primary Action'})).toBeVisible()
await expect(page.getByRole('button',{name:'Toggle Button'})).toBeVisible()
await expect(page.getByRole('button',{name:'Div with button role'})).toBeVisible()
await expect(page.getByRole('textbox',{name:'Username:'})).toBeVisible()
await expect(page.getByRole('checkbox',{name:'Accept terms'})).toBeEditable()


await page.getByRole('link',{name:'Home'}).first().click()
await page.getByRole('link',{name:'Products'}).first().click()
await page.getByRole('link',{name:'Contact'}).first().click()

/* const HomeLink=page.getByRole('link',{name:"Home"}).nth(0)
await expect(HomeLink).toBeVisible() */
}
)
test("2. Get By Text()",async({page})=>
{
await expect(page.getByText("colored text")).toBeVisible()
await expect(page.getByText("List item 1")).toBeVisible()
await expect(page.getByText("List item 2 with ")).toBeVisible()
await expect(page.getByText("Special: Unique text identifier")).toBeVisible()
await page.getByRole('link',{name:'link'}).first().click()
await expect(page.getByRole("button",{name:"Submit Form"})).toBeVisible()

})

test("3.Get By Label()",async({page})=>
{
  await page.getByLabel("Email Address:").fill("Priyanka@gmail.com")
  await page.getByLabel("Password:").fill("PR123")
  await page.getByLabel("Your Age:").fill("25")
  await page.getByLabel("standard").check()
  await page.getByLabel("express").check()

})

test("4.Get By Placeholder()", async({page})=>{
  await page.getByPlaceholder("Enter your full name").fill("Priyanka Rajasekaran")
  await page.getByPlaceholder("Phone number (xxx-xxx-xxxx)").fill("1234567890")
  await page.getByPlaceholder("Type your message here...").fill("Priyanka is learning playwright")
  await page.getByPlaceholder("Search products...").fill("Playwright")
  await page.getByRole('button',{name:'Search'}).click()
})

test("5.Get BY altText()",async({page})=>{
const pageLogo=page.getByAltText("logo image")
await expect(pageLogo).toBeVisible()

})

test("6.Get By Title()",async({page})=>{
 
await expect(page.getByText('Locate elements by their title attribute.')).toBeVisible()
await expect(page.getByTitle('Home page link', { exact: true })).toBeVisible()
await expect(page.getByTitle("HyperText Markup Language",{exact:true})).toBeVisible()
await expect(page.getByTitle("Tooltip text",{exact:true})).toBeVisible()
await expect(page.getByTitle("Click to save your changes",{exact:true})).toBeVisible()

})

test("7.get By TestID",async({page})=>{
  await expect(page.getByTestId("edit-profile-btn")).toBeVisible()
  await expect(page.getByTestId("profile-name")).toBeVisible()
  await expect(page.getByTestId("profile-email")).toBeVisible()
  await expect(page.getByTestId("product-card-1")).toBeVisible()
  await expect(page.getByTestId("product-card-2")).toBeVisible()
  await expect(page.getByTestId("product-card-3")).toBeVisible()
  await expect(page.getByTestId("footer-button")).toBeVisible()
  await expect(page.getByTestId("nav-home")).toBeVisible()
  await expect(page.getByTestId("nav-products")).toBeVisible()
  await expect(page.getByTestId("nav-contact")).toBeVisible()

})
