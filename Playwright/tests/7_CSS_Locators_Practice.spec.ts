import {test,expect} from '@playwright/test'

test.describe(async()=>
{

const URL ="https://demowebshop.tricentis.com/"

test.beforeEach(async({page})=>{
await page.goto(URL)
})

test.afterEach(async({page})=>{
await page.close()
})

test('1: Open Application',async({page})=>{
  await expect(page).toHaveURL(URL)
})

test('2: Verify Logo Visibility',async({page})=>{
  const Logo=page.getByAltText('Tricentis Demo Web Shop')
  await expect(Logo).toBeVisible()
})

test('3: Find Products Containing "computer"',async({page})=>{

  const productComputer = page.locator('h2>a[href*=computer]')
  console.log(await productComputer.count())
})

test('4: Print Product Details - first, nth & last',async({page})=>{
  const productComputer = page.locator('h2>a[href*=computer]')
  console.log("First Element is ",await productComputer.first().textContent())
  console.log("Last Element is ",await productComputer.last().textContent())
  console.log("Third Element is ",await productComputer.nth(2).textContent())
})
test('5: Find Products Starting with "/build"',async({page})=>{
  const BuildComputer = page.locator('h2>a[href*=build]')
  console.log(await BuildComputer.count())
})
test('6: Verify Register Link visible',async({page})=>{
  const RegLink=page.locator("[href='/register']")
  await expect(RegLink).toBeVisible()
})

test("7: Verify Last Social Media Link - should be 'Google+'",async({page})=>{
  const googleLink=await page.locator('.follow-us ul li:last-child').innerText()
  expect(googleLink).toBe('Google+')
})
test("8: Verify Second Social Media Link - should be 'Twitter'",async({page})=>{
  const secondLink=await page.locator(".follow-us ul li:nth-child(2)").innerText()
  expect(secondLink).toBe('Twitter')
})
})