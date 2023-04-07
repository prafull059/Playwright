import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.com/');
  await page.getByPlaceholder('Search Amazon').click();
  await page.getByPlaceholder('Search Amazon').fill('mobile');
  await page.getByPlaceholder('Search Amazon').press('Enter');
  await page.goto('https://www.amazon.com/s?k=mobile&crid=1BJMFHXX7FEMK&sprefix=mobile%2Caps%2C305&ref=nb_sb_noss_1');


  await page.getByRole('button', { name: ' Upload File' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: ' Upload File' }).setInputFiles('Test Management Notes.pdf');
});
