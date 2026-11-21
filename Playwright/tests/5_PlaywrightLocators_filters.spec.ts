/* 
1) Got to Url: https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
2) Enter user name and password ( Admin, admin123)
3) Click on login
4) Check Dashboard is visible after login



import { test, expect, Locator } from '@playwright/test';

test('Built-in Locators', async ({ page }) => {
  
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // page.getByAltText()
  let logo: Locator = page.getByAltText('company-branding');
  await expect(logo).toBeVisible();

  // page.getByPlaceholder()
  await page.getByPlaceholder('Username').fill("Admin");
  await page.getByPlaceholder('Password').fill("admin123");

  // page.getByRole()
  await page.getByRole('button', { name: 'Login' }).click();

  // page.getByRole() for the page heading after login
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();

}); */

/* ======================================================
    Playwright Locator Filters 

    1.Verify "Add to cart" for Product 2   
    2.Count items not having "Out of stock"
    3.Find items with "In stock"
    4.Find items with "Out of stock"
    5.Verify elements using data-testid
    6.Count all elements with test ids
    7.Find "Say goodbye" button for John
    8.Find "Say hello" button for Mary
    9.Count "Say hello" buttons for John
    10.Count "Say goodbye" buttons for Mary
    11.Count all buttons for John
    12.Find "Subscribe" buttons using multiple conditions
    13.Find "Unsubscribe" button using .and()
    14.Find "details" buttons for done tasks
    15.Find "details" button for pending tasks
    16.Count tasks with "done" status'
    17.Find tasks not marked "done"
    18.Find specific product and verify its button
    19.Verify stock status counts
  
======================================================*/

import {test,expect}from '@playwright/test'

const URL="https://sdetqa.vercel.app/filters_practice"

test.beforeEach(async({page})=>{
await page.goto(URL)
})

test.afterEach(async({page})=>{
  await page.close()
})

test('1.Verify "Add to cart" for Product 2',async({page})=>{
const AddToCartP2=page.getByRole('listitem')
  .filter({hasText:("Product 2")})
  .getByRole('button',{name:'Add to cart'})

  await expect( AddToCartP2).toBeVisible()
})

test('2.Count items not having "Out of stock"',async({page})=>{
  const CountOfOOS=page.locator('.card').nth(1)
  .getByRole('listitem')
  .filter({hasNotText:("Out of stock")})

  console.log("count of items not having 'Out of stock': ", await (CountOfOOS).count())

  await expect( CountOfOOS).toHaveCount(3)
})

test('3.Find items with "In stock"',async({page})=>{
const inStockItemList=page.getByRole('listitem')
  .filter({hasText:("In stock")})

console.log("count of items having 'In stock': ", await (inStockItemList).count())
console.log("List of items having 'In stock': ", await (inStockItemList).allTextContents())
await expect( inStockItemList).toHaveCount(3)

})

test(' 4.Find items with "Out of stock"',async({page})=>{
  const itemOOS=page.getByRole('listitem')
  .filter({hasText:'Out of stock'})
console.log("count of items not having 'Out of stock': ", await (itemOOS).count())
await expect(itemOOS).toHaveCount(2)
})

test('5.Verify elements using data-testid',async({page})=>{
  const apple= page.getByTestId('apple')
  const banana=page.getByTestId('banana')
  const orange=page.getByTestId('orange')
  const kiwi=page.getByTestId('kiwi')
  const mango=page.getByTestId('mango')
  await expect (apple).toBeVisible()
  await expect (banana).toBeVisible()
  await expect (orange).toBeVisible()
  await expect (kiwi).toBeVisible()
  await expect (mango).toBeVisible()
  await expect(apple).toContainText("apple")
  await expect(banana).toContainText("banana")
  await expect(orange).toContainText("orange")
  await expect(kiwi).toContainText("kiwi")
  await expect(mango).toHaveText("🥭 mango")

})

test('6.Count all elements with test ids',async({page})=>{
  const testId= page.locator('[data-testid]')
  const testIdCount=await testId.count()
  console.log('Count of all elements with Test ID is: ',testIdCount)
  const FirstElement= await testId.first().innerText()
  const lastElement= await testId.last().innerText()
  const ThirdElement=await testId.nth(3).innerText()

  console.log('First Element is ',FirstElement, ', Last Element is ',lastElement, ', Third elementis ',ThirdElement)
  await expect(testId).toHaveCount(5)
})

test('7.Find "Say goodbye" button for John',async({page})=>{
  const goodByeJohn = page.getByRole('listitem')
  .filter({hasText:'John'}).
  getByRole('button',{name:'Say goodbye'})
  await expect(goodByeJohn).toBeVisible()
  await goodByeJohn.click()
  await expect(goodByeJohn).toHaveText("Say goodbye")
})

test('8.Find "Say hello" button for Mary',async({page})=>{
    const SayHelloMary = page.getByRole('listitem')
  .filter({hasText:'Mary'}).
  getByRole('button',{name:'Say hello'})
  await expect(SayHelloMary).toBeVisible()
  await SayHelloMary.click()
  await expect(SayHelloMary).toHaveText("Say hello")
})

test('9.Count "Say hello" buttons for John',async({page})=>{
  const SayHelloJohn = page.getByRole('listitem')
  .filter({hasText:'John'}).
  getByRole('button',{name:'Say hello'})
  await expect(SayHelloJohn).toBeVisible()
  await SayHelloJohn.click()
  await expect(SayHelloJohn).toHaveText("Say hello")
})
test('10.Count "Say goodbye" buttons for Mary',async({page})=>{
  const goodByeMary = page.getByRole('listitem')
  .filter({hasText:'Mary'}).
  getByRole('button',{name:'Say goodbye'})
  await expect(goodByeMary).toBeVisible()
  await goodByeMary.click()
  await expect(goodByeMary).toHaveText("Say goodbye")})

test('11.Count all buttons for John',async({page})=>{
  const allJohnButtons= page.getByRole('listitem')
     .filter({hasText:'John'})
     .getByRole('button')
  console.log('John button is: ',await allJohnButtons.count())
  await expect(allJohnButtons).toHaveCount(2)
})
test('12.Find "Subscribe" buttons using multiple conditions',async({page})=>{
const subscribeButton=page.getByRole('button').and(page.getByTitle('Subscribe',{exact:true}))
console.log("Count of Subscribe Button is", await subscribeButton.count())
await expect(subscribeButton).toHaveCount(2)
await expect((subscribeButton).first()).toBeVisible()
await expect((subscribeButton).last()).toBeVisible()
})

test('13.Find "Unsubscribe" button using .and()',async({page})=>{
  const UnsubscribeButton=page.getByRole('button').and(page.getByTitle('Unsubscribe',{exact:true}))
  console.log("Unsubscribe button is ",await UnsubscribeButton.count())
  await expect(UnsubscribeButton).toHaveCount(1)
  await expect(UnsubscribeButton).toHaveText('📭 Unsubscribe')
})

test(' 14.Find "details" buttons for done tasks',async({page})=>{
const doneTaskDetailsBUtton = page.getByRole('listitem').filter({hasText:'done'}).getByRole('button',{name:'details'})
await expect(doneTaskDetailsBUtton).toHaveCount(2)
})

test('15.Find "details" button for pending tasks',async({page})=>{
const pendingTaskDetailsBUtton = page.getByRole('listitem').filter({hasText:'pending'}).getByRole('button',{name:'details'})
await expect(pendingTaskDetailsBUtton).toHaveCount(1) 
})

test(' 16.Count tasks with "done" status',async({page})=>{
  const CountOfDone=page.getByRole('listitem').filter({hasText:'done'})
  console.log("Count of Done is ",await CountOfDone.count())
  await expect(CountOfDone).toHaveCount(2)
})
test('17.Find tasks not marked "done"',async({page})=>{
  const TaskNotMarkedByDone= page.locator('.card').nth(5).getByRole('listitem').filter({hasNotText:'done'})
  console.log("Count of tasks not marked done is ",await TaskNotMarkedByDone.count())
  await expect(TaskNotMarkedByDone).toHaveCount(2)
})
test('18.Find specific product and verify its button',async({page})=>{
  const Product2Button=page.getByRole('listitem').filter({hasText:'Product 2'}).getByRole('button',{name:'Add to cart'})
  await expect(Product2Button).toBeVisible()
})

test('19.Verify stock status counts',async({page})=>{
  const InStockStatus= page.getByRole('listitem').filter({hasText:'In stock'})
  const OutStockStatus= page.getByRole('listitem').filter({hasText:'Out of stock'})

  console.log("Count of In stocks status is ",await InStockStatus.count())
  console.log("Count of Out of stocks status is ",await OutStockStatus.count())
})


    