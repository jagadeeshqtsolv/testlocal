import { test as base, expect } from "@playwright/test";
import { CommonPage } from "../pageobjects/CommonPage";
import { HomePage } from "../pageobjects/HomePage";
import { ProfilePage } from "../pageobjects/ProfilePage";
import { SavedNewsPage } from "../pageobjects/SavedNewsPage";

type AppFixtures = {
  commonPage: CommonPage;
  homePage: HomePage;
  profilePage: ProfilePage;
  savedNewsPage: SavedNewsPage;
};

export const test = base.extend<AppFixtures>({
  commonPage: async ({ page }, use) => {
    await use(new CommonPage(page));
  },
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  profilePage: async ({ page }, use) => {
    await use(new ProfilePage(page));
  },
  savedNewsPage: async ({ page }, use) => {
    await use(new SavedNewsPage(page));
  },
});

export { expect };
