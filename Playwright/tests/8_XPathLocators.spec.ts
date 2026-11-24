import {test, expect} from '@playwright/test'

test("XPath Locators",async({page}){

  await page.goto("https://demowebshop.tricentis.com")
// 1. Absolute XPath (Full XPath) - Not recommended
const Logo=page.locator("/html[1]/body[1]/div[4]/div[1]/div[1]/div[1]/a[1]/img[1]")
await expect(Logo).toBeVisible()

// 2. Relative XPath (Partial XPath) // with Single attribute
//Syntax:    //tagname[@arrt=value]
const SearchButton=page.locator("//input[@id='small-searchterms']")
await expect(SearchButton).toBeVisible()
await SearchButton.click()

// 3. XPath with contains()
const Computer=page.locator("//h2//a[contains(@href,'computer')]")
console.log("Count of product contain computer: ",await Computer.count())

// 4. XPath with starts-with()
const BuildStart=page.locator("//h2//a[starts-with(@href,'/build')]")


})




// 5. XPath with text()
// 6. XPath with last()
// 7. XPath with position()