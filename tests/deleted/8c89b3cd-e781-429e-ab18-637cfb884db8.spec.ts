// Archived from tests/local/save-news-article.spec.ts (test case 8c89b3cd-e781-429e-ab18-637cfb884db8)
import { test, expect } from '@support/fixtures';

test('Bookmark icon visibility on both Featured and Latest news cards', { tag: ["@functional","@regression","@P1","@case-8c89b3cd-e781-429e-ab18-637cfb884db8"] }, async ({ page, homePage, savedNewsPage }) => {
  await test.step('Open — Navigate to Commons QA', async () => {
    await page.goto(env.baseURL);
  });

  await test.step('Assert visible — Featured section visible', async () => {
    await homePage.expectFeaturedVisible();
  });

  await test.step('Assert visible — Bookmark icon on a Featured news card', async () => {
    await homePage.expectBookmark2Visible();
  });

  await test.step('Scroll — Latest News section', async () => {
    await savedNewsPage.scrollLatestNewsIntoView();
  });

  await test.step('Assert visible — Bookmark icon on a Latest news card', async () => {
    await homePage.expectBookmark2Visible();
  });
});
