
import { test, expect, Locator } from "@playwright/test";


//text input actions------------>
test("Text Input Actions", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    const textBox: Locator = page.locator("#name");

    await expect(textBox).toBeVisible();
    await expect(textBox).toBeEnabled();

    const maxLength: string | null =
        await textBox.getAttribute("maxlength");

    expect(maxLength).toBe("15");
    await textBox.fill("Playwright");
    // console .log("the text content of frist name: " ,await textBox.textContent());
    console.log("the text content of frist name: ", await textBox.inputValue());
    const enteredValue: string = await textBox.inputValue();
    expect(enteredValue).toBe("Playwright");
    await page.waitForTimeout(3000);
});

// radio buttons------------>
test("radio button actions", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    const maleRadioButton: Locator = page.locator('#male');
    await expect(maleRadioButton).toBeVisible();
    await expect(maleRadioButton).toBeEnabled();
    expect(await maleRadioButton.isChecked()).toBe(false);
    await maleRadioButton.check();
    expect(await maleRadioButton.isChecked()).toBe(true);
    await expect(maleRadioButton).toBeChecked();// alternative way to check if the radio button is checked
    await page.waitForTimeout(3000);
});

// Checkbox actions------------>
test.only("Checkbox actions", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    // 1. Select specific checkbox (Sunday) using getByLabel and assert
    const sundayCheckbox: Locator = page.getByLabel('Sunday');
    await sundayCheckbox.check();
    await expect(sundayCheckbox).toBeChecked();

    // 2. Select all checkboxes and assert each is checked
    const days: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const checkboxes: Locator[] = [];
    for (let i = 0; i < days.length; i++) {
        const checkbox: Locator = page.getByLabel(days[i]);
        checkboxes.push(checkbox);
    }
    // const checkboxes: Locator[] = days.map(index => page.getByLabel(index));
    expect(checkboxes.length).toBe(7);

    //3.select all checkboxes and assert each is checked
    for (const checkbox of checkboxes) {
        await checkbox.check();
        await expect(checkbox).toBeChecked();
    }

    //4.uncheck last 3 checkboxes and assert each is unchecked
    for (let i = checkboxes.length - 1; i >= checkboxes.length - 3; i--) {
        await checkboxes[i].uncheck();
        await expect(checkboxes[i]).not.toBeChecked();
    }
    //uncheck last 3 checkboxes and assert each is unchecked slice 
    const lastThreeCheckboxes: Locator[] = checkboxes.slice(4, 7);//checkboxes.slice(4); or checkboxes.slice(-3) also we can do

    for (const checkbox of lastThreeCheckboxes) {
        await checkbox.uncheck();
        await expect(checkbox).not.toBeChecked();
    }

    //5. toggle checkboxes: if checked then uncheck, if unchecked then check and assert each checkbox's state
    for (const checkbox of checkboxes) {
        if (await checkbox.isChecked()) {
            // Only if checked
            await checkbox.uncheck();
            await expect(checkbox).not.toBeChecked();
        } else {
            // Only if not checked
            await checkbox.check();
            await expect(checkbox).toBeChecked();
        }
    }

    // 6. Select checkboxes by index (1, 3, 6) and assert
    const indexes: number[] = [1, 3, 6];
    for (const i of indexes) {
        await checkboxes[i].check();
        await expect(checkboxes[i]).toBeChecked();
    }


    // 7. Select the checkbox based on the label
    const weekname: string = "Friday";
    for (const label of days) {
        if (label.toLowerCase() === weekname.toLowerCase()) {
            const checkbox = page.getByLabel(label);
            await checkbox.check();
            await expect(checkbox).toBeChecked();
        }
    }

    await page.waitForTimeout(3000);
});
