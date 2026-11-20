












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
const PrimaryActionButton = page.getByRole('button',{name:'Primary Action'})
await expect(PrimaryActionButton).toBeVisible()
await PrimaryActionButton.click()

const UserNameText=page.getByRole('textbox',{name:'Username:'})
await UserNameText.fill("Priyanka")
const acceptCHeckBox=page.getByRole('checkbox',{name:'Accept terms'})
await acceptCHeckBox.check()
await expect(acceptCHeckBox).toBeChecked()

const ProductLink=page.getByRole('menuitem',{name:'Products'})
await ProductLink.click()

const HomeLink=page.getByRole('link',{name:"Home"}).nth(0)
await expect(HomeLink).toBeVisible()
}
)
test("2. Get By Text()",async({page})=>
{
const colouredText=page.getByText("colored text")
await expect(colouredText).toBeVisible()

const Listitem1=page.getByText("List item 1")
await expect(Listitem1).toBeVisible()

const SubmitForm=page.getByRole("button",{name:"Submit Form"})
await expect (SubmitForm).toBeVisible()
await (SubmitForm).click()
})

test("3.Get By Label()",async({page})=>
{
  const emailLabel= page.getByLabel("Email Address:")
  await expect(emailLabel).toBeVisible()
  await emailLabel.fill("Priyanka@gmail.com")

  const passwordLabel= page.getByLabel("Password:")
  await expect(passwordLabel).toBeVisible()
  await passwordLabel.fill("PR123")

  const ageLabel = page.getByLabel("Your Age:")
  await expect(ageLabel).toBeVisible()
  await emailLabel.fill("25")

  const standardShipping= page.getByRole("radio",{name:"standard"})
  await expect(standardShipping).toBeVisible()
  await standardShipping.check()

})

test("4.Get By PLaceholder()", async({page})=>{
  const fullNamePH=page.getByPlaceholder("Enter your full name")
  await expect(fullNamePH).toBeVisible()
  await fullNamePH.fill("Priyanka Rajasekaran")

  const phonePH=page.getByPlaceholder("Phone number (xxx-xxx-xxxx)")
  await expect(phonePH).toBeVisible()
  await phonePH.fill("1234567890")
  
  const textPH=page.getByPlaceholder("Type your message here...")
  await expect(textPH).toBeVisible()
  await textPH.fill("Priyanka is learning playwright")

  const searchPH=page.getByPlaceholder("Search products...")
  await expect(searchPH).toBeVisible()
  await searchPH.fill("Playwright")

  const SearchButtonPH=page.getByRole('button',{name:'Search'})
  await expect(SearchButtonPH).toBeVisible()
  await SearchButtonPH.click()
})

test("5.Get BY altText()",async({page})=>{
const pageLogo=page.getByAltText("logo image")
await expect(pageLogo).toBeVisible()

})

test("6.Get By Title()",async({page})=>{

const LocateElement= page.getByText('Locate elements by their title attribute.')
await expect(LocateElement).toBeVisible()

const HomepagelinkTitle= page.getByTitle('Home page link', { exact: true })
await expect(HomepagelinkTitle).toBeVisible()

const HyperTextMarkupLanguage=page.getByTitle("HyperText Markup Language",{exact:true})
await expect(HyperTextMarkupLanguage).toBeVisible()

const Tooltiptext=page.getByTitle("Tooltip text",{exact:true})
await expect(Tooltiptext).toBeVisible()
const ClickToSave=page.getByTitle("Click to save your changes",{exact:true})
await expect(ClickToSave).toBeVisible()

})

test("7.get By TestID",async({page})=>{
  const editProfilrTID=page.getByTestId("edit-profile-btn")
  await expect(editProfilrTID).toBeVisible()
  
  const profileName=page.getByTestId("profile-name")
  await expect(profileName).toBeVisible()

  const profileEmail=page.getByTestId("profile-email")
  await expect(profileEmail).toBeVisible()

  const productCard1=page.getByTestId("product-card-1")
  await expect(productCard1).toBeVisible()

  const productCard2=page.getByTestId("product-card-2")
  await expect(productCard2).toBeVisible()

  const productCard3=page.getByTestId("product-card-3")
  await expect(productCard3).toBeVisible()

  const footerButton=page.getByTestId("footer-button")
  await expect(footerButton).toBeVisible()

})
