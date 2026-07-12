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


test('Bookmark icon visibility on both Featured and Latest news cards', { tag: ["@functional","@regression","@P1","@case-8c89b3cd-e781-429e-ab18-637cfb884db8"] }, async ({ page, homePage, savedNewsPage }) => {
  await test.step('Open — Navigate to Commons QA', async () => {
    await page.goto(env.baseURL);
  });

  await test.step('Assert visible — Featured section visible', async () => {
    await homePage.expectFeaturedVisible();
  });

  await test.step('Assert visible — Bookmark icon on a Featured news card', async () => {
    await homePage.expectBookmark2Visible();
  });

  await test.step('Scroll — Latest News section', async () => {
    await savedNewsPage.scrollLatestNewsIntoView();
  });

  await test.step('Assert visible — Bookmark icon on a Latest news card', async () => {
    await homePage.expectBookmark2Visible();
  });
});
