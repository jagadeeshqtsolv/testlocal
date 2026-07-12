// Archived from tests/local/save-news-article.spec.ts (test case 4f46b434-c1fc-4dda-87e4-ee8aacc8a069)
import { test, expect } from '@support/fixtures';

  test('Unsaving an article removes it from My Saved News immediately', { tag: ["@smoke","@regression","@P0","@case-4f46b434-c1fc-4dda-87e4-ee8aacc8a069"] }, async ({ page, savedNewsPage }) => {
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
    await test.step('Click — Tap unsave icon on the saved article in My Saved News', async () => {
      await newsCardPage.clickSavedNewsCardUnsaveIcon();
    });
    await test.step('Assert hidden — Saved article is removed from My Saved News', async () => {
      await newsCardPage.expectSavedNewsCardHidden();
    });
  });
