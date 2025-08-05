import { test, expect, Locator, Page } from '@playwright/test';
import { MainPage } from '../models/MainPage';

let mainPage: MainPage;

test.describe('main page tests', () => {
  test.beforeEach(async ({ page }) => {
    mainPage = new MainPage(page);
    await mainPage.openMainPage();
  });

  test('Checking the visibility of header navigation elements', async ({ page }) => {
    await mainPage.checkElementsVisibility();
  });

  test('Checking the name of header navigation elements', async ({ page }) => {
    await mainPage.checkElementsText();
  });

  test('Checking the href of header navigation elements', async ({ page }) => {
    await mainPage.checkElementsHrefAttribute();
  });
  test(`Checking style activity with light mode`, async ({ page }) => {
    await mainPage.setLightMode();
    await mainPage.checkLayoutWithLightMode;
  });
  test(`Checking style activity with dark mode`, async ({ page }) => {
    await mainPage.setDarkMode();
    await mainPage.checkLayoutWithDarkMode;
  });
});
