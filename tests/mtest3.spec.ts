import { test, expect, Locator } from '@playwright/test';

test("SauceDemo XPath practice", async ({ page }) => {

    // await page.goto("https://playwright.dev/");

    // // Username → XPath
    // await page.locator('//input[@id="username"]').fill("standard_user");
    // // Password → XPath
    // await page.locator('//input[@id="password"]').fill("secret_sauce");
    // // Login button → XPath
    // await page.locator('//input[@id="login-button"]').click();
    // // Verify URL
    // await expect(page).toHaveURL("https://www.saucedemo.com/");
    //getByTest()-->
    // const text = page.getByText("Playwright enables reliable end-to-end testing for modern web apps.");
    // await expect(text).toHaveText("Playwright enables reliable end-to-end testing for modern web apps.");

    await page.goto("https://www.w3schools.com/html/html_tables.asp");
    //self -- xpath
    // const text:Locator = page.locator('//td[text()="Germany"]/self::td');
    // console.log(await text.textContent());
    // await expect(text).toHaveText("Germany");

    //parent -- xpath
    // const parent:Locator = page.locator('//td[text()="Germany"]/parent::tr');
    // console.log(await parent.textContent());
    // expect(parent).toContainText("Maria Anders");

    //child -- xpath
    // const child:Locator = page.locator('//table[@id="customers"]//tr[2]/child::td');
    // await expect(child).toHaveCount(3);
    // console.log(await child.textContent());
    //await expect(child).toHaveText("Maria Anders");
    // console.log(await child.allTextContents());

    //ancestor -- xpath-- get ancestor of the germany cell
    // const ancestor:Locator = page.locator('//td[text()="Germany"]/ancestor::table');
    // await expect(ancestor).toHaveAttribute("id", "customers");

    //descendant -- xpath-- get all td elements under the table
    // const descendant:Locator = page.locator('//table[@id="customers"]/descendant::td');
    // await expect(descendant).toHaveCount(18);
});