import { test as base, expect } from "@playwright/test";
import { NewsCardPage } from "../pageobjects/NewsCardPage";
import { SavedNewsPage } from "../pageobjects/SavedNewsPage";
import { UkgcommonsPage } from "../pageobjects/UkgcommonsPage";

type AppFixtures = {
  newsCardPage: NewsCardPage;
  savedNewsPage: SavedNewsPage;
  ukgcommonsPage: UkgcommonsPage;
};

export const test = base.extend<AppFixtures>({
  newsCardPage: async ({ page }, use) => {
    await use(new NewsCardPage(page));
  },
  savedNewsPage: async ({ page }, use) => {
    await use(new SavedNewsPage(page));
  },
  ukgcommonsPage: async ({ page }, use) => {
    await use(new UkgcommonsPage(page));
  },
});

export { expect };
