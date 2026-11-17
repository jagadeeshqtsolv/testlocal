// Archived from tests/local/save-news-article.spec.ts (test case fe274a16-b403-4c16-a27c-ccd8498e0f49)
import { test, expect } from '@support/fixtures';

  test('Bookmark icon is visible on each Latest News article card', { tag: ["@smoke","@regression","@P0","@case-fe274a16-b403-4c16-a27c-ccd8498e0f49"] }, async ({ page }) => {
    const newsCardPage = new NewsCardPage(page);
    await test.step('Open — Navigate to UKG Commons QA', async () => {
      await page.goto('https://commons-qa.util.ukg.com/');
    });
    await test.step('Scroll — Scroll to Latest News section', async () => {
      await newsCardPage.scrollLatestNewsSectionIntoView();
    });
    await test.step('Assert visible — Bookmark icon is visible on a Latest News article card', async () => {
      await newsCardPage.expectLatestBookmarkIconVisible();
    });
  });
