import { test , expect } from '@playwright/test'
test.describe('CSS Locators',()=>{

const URL = "https://demowebshop.tricentis.com/"

test.beforeEach(async({page})=>
await page.goto(URL)
)

test.afterEach(async({page})=>{
  await page.close()
})

/* 
1.tag#id or #id
2.tag.class or .class
3.tag'[attribute=value]' or'[attribute=value]'
4.tag.class'[attribute=value]' or .class'[attribute=value]' 

Advanced
5.attribute=^starts with
6.attribute=$ ends with
7.attribute =* contains
8. input>forms directchild
9. input form descendent anywhere under the input
*/
test('CSS Locators with ID',async({page})=>{
  const SearchBoxWithID=page.locator('#small-searchterms')
  await SearchBoxWithID.fill('14.1-inch Laptop')
  await page.locator('[value="Search"]').click()
  await expect(page.locator("h2[class='product-title'] a")).toHaveText('14.1-inch Laptop')
})

test('CSS Locators with class',async({page})=>{
  const SearchBoxWithClass=page.locator('.search-box-text')
  await SearchBoxWithClass.fill('14.1-inch Laptop')
  await page.locator('[value="Search"]').click()
  await expect(page.locator("h2[class='product-title'] a")).toHaveText('14.1-inch Laptop')
})

test('CSS Locators with Attribute',async({page})=>{
  const SearchBoxWithAtt=page.locator("input[name='q']")
  await SearchBoxWithAtt.fill('14.1-inch Laptop')
  await page.locator('[value="Search"]').click()
  await expect(page.locator("h2[class='product-title'] a")).toHaveText('14.1-inch Laptop')
})

test('CSS Locators with Attribute with Class',async({page})=>{
  const SearchBoxWithAttClass=page.locator("input.search-box-text[name='q']")
  await SearchBoxWithAttClass.fill('14.1-inch Laptop')
  await page.locator('[value="Search"]').click()
  await expect(page.locator("h2[class='product-title'] a")).toHaveText('14.1-inch Laptop')
})

test('CSS Locators with starts with ^',async({page})=>{
  const SearchBoxWithCaret=page.locator("[id^='small']")
  await SearchBoxWithCaret.fill('14.1-inch Laptop')
  await page.locator('[value="Search"]').click()
  await expect(page.locator("h2[class='product-title'] a")).toHaveText('14.1-inch Laptop')
})

test('CSS Locators with Ends with $',async({page})=>{
  const SearchBoxWithDollar=page.locator("[id$='terms']")
  await SearchBoxWithDollar.fill('14.1-inch Laptop')
  await page.locator('[value="Search"]').click()
  await expect(page.locator("h2[class='product-title'] a")).toHaveText('14.1-inch Laptop')
})

test('CSS Locators with contains with *',async({page})=>{
  const SearchBoxWithAsterisk=page.locator("[id*='searchterms']")
  await SearchBoxWithAsterisk.fill('14.1-inch Laptop')
  await page.locator('[value="Search"]').click()
  await expect(page.locator("h2[class='product-title'] a")).toHaveText('14.1-inch Laptop')
})

test('CSS Locators with parent child',async({page})=>{
  const SearchBoxWithGreaterSymbol=page.locator('form>input').nth(0)
  await SearchBoxWithGreaterSymbol.fill('14.1-inch Laptop')
  await page.locator('[value="Search"]').click()
  await expect(page.locator("h2[class='product-title'] a")).toHaveText('14.1-inch Laptop')
})

test('CSS Locators with Descendent child',async({page})=>{
  const SearchBoxWithSpace=page.locator('form input').nth(0)
  await SearchBoxWithSpace.fill('14.1-inch Laptop')
  await page.locator('[value="Search"]').click()
  await expect(page.locator("h2[class='product-title'] a")).toHaveText('14.1-inch Laptop')
})

})