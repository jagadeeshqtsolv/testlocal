// Archived from tests/local/save-news-article.spec.ts (test case b5454ad6-364d-4a85-9033-2042301071b0)
import { test, expect } from '@support/fixtures';

  test('Bookmark icon is visible on each Featured News article card', { tag: ["@smoke","@regression","@P0","@case-b5454ad6-364d-4a85-9033-2042301071b0"] }, async ({ page }) => {
    const newsCardPage = new NewsCardPage(page);
    await test.step('Open — Navigate to UKG Commons QA', async () => {
      await page.goto('https://commons-qa.util.ukg.com/');
    });
    await test.step('Scroll — Scroll to Featured News section', async () => {
      await newsCardPage.scrollFeaturedNewsSectionIntoView();
    });
    await test.step('Assert visible — Bookmark icon is visible on a Featured News article card', async () => {
      await newsCardPage.expectFeaturedBookmarkIconVisible();
    });
  });
