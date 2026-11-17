// Archived from tests/local/save-news-article.spec.ts (test case 3272430c-9bdc-4016-a6ba-7d17f34a0050)
import { test, expect } from '@support/fixtures';

  test('Tapping a saved article in My Saved News opens the full article', { tag: ["@smoke","@regression","@P0","@case-3272430c-9bdc-4016-a6ba-7d17f34a0050"] }, async ({ page, savedNewsPage }) => {
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
    await test.step('Click — Tap saved article in My Saved News', async () => {
      await newsCardPage.clickSavedNewsCard();
    });
    await test.step('Assert visible — Full article page is displayed', async () => {
      await newsCardPage.expectNewsArticleContentVisible();
    });
  });
