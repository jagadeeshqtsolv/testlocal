// Archived from tests/local/save-news-article.spec.ts (test case 7358c7a3-3efc-40cc-b6d7-71b90a7aac46)
import { test, expect } from '@support/fixtures';

  test('Saved articles appear in My Saved News section after saving', { tag: ["@smoke","@regression","@P0","@case-7358c7a3-3efc-40cc-b6d7-71b90a7aac46"] }, async ({ page, savedNewsPage }) => {
    const newsCardPage = new NewsCardPage(page);
    await test.step('Open — Navigate to UKG Commons QA', async () => {
      await page.goto('https://commons-qa.util.ukg.com/');
    });
    await test.step('Scroll — Scroll to Featured News section', async () => {
      await newsCardPage.scrollFeaturedNewsSectionIntoView();
    });
    await test.step('Click — Tap bookmark icon on a Featured News article', async () => {
      await newsCardPage.clickFeaturedBookmarkIcon();
    });
    await test.step('Click — Click \'View saved news under Profile\' in toast', async () => {
      await newsCardPage.clickToastViewSavedNewsLink();
    });
    await test.step('Assert visible — My Saved News page is visible', async () => {
      await savedNewsPage.expectMySavedNewsVisible();
    });
    await test.step('Assert visible — Saved article is listed in My Saved News', async () => {
      await newsCardPage.expectSavedNewsCardVisible();
    });
  });
