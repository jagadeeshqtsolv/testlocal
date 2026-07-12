// Archived from tests/local/save-news-article.spec.ts (test case 362f95b8-9baf-474c-91db-e665c093bd7f)
import { test, expect } from '@support/fixtures';

  test('Save a Latest News article and verify toast message', { tag: ["@smoke","@regression","@P0","@case-362f95b8-9baf-474c-91db-e665c093bd7f"] }, async ({ page }) => {
    const newsCardPage = new NewsCardPage(page);
    await test.step('Open — Navigate to UKG Commons QA', async () => {
      await page.goto('https://commons-qa.util.ukg.com/');
    });
    await test.step('Scroll — Scroll to Latest News section', async () => {
      await newsCardPage.scrollLatestNewsSectionIntoView();
    });
    await test.step('Click — Tap bookmark icon on a Latest News article', async () => {
      await newsCardPage.clickLatestBookmarkIcon();
    });
    await test.step('Assert visible — Toast message appears', async () => {
      await newsCardPage.expectToastAlertVisible();
      await newsCardPage.expectToastAlertText('News saved successfully!, View saved news under Profile');
    });
  });
