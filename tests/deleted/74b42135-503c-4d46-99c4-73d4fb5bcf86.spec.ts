// Archived from tests/local/save-news-article.spec.ts (test case 74b42135-503c-4d46-99c4-73d4fb5bcf86)
import { test, expect } from '@support/fixtures';

  test('Save a Featured News article and verify toast message', { tag: ["@smoke","@regression","@P0","@case-74b42135-503c-4d46-99c4-73d4fb5bcf86"] }, async ({ page }) => {
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
    await test.step('Assert visible — Toast message appears', async () => {
      await newsCardPage.expectToastAlertVisible();
      await newsCardPage.expectToastAlertText('News saved successfully!, View saved news under Profile');
    });
  });
