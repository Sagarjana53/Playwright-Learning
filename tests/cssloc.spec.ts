import { test, expect, Locator } from '@playwright/test';

test("SauceDemo XPath practice", async ({ page }) => {
    await page.goto("https://demowebshop.tricentis.com/");
    //tag#id-->
    // await page.locator("input#small-searchterms").fill("T-shirt");
    // await expect(page.locator("input#small-searchterms")).toBeVisible();
    // await page.waitForTimeout(2000);
    // tag.class
    // await page.locator("input.search-box-text").fill("T-Shirts");
    // await page.locator(".search-box-text").fill("T-Shirts");

    // tag[attribute=value]
    // await page.locator('input[name=q]').fill("T-Shirts");
    // await page.locator('[name=q]').fill("T-Shirts");
    // tag.class[attribute=value]
    // await page.locator("input.search-box-text[value='Search store']").fill("T-Shirts");
    await page.locator(".search-box-text[value='Search store']").fill("T-Shirts");

})