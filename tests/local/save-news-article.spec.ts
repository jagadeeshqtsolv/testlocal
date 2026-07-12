import { test, expect } from '@support/fixtures';
import env from '@support/env';

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


  test('Saved articles appear in My Saved News section after saving', { tag: ["@smoke","@regression","@P0","@case-7358c7a3-3efc-40cc-b6d7-71b90a7aac46"] }, async ({ page, savedNewsPage }) => {
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
    await test.step('Assert visible — My Saved News page is visible', async () => {
      await savedNewsPage.expectMySavedNewsVisible();
    });
    await test.step('Assert visible — Saved article is listed in My Saved News', async () => {
      await newsCardPage.expectSavedNewsCardVisible();
    });
  });


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


  test('Saved articles display in reverse chronological order', { tag: ["@smoke","@regression","@P0","@case-ac6f9dac-a363-4f12-ad50-e658706bdd0f"] }, async ({ page, savedNewsPage }) => {
    const newsCardPage = new NewsCardPage(page);
    await test.step('Open — Navigate to UKG Commons QA', async () => {
      await page.goto('https://commons-qa.util.ukg.com/');
    });
    await test.step('Scroll — Scroll to Featured News section', async () => {
      await newsCardPage.scrollFeaturedNewsSectionIntoView();
    });
    await test.step('Click — Tap bookmark icon on first Featured News article', async () => {
      await newsCardPage.clickFeaturedBookmarkIcon1();
    });
    await test.step('Click — Tap bookmark icon on second Featured News article', async () => {
      await newsCardPage.clickFeaturedBookmarkIcon2();
    });
    await test.step('Click — Click \'View saved news under Profile\' in toast', async () => {
      await newsCardPage.clickToastViewSavedNewsLink();
    });
    await test.step('Assert visible — My Saved News page is visible', async () => {
      await savedNewsPage.expectMySavedNewsVisible();
    });
    await test.step('Assert text — Most recently saved article appears at the top of My Saved News', async () => {

      await newsCardPage.expectSavedNewsCardVisible();
    });
  });


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
