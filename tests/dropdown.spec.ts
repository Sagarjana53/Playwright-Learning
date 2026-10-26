
import { test, expect, Locator } from "@playwright/test";

test("Single Select Drop down", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    // 1. Select option from the dropdown (4 ways)
    await page.locator("#country").selectOption("India"); // By visible text
    await page.locator("#country").selectOption({ value: "uk" }); // By using value attribute
    await page.locator("#country").selectOption({ label: "India" }); // By using label
    await page.locator("#country").selectOption({ index: 3 }); // By using index


    // 2. Check number of options in the dropdown (count)
    const dropdownOptions: Locator = page.locator('#country > option');
    await expect(dropdownOptions).toHaveCount(10);


    // 3. Check options present in the dropdown
    const optionsText: string[] = (await dropdownOptions.allTextContents()).map(text => text.trim());
    console.log(optionsText);

    // Using for loop
    // const optionsText: string[] = [];
    // const allOptions: string[] = await dropdownOptions.allTextContents();
    // for (let i = 0; i < allOptions.length; i++) {
    //     optionsText.push(allOptions[i].trim());
    // }
    // console.log(optionsText);

    expect(optionsText).toContain('Japan');

    //4.printing all option from dropdown
    for (const opt of optionsText) {
        console.log(opt);
    }


    await page.waitForTimeout(5000);
});


//multi select dropdown------------------------>

test("Multi Select Drop down", async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    // 1. Select options from the dropdown
    await page.locator("#colors").selectOption(['Red', 'Blue', 'Green']); // Using visible text
    await page.locator("#colors").selectOption(['red', 'green', 'white']);  // Using value attribute
    await page.locator("#colors").selectOption([{ label: 'Red' }, { label: 'Green' }, { label: 'Yellow' }]);    // Using label
    await page.locator("#colors").selectOption([{ index: 0 }, { index: 2 }, { index: 4 }]);   // Using index

    // 2. Check number of options in the dropdown (count)
    const dropdownOptions: Locator = page.locator('#colors option');
    await expect(dropdownOptions).toHaveCount(7);

    // 3. Check an option present in the dropdown
    const optionsText: string[] = (await dropdownOptions.allTextContents()).map(text => text.trim());
    console.log(optionsText);
    expect(optionsText).toContain('Green'); // Check if the array contains "Green"

    // 4. Printing options from the dropdown
    for (const option of optionsText) {
        console.log(option);
    }

    await page.waitForTimeout(5000);
});

//sorted or not ----------->
test("Verify dropdown is Sorted", async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    //const dropDownOptions: Locator = page.locator('#animals > option');
    const dropDownOptions: Locator = page.locator('#colors > option');
    // console.log(await dropDownOptions.allTextContents());
    const optionsText: string[] = (await dropDownOptions.allTextContents()).map(text => text.trim());
    //const originalList: string[] = optionsText;
    // const sortedList: string[] = optionsText.sort();
    //kuki array mutable h isle jab sort karte h to main array vi sort ho jata h isle ... jo spred oparetor h woh use karna parta h
    const originalList: string[] = [...optionsText];
    const sortedList: string[] = [...optionsText].sort();// isse peehele wala array apna original form amin reheta h

    console.log("Original list:", originalList);
    console.log("Sorted list:", sortedList);
    expect(originalList).toEqual(sortedList);
    // await page.waitForTimeout(5000);
});

//DUuplicate elements --------->
test.only("Verify dropdown contains duplicates", async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    // const dropDownOptions: Locator = page.locator('#colors option'); // Having duplicates
    const dropDownOptions: Locator = page.locator('#animals option'); // Not having duplicates
    const optionsText: string[] = (await dropDownOptions.allTextContents()).map(text => text.trim());
    const myset = new Set<string>(); // Set - duplicates not allowed
    const duplicates: string[] = []; // Array - duplicates allowed
    for (const text of optionsText) {
        if (myset.has(text)) {
            duplicates.push(text);
        } else {
            myset.add(text);
        }
    }
    console.log("Duplicate options are:===>", duplicates);

    if (duplicates.length > 0) {
        console.log("Duplicate options found.", duplicates);
    } else {
        console.log("No duplicate options found.");
    }

    expect(duplicates.length).toBe(0);

});
