// Archived from tests/local/save-news-article.spec.ts (test case 8cf93969-2249-4aed-8a4f-e7b174134890)
import { test, expect } from '@support/fixtures';

  test('Saved article is visually indicated as saved (filled icon) after saving', { tag: ["@smoke","@regression","@P0","@case-8cf93969-2249-4aed-8a4f-e7b174134890"] }, async ({ page }) => {
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
    await test.step('Assert visible — Saved (filled) bookmark icon is visible', async () => {
      await newsCardPage.expectSavedBookmarkIconFilledVisible();
    });
  });
