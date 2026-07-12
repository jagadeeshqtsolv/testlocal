// Archived from tests/local/save-news-article.spec.ts (test case ac6f9dac-a363-4f12-ad50-e658706bdd0f)
import { test, expect } from '@support/fixtures';

  test('Saved articles display in reverse chronological order', { tag: ["@smoke","@regression","@P0","@case-ac6f9dac-a363-4f12-ad50-e658706bdd0f"] }, async ({ page, savedNewsPage }) => {
    const newsCardPage = new NewsCardPage(page);
    await test.step('Open — Navigate to UKG Commons QA', async () => {
      await page.goto('https://commons-qa.util.ukg.com/');
    });
    await test.step('Scroll — Scroll to Featured News section', async () => {
      await newsCardPage.scrollFeaturedNewsSectionIntoView();
    });
    await test.step('Click — Tap bookmark icon on first Featured News article', async () => {
      await newsCardPage.clickFeaturedBookmarkIcon1();
    });
    await test.step('Click — Tap bookmark icon on second Featured News article', async () => {
      await newsCardPage.clickFeaturedBookmarkIcon2();
    });
    await test.step('Click — Click \'View saved news under Profile\' in toast', async () => {
      await newsCardPage.clickToastViewSavedNewsLink();
    });
    await test.step('Assert visible — My Saved News page is visible', async () => {
      await savedNewsPage.expectMySavedNewsVisible();
    });
    await test.step('Assert text — Most recently saved article appears at the top of My Saved News', async () => {

      await newsCardPage.expectSavedNewsCardVisible();
    });
  });
