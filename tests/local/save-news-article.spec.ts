import { test, expect } from '@support/fixtures';
import env from '@support/env';

test('Save article from Featured and open My Saved News via toast link', { tag: ["@smoke","@e2e","@regression","@demo","@P0","@case-12173bdd-fb8e-4f41-a0f1-a655d30641c3","@req-eece6342-3ec9-42c9-a0b6-858405104039"] }, async ({ page, homePage, commonPage, savedNewsPage }) => {
  await test.step('Navigate to URL — Navigate to Commons QA', async () => {
    await page.goto('https://commons-qa.util.ukg.com/');
  });
  await test.step('Scroll into view — Featured News section', async () => {
    await homePage.scrollFeaturedIntoView();
  });
  await test.step('Assert visible — Any bookmark icon on a Featured news card', async () => {
    await homePage.expectBookmark2Visible();
  });
  await test.step('Click — Tap bookmark to save the article', async () => {
    await homePage.clickBookmark2();
  });
  await test.step('Click — Toast action: View saved news under Profile — (text=View saved news under Profile)', async () => {
    await commonPage.clickToastActionViewSavedNewsUnderProfile();
  });
  await test.step('Assert visible — My Saved News page heading or indicator', async () => {
    await savedNewsPage.expectMySavedNewsVisible();
  });
});
