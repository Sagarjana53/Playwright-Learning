// day 1:------------------------------------------>

// import { test, expect } from '@playwright/test';

// test("verify page title", async ({ page }) => {
//     await page.goto("http://my-shop.co.in/");

//     const ti = await page.title();
//     console.log("Title is: " + ti);

//     await expect(page).toHaveTitle(/MyShop/);
// });
// import { test, expect } from '@playwright/test';

// test("verify login functionality", async ({ page }) => {

//     await page.goto("https://www.saucedemo.com/");
//     await page.fill("#user-name", "standard_user");
//     await page.fill("#password", "secret_sauce");
//     // await page.click("#login-button");
//     await page.getByRole("button", { name: 'Login' }).click();
//     await expect(page).toHaveURL(/inventory\.html/);
// });

// ----------------------------------------------------------

// day 2:------------------------------------------>

// import { test, expect, Locator } from '@playwright/test';
// test("verify all the locetrs", async ({ page }) => {
//     await page.goto("https://playwright.dev/");
//     // const Logo: Locator = page.getByAltText("Playwright logo");
//     // await expect(Logo).toBeVisible();
//     await expect(page.getByText("Playwright enables reliable web automation for testing, scripting, and AI agents.")).toBeVisible();
// })




// day 2 practice:------------------------------------------>
// <input
//     type="text"
//     placeholder="Search products"
//     data-testid="search-box"
// >

// <button title="Search">Search</button> 
// await page.getByPlaceholder("Search products").fill("Laptop");
// await page.getByTitle("Search").click();
// await page.getByRole("button", { name: "Search" }).click();


// <label for="password">Password</label>
// <input
//     id="password"
//     type="password"
//     placeholder="Enter password"
//     data-testid="password-field"
// >

// a-->await page.getByLabel("Password").fill("123456");
// explation:- getByLabel  se password field ko locate kiya aur usme value fill ki .fill use karke ;

// b-->await page.getByPlaceholder("Enter password").fill("abcdef");
// explation:- getByPlaceholder  se placeholder field ko locate kiya aur usme value fill ki .fill use karke ;


// c-->await page.getByTestId("password-field").fill("xyz123");

// d-->in tino nei input ko locate kiya 

// <button data-testid="save-btn" title="Save changes">
//     Save
// </button>

// 1.getByTestId use karke--> await page.getByTestId("save-btn").click();
// 2.getByTitle use karke--> await page.getByTitle("Save changes").click();
// 3.getByRole use karke--> await page.getByRole("button", { name: "Save" }).click();


// <h2>Welcome to MyShop</h2>

// <label for="username">Username</label>
// <input
//     id="username"
//     placeholder="Enter username"
//     data-testid="username-field"
// >

// <button
//     title="Login to your account"
//     data-testid="login-btn">
//     Login
// </button>

// <img
//     src="logo.png"
//     alt="MyShop logo"
// >

// A) "Welcome to MyShop" ko locate karo.--> await page.getByRole("heading", { name: "Welcome to MyShop" }).isVisible();

// B) Username field mein "Sagar" fill karo using getByLabel().--> await page.getByLabel("Username").fill("Sagar");

// C) Username field mein "Rahul" fill karo using getByPlaceholder().--> await page.getByPlaceholder("Enter username").fill("Rahul");

// D) Login button ko getByTestId() se click karo.--> await page.getByTestId("login-btn").click();

// E) MyShop logo ko getByAltText() se locate karke verify karo ki visible hai.--> await expect(page.getByAltText("MyShop logo")).toBeVisible();

// Bonus 🔥: Login button ko getByRole() se click karne ka code bhi likho.--> await page.getByRole("button", { name: "Login" }).click();


// <div class="product">
//     <h2>iPhone 15</h2>
//     <button class="buy-btn">Buy Now</button>
//     <button class="buy-btn">Buy Now</button>
// </div>

// <div class="product">
//     <h2>Samsung S24</h2>
//     <button class="buy-btn">Buy Now</button>
// </div>

