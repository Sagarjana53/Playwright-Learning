//auto suggested dropdeown ko locate karne keliye open devtool>elements>ctr+shift+p>emulate focused page 
// after locate same process but this time do not emulate focused page


import { test, expect, Locator } from "@playwright/test";

test("Autosuggest dropdown", async ({ page }) => {

    await page.goto("https://www.flipkart.com/");

    await page.locator('input[name="q"]:not([readonly])').fill("smart");// q nam se do eliment h to or ek specification lagana para 
    await page.waitForTimeout(5000);// quki jab hum search box main kuch search karte h tab server se output deta h and usmain kuch time lagta server and clint ke bichh main isliye thora rxplesitly time add karna parta h

    // Get all the suggested options
    // Ctrl + Shift + P → DOM → Emulate a focused page
    const options: Locator = page.locator("ul>li");

    const count = await options.count();
    console.log("Number of suggested options:", count);

    //2. try to get a perticular index optiom
    console.log("5 th option:", await options.nth(5).innerText());

    //3.print all the options
    console.log("all suggested emlemnt-------->")
    for (let i = 0; i < count; i++) {
        // console.log((i+1),"-th option:", await options.nth(i).innerText());
        console.log((i + 1), "-th option:", await options.nth(i).textContent());
    }

    //4.select/click on the smartphone option
    for (let i = 0; i < count; i++) {
        const text = await options.nth(i).innerText();

        if (text === 'smartphone') {
            await options.nth(i).click();
            break;
        }
    }

    await page.waitForTimeout(3000);

});

//hidden bootstrap dropdown------------------------>

test.only("Bootstrap hidden dropdown", async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    //Login steps
    await page.locator('input[name="username"]').fill('Admin');
    await page.locator('input[name="password"]').fill('admin123');
    await page.locator('button[type="submit"]').click();

    //click on the PIM
    await page.getByText('PIM').click();

    //click on Job TITLE Dropdown
    await page.locator('form i').nth(2).click();
    await page.waitForTimeout(3000);

    //1.capture all the options from dropdown and count
    const options: Locator = page.locator("div[role='listbox'] span");
    const count: number = await options.count();
    console.log("Number of options in a dropdown:", count);

    //2.Print all the options
    console.log("Pring all the options.....");

    for (let i = 0; i < count; i++) {
        console.log(await options.nth(i).innerText());
    }
    //3.Print all the options
    console.log("All the text contents:", await options.allTextContents());

    //4.Select/click on option
    for (let i = 0; i < count; i++) {
        const text = await options.nth(i).innerText();

        if (text === 'Automation Tester') {
            await options.nth(i).click();
            break;
        }
    }
    await page.waitForTimeout(3000);
});


