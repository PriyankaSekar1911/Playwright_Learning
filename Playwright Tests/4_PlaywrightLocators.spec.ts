

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


test("Get by Role locator",async({page})=>{

await expect (page).toHaveTitle("Playwright Locators Demo")
await expect(page.getByRole("heading",{name:"getByRole()"}))
  .toContainText("getByRole()")

//button
await page.getByRole("button",{name:"Toggle Button"}).click() 

//link
const linkOfProducts=page.getByRole("menuitem",{name:"Products"}) 
await expect(linkOfProducts).toBeVisible();

// Text Box
await page.getByRole("textbox",{name:"Username:"}).fill("Priyanka")

const checkbox=page.getByRole("checkbox",{name:" Accept terms "})
checkbox.check()

await expect (checkbox).toBeChecked()//checkbox
checkbox.uncheck()
await expect (checkbox).not.toBeChecked()

//RadioButton
await page.getByRole("radio",{name:"express"}).click()

//imgage
await expect(page.getByRole("img",{name:"logo image"})).toBeVisible()

//List
/* await expect(page.getByRole("list")).toHaveCount(4) */

//ListItem
//await expect(page.getByRole("listitem",{name:"List item 2 with "})).toContainText("List item 2 with ")
/* await expect(page.getByRole("listitem", { name: "List item 2 with", exact: false })
).toBeVisible();
} */

// ListItem
/* console.log("Total list items:",
  await page.getByRole("listitem").count()
);

console.log("List item texts:",
  await page.getByRole("listitem").allTextContents()
); */

// ListItem
await expect(
  page.getByRole("listitem", { name: "List item 2 with link" })
).toBeVisible();
}
)

test("Get By Text() Locators", async({page})=>{

//Locate a paragraph using complete text-done
//Locate a paragraph using partial text-done
// Locate a list item
//Locate a list item containing a link
//Locate unique text
//Use exact matching
// Use getByText() to click text
//Verify the alert message
/* 
Exact text: getByText("Hello", {exact:true})
Partial text:getByText("Hello")
Click text:getByText("Submit").click()
Verify visibility:toBeVisible()
Verify text:toHaveText()
Verify partial text:toContainText()
Count matching text:toHaveCount() */
const buttonsText= page.getByText("Buttons",{exact:true})
await expect(buttonsText).toBeVisible()
page.getByText(/important/)
page.getByText("colored text")

})
  