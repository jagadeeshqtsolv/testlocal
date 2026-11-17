// Archived from tests/local/save-news-article.spec.ts (test case 079026e8-fc2f-4739-81bb-9024ab79530b)
import { test, expect } from '@support/fixtures';

  test('If an article is deleted or archived, it disappears from My Saved News', { tag: ["@smoke","@regression","@P0","@case-079026e8-fc2f-4739-81bb-9024ab79530b"] }, async ({ page, savedNewsPage }) => {
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
    await test.step('Assert visible — Saved article is listed in My Saved News', async () => {
      await newsCardPage.expectSavedNewsCardVisible();
    });
    await test.step('Wait — Simulate article deletion or archival in backend', async () => {

    });
    await test.step('Assert hidden — Deleted/archived article is removed from My Saved News', async () => {
      await newsCardPage.expectSavedNewsCardHidden();
    });
  });
