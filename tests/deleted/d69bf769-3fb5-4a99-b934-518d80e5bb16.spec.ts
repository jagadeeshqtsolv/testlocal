// Archived from tests/local/save-news-article.spec.ts (test case d69bf769-3fb5-4a99-b934-518d80e5bb16)
import { test, expect } from '@support/fixtures';

  test('Saved articles are private to the user', { tag: ["@smoke","@regression","@P0","@case-d69bf769-3fb5-4a99-b934-518d80e5bb16"] }, async ({ page, savedNewsPage }) => {
    const newsCardPage = new NewsCardPage(page);
    await test.step('Open — Navigate to UKG Commons QA as User A', async () => {
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
    await test.step('Assert visible — Saved article is listed in My Saved News for User A', async () => {
      await newsCardPage.expectSavedNewsCardVisible();
    });
    await test.step('Open — Log in as User B and navigate to My Saved News', async () => {
      await page.goto('https://commons-qa.util.ukg.com/');
    });
    await test.step('Click — Open My Saved News from profile', async () => {
      await savedNewsPage.clickMySavedNews();
    });
    await test.step('Assert hidden — Saved article from User A is not visible in User B\'s My Saved News', async () => {
      await newsCardPage.expectSavedNewsCardHidden();
    });
  });
