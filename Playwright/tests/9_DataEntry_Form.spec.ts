import {test, expect} from "@playwright/test"

test.describe(async()=>{
  const URL="https://sdetqa.vercel.app/autoplay"
  test.beforeEach(async({page})=>
  {
      await page.goto(URL)
     
  })

  test.afterEach(async({page})=>{
    await page.close()
  })

  test("Page load validation",async({page})=>{
    await expect(page).toHaveURL(URL)
    await expect(page.getByText('AutoPlay')).toBeVisible()
  })

  test("Inputfield Validation",async({page})=>{
    const nameField=page.getByLabel('Full name')
    const EmailField=page.getByLabel('Email')
    const PhoneField=page.getByLabel('Phone')
    const AddressField=page.getByLabel('Address')

    await expect(nameField).toBeVisible()
    await expect(nameField).toBeEditable()
    await nameField.fill('Priyanka')
    await expect(nameField).toHaveValue('Priyanka')
    await expect(nameField).toHaveAttribute('maxlength','15')

     await expect(EmailField).toBeVisible()
    await expect(EmailField).toBeEditable()
    await EmailField.fill('Priyanka@gmail.com')
    await expect(EmailField).toHaveValue('Priyanka@gmail.com')

     await expect(PhoneField).toBeVisible()
    await expect(PhoneField).toBeEditable()
    await PhoneField.fill('+91 9876543210')
    await expect(PhoneField).toHaveValue('+91 9876543210')

     await expect(AddressField).toBeVisible()
    await expect(AddressField).toBeEditable()
    await AddressField.fill('123 Davidson avenue/n somerset NewJersey')
    await expect(AddressField).toHaveValue('123 Davidson avenue/n somerset NewJersey')
    })
test('Gender Radio Button validation',async({page})=>{
  const male=page.getByLabel('Male',{exact:true})
  const female=page.getByLabel('Female',{exact:true})

  await female.check()
  await expect(female).toBeChecked()
  await expect(male).not.toBeChecked()
})

})


