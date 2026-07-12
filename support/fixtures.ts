import { test as base, expect } from "@playwright/test";
import { HomePage } from "../pageobjects/HomePage";
import { ProfilePage } from "../pageobjects/ProfilePage";
import { SavedNewsPage } from "../pageobjects/SavedNewsPage";

type AppFixtures = {
  homePage: HomePage;
  profilePage: ProfilePage;
  savedNewsPage: SavedNewsPage;
};

export const test = base.extend<AppFixtures>({
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
