import { test, expect } from '@support/fixtures';
import env from '@support/env';


test('Save a Featured News article and view it in My Saved News', { tag: ["@smoke","@regression","@P0","@case-c89339cf-2390-48c9-aaa9-64a7669f0a95"] }, async ({ page, ukgcommonsPage, savedNewsPage }) => {
  await test.step('Open — Navigate to Commons QA', async () => {
    await page.goto(env.baseURL);
  });

  await test.step('Assert visible — Featured section is visible', async () => {
    await ukgcommonsPage.expectFeaturedVisible();
  });

  await test.step('Assert visible — Bookmark (Save) icon is visible on a Featured article card', async () => {
    await ukgcommonsPage.expectSaveNewsVisible();
  });

  await test.step('Click — Tap Save on a Featured article card', async () => {
    await ukgcommonsPage.clickSaveNews();
  });

  await test.step('Assert visible — Wait for success toast', async () => {
    await ukgcommonsPage.expectToastVisible();
  });

  await test.step('Assert contains — Toast confirms article saved', async () => {
    await ukgcommonsPage.expectToastContainsText('News saved successfully!');
  });

  await test.step('Assert contains — Toast includes link to saved news under Profile', async () => {
    await ukgcommonsPage.expectToastContainsText('View saved news under Profile');
  });

  await test.step('Click — Open My Saved News from profile', async () => {
    await ukgcommonsPage.clickMySavedNews();
  });

  await test.step('Assert visible — My Saved News page is visible', async () => {
    await savedNewsPage.expectMySavedNewsVisible();
  });

  await test.step('Assert count greater than — At least one saved news card is listed', async () => {
    await savedNewsPage.expectSavedNewsCardsCountGreaterThan(0);
  });
});
