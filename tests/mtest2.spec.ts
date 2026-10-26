// // absulute xpath vs relative xpath
// //xpath with contains() fuction
// //xpath with starts-with() function

// import { test, expect, Locator } from '@playwright/test';
// test("verify all the locetrs", async ({ page }) => {
// //     await page.goto("https://demowebshop.tricentis.com/");
// //     // absolute xpath----->
// //     const logo: Locator = page.locator("//html[1]/body[1]/div[4]/div[1]/div[1]/div[1]/a[1]/img[1]");
// //     await expect(logo).toBeVisible();

// //     // relative xpath---->
// //     const logo: Locator = page.locator("//img[@alt='Tricentis Demo Web Shop']");
// //     await expect(logo).toBeVisible();

// //     // @contains() function--->
// //     const product: Locator = page.locator("//h2/a[contains(@href,'computer')]");
// //     const productCount = await product.count();
// //     console.log("Total products are: ", productCount);

// //     expect(productCount).toBeGreaterThan(0);
// //     console.log("our first product name:- ", await product.first().textContent());
// //     console.log("our third product name:- ", await product.nth(2).textContent());
// //     console.log("our last product name:- ", await product.last().textContent());
// //     let allProducts:string[] = await product.allTextContents();
// //     // individual product name print using for loop-->
// //     for(let pt of allProducts){
// //         console.log(pt);
// //     }
// //     // print in array format-->
// //     console.log("All products are:- ", allProducts);


// //     const productSize = await product.count();

// //     for (let i = 0; i < productSize; i++) {
// //         const productName = await product.nth(i).textContent();

// //         if (productName?.includes("computer")) {
// //             console.log("Found:", productName);
// //             break;
// //         }
// //     }


// //     const products = page.locator("//h2/a");
// //     const size = await products.count();

// //     for (let i = 0; i < size; i++) {
// //         const name = await products.nth(i).textContent();

// //         if (name?.trim() === "Build your own computer") {
// //             console.log("Found at index:", i);
// //             break;
// //         }
// //     }

// //     // satrts-with() function--->
// //     // difference between contains() and starts-with()
// //     // what is the difference between text and normalize-space() function
// //     const buildingProduct: Locator = page.locator("//h2/a[starts-with(@href,'/build')]");
// //     const count:Number = await buildingProduct.count();
// //     console.log("Total building products are: ", count);
// //     expect(count).toBeGreaterThan(0);

// //     // text() function--->
// //     const reglink:Locator= page.locator("//a[text()='Register']");
// //     await expect(reglink).toBeVisible();

// //     // position() function--->
// //     const product: Locator = page.locator("//div[@class='column follow-us']//li[position()=1]");
// //     await expect(product).toBeVisible();
// //     console.log("First product name is: ", await product.textContent());


// //     // dynamic xpath---> 
// //     await page.goto("https://testautomationpractice.blogspot.com/");
// //     for (let i = 1; i <= 5; i++) {
// //         let button: Locator = page.locator(`//button[text()="STOP" or text()="START"]`);
// //         // let button = await page.locator('//button[@name="start"]');
// //         // let button = await page.locator('//button[@name="start" or @name="stop"]');
// //         // let button = await page.locator('//button[contains(@name,"st")]');
// //         // let button = await page.locator('//button[starts-with(@name,"st")]');
// //         await button.click();
// //         await page.waitForTimeout(2000);
// //     }

// // });

// // // using css:--->

// // test('Handle Dynamic Elements using using CSS locator', async ({ page }) => {

// //     // Navigate to the target page
// //     await page.goto('https://testautomationpractice.blogspot.com/');

// //     // Loop to click the button 5 times
// //     for (let i = 1; i <= 5; i++) {

// //         // Locate the button using a CSS attribute selector
// //         // name can be 'start' or 'stop'
// //         const button = page.locator('button[name="start"], button[name="stop"]');

// //         // Click the button
// //         await button.click();

// //         // Wait for 2 seconds
// //         await page.waitForTimeout(2000);
//     }
// });

// // using buildin playwright locators:--->
// test('Handle Dynamic Elements using PW Locators', async ({ page }) => {

//     await page.goto('https://testautomationpractice.blogspot.com/');

//     // Loop to click the button 5 times
//     for (let i = 1; i <= 5; i++) {

//         // Locate button by role and dynamic name
//         const button = page.getByRole('button', { name: /START|STOP/ });

//         // Click the button
//         await button.click();

//         // Wait for 2 seconds
//         await page.waitForTimeout(2000);
//     }
// });