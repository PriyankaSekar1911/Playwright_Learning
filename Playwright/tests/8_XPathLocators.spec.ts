import {test, expect} from '@playwright/test'

test("XPath Locators",async({page})=>{

  await page.goto("https://demowebshop.tricentis.com")
// 1. Absolute XPath (Full XPath) - Not recommended
const Logo=page.locator("//html/body/div[4]/div[1]/div[1]/div[1]/a[1]/img")
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
console.log("Product Starts with build: ",await BuildStart.count())

// 5. XPath with text()
const TextInch=page.locator("//h2//a[text()='14.1-inch Laptop']")
await expect(TextInch).toBeVisible()

// 6. XPath with last()
const lastElement=page.locator("(//h2[@class='product-title']//a)[last()]")
console.log("Last element in the class is : ",await lastElement.innerText())


// 7. XPath with position()
const elementPos=page.locator("(//h2[@class='product-title']//a)[position()=4]")
console.log("Eleement located with  position Xpath is ",await elementPos.innerText())
})





