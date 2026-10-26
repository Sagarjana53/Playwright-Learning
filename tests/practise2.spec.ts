import { test, expect, Locator } from '@playwright/test';
test('practice questions', async ({ page }) => {
    // <button aria - label="Login" > Sign In </button>
    //getByRole()--->
    // const loginButton:Locator = page.getByRole('button', { name: 'Login' });
    // <label for= "username" > Username </label>
    //     < input id = "username" type = "text" >
    //getByLabel()--->
    // const usernameInput:Locator = page.getByLabel('Username');
    // usernameInput.fill('Sagar');
    // <button data-testid="login-button">Login</button>
    //getByTestId()--->
    // const loginButton:Locator = page.getByTestId('login-button');
    // <img src="logo.png" alt="MyShop logo">
    //getByAltText()--->
    // const logoImage:Locator = page.getByAltText('MyShop logo');
    // await expect(logoImage).toBeVisible();
    // <button title="Delete account">Delete</button>
    //getByTitle()--->
    // const deleteButton:Locator = page.getByTitle('Delete account');
    // const buttons = page.getByRole("button", { name: "Login" });

    // console.log(await buttons.count());
    //output if there 3 buttons with same name: 3
    // <input
    // type="email"
    // placeholder = "Enter your email"
    // aria - label="Email Address"
    //     />

    // <div>
    //     <h2>Welcome to MyShop </h2>
    //         < p > Welcome to our online store </>
    //             </div>
    //getbytext()--->
    // const welcomeHeading:Locator = page.getByText('Welcome to MyShop');
    // await expect(welcomeHeading).toBeVisible();
    // <input
    // type="text"
    // placeholder = "Enter your email"
    //     />
    //getByPlaceholder()--->
    // await page.getByPlaceholder('Enter your email').fill('sagar@gmail.com');

    // const logo:Locator= page.getByAltText('MyShop logo');
    // await expect(logo).toBeVisible();
    //if there are multiple elements with same alt text then tobeVisible() will check for first element only
    // <button title="Delete account">Delete</button>
    //getByTitle()--->
    // await page.getByTitle('Delete account').click();
    // <button data-testid="submit-order">Place Order</button>
    //getByTestId()--->
    // await page.getByTestId('submit-order').click();
    // <label for= "username" > Username </label>
    //     < input id = "username" placeholder = "Enter username" >

    //     <button data - testid= "login-btn" aria - label="Login" >
    //         Sign In
    //             </button>

    //             < img alt = "Company Logo" src = "logo.png" >
    //getbyplaceholder()--->
    // await page.getByPlaceholder('Enter username').fill('Sagar');
    //getbyrole()--->
    // await page.getByRole('button', { name: 'Login' }).click();
    //logo visibility check using getByAltText()--->
    // const logo: Locator = page.getByAltText('Company Logo');
    // await expect(logo).toBeVisible();

    // URL: https://www.saucedemo.com/

    // Username: standard_user
    // Password: secret_sauce
    // //Page open karo--> 
    // await page.goto("https://www.saucedemo.com/");
    // //username field--> 
    // await page.getByPlaceholder('Username').fill('standard_user');
    // //password field--> 
    // await page.getByPlaceholder('Password').fill('secret_sauce');
    // //login button--> 
    // await page.getByRole('button', { name: 'Login' }).click();
    // //Verify karo ki URL mein inventory.html hai
    // await expect(page).toHaveURL(/.*inventory.html/);

})