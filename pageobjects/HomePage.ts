import type { Page } from "@playwright/test";
import {
  checkWhenVisible,
  clearWhenVisible,
  clickOpensNewPage,
  clickWhenVisible,
  closePage,
  doubleClickWhenVisible,
  expectChecked,
  expectContainsText,
  expectCount,
  expectCountGreaterThan,
  expectDisabled,
  expectEnabled,
  expectFocused,
  expectHidden,
  expectPageTitle,
  expectSelected,
  expectText,
  expectUnchecked,
  expectValue,
  expectVisible,
  fill,
  fillWhenVisible,
  getTextWhenVisible,
  goBack,
  hoverWhenVisible,
  longPressWhenVisible,
  navigateTo,
  scrollIntoView,
  scrollIntoViewWhenVisible,
  selectOptionWhenVisible,
  takeScreenshot,
  typeTextWhenVisible,
  uncheckWhenVisible,
  waitForHidden,
  waitForNewPage,
  waitForVisible,
  waitMs,
  webLocator,
} from "../support/web-actions";

export class HomePage {
  private static readonly L = {
    topSitesTitle: { strategy: 'role' as const, value: 'Top sites', role: 'button', actionKind: 'button' as const },
    myAppsTitle: { strategy: 'css' as const, value: '#basic-button', actionKind: 'button' as const },
    sharePoint: { strategy: 'text' as const, value: 'SharePoint', actionKind: 'generic' as const },
    muiInputBaseInput: { strategy: 'placeholder' as const, value: 'Search news, sites, or events ', actionKind: 'textbox' as const },
    popularSearches: { strategy: 'text' as const, value: 'Popular searches', actionKind: 'generic' as const },
    brandHub: { strategy: 'role' as const, value: 'brand hub', role: 'button', actionKind: 'button' as const },
    holidayCalendar: { strategy: 'role' as const, value: 'holiday calendar', role: 'button', actionKind: 'button' as const },
    celebrateU: { strategy: 'role' as const, value: 'celebrate u', role: 'button', actionKind: 'button' as const },
    newHireCenter: { strategy: 'role' as const, value: 'new hire center', role: 'button', actionKind: 'button' as const },
    featured: { strategy: 'text' as const, value: 'Featured', actionKind: 'generic' as const },
    drakeTiwary: { strategy: 'text' as const, value: 'Drake Tiwary', actionKind: 'generic' as const },
    shareNews: { strategy: 'role' as const, value: 'Share news', role: 'button', actionKind: 'button' as const },
    bookmark2: { strategy: 'css' as const, value: 'div > div:nth-of-type(2) > div > div > button:nth-of-type(2) > img', actionKind: 'generic' as const },
    leftarrow: { strategy: 'css' as const, value: 'div:nth-of-type(5) > div > div:nth-of-type(2) > div > button:nth-of-type(1) > img', actionKind: 'generic' as const },
    rightarrow: { strategy: 'css' as const, value: 'div:nth-of-type(5) > div > div:nth-of-type(2) > div > button:nth-of-type(2) > img', actionKind: 'generic' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async clickTopSitesTitle(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.topSitesTitle));
  }

  async doubleClickTopSitesTitle(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.topSitesTitle));
  }

  async expectTopSitesTitleVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.topSitesTitle), timeoutMs, soft);
  }

  async clickMyAppsTitle(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.myAppsTitle));
  }

  async doubleClickMyAppsTitle(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.myAppsTitle));
  }

  async expectMyAppsTitleVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.myAppsTitle), timeoutMs, soft);
  }

  async clickSharePoint(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.sharePoint));
  }

  async expectSharePointVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.sharePoint), timeoutMs, soft);
  }

  async fillMuiInputBaseInput(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, HomePage.L.muiInputBaseInput), value);
  }

  async clearMuiInputBaseInput(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, HomePage.L.muiInputBaseInput));
  }

  async getMuiInputBaseInputValue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, HomePage.L.muiInputBaseInput));
  }

  async expectMuiInputBaseInputVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.muiInputBaseInput), timeoutMs, soft);
  }

  async clickPopularSearches(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.popularSearches));
  }

  async expectPopularSearchesVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.popularSearches), timeoutMs, soft);
  }

  async clickBrandHub(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.brandHub));
  }

  async doubleClickBrandHub(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.brandHub));
  }

  async expectBrandHubVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.brandHub), timeoutMs, soft);
  }

  async clickHolidayCalendar(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.holidayCalendar));
  }

  async doubleClickHolidayCalendar(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.holidayCalendar));
  }

  async expectHolidayCalendarVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.holidayCalendar), timeoutMs, soft);
  }

  async clickCelebrateU(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.celebrateU));
  }

  async doubleClickCelebrateU(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.celebrateU));
  }

  async expectCelebrateUVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.celebrateU), timeoutMs, soft);
  }

  async clickNewHireCenter(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.newHireCenter));
  }

  async doubleClickNewHireCenter(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.newHireCenter));
  }

  async expectNewHireCenterVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.newHireCenter), timeoutMs, soft);
  }

  async clickFeatured(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.featured));
  }

  async expectFeaturedVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.featured), timeoutMs, soft);
  }

  async clickDrakeTiwary(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.drakeTiwary));
  }

  async expectDrakeTiwaryVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.drakeTiwary), timeoutMs, soft);
  }

  async clickShareNews(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.shareNews));
  }

  async doubleClickShareNews(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.shareNews));
  }

  async expectShareNewsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.shareNews), timeoutMs, soft);
  }

  async clickBookmark2(): Promise<void> {
    // Try to click "Save news" button if visible, otherwise "Unsave news"
    const saveNewsBtn = this.page.getByRole('button', { name: 'Save news' }).first();
    const unsaveNewsBtn = this.page.getByRole('button', { name: 'Unsave news' }).first();
    if (await saveNewsBtn.isVisible()) {
      await saveNewsBtn.click();
    } else if (await unsaveNewsBtn.isVisible()) {
      await unsaveNewsBtn.click();
    }
  }

  async expectBookmark2Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.bookmark2), timeoutMs, soft);
  }

  async clickLeftarrow(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.leftarrow));
  }

  async expectLeftarrowVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.leftarrow), timeoutMs, soft);
  }

  async clickRightarrow(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.rightarrow));
  }

  async expectRightarrowVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.rightarrow), timeoutMs, soft);
  }


  async longPressTopSitesTitle(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.topSitesTitle));
  }

  async expectTopSitesTitleHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.topSitesTitle), timeoutMs);
  }

  async expectTopSitesTitleText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.topSitesTitle), expected, timeoutMs);
  }

  async expectTopSitesTitleContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.topSitesTitle), substring, timeoutMs);
  }

  async expectTopSitesTitleValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.topSitesTitle), value, timeoutMs);
  }

  async expectTopSitesTitleEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.topSitesTitle), timeoutMs);
  }

  async expectTopSitesTitleDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.topSitesTitle), timeoutMs);
  }

  async expectTopSitesTitleChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.topSitesTitle), timeoutMs);
  }

  async expectTopSitesTitleUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.topSitesTitle), timeoutMs);
  }

  async expectTopSitesTitleFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.topSitesTitle), timeoutMs);
  }

  async expectTopSitesTitleCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.topSitesTitle), count, timeoutMs);
  }

  async scrollTopSitesTitleIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.topSitesTitle));
  }

  async longPressMyAppsTitle(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.myAppsTitle));
  }

  async expectMyAppsTitleHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.myAppsTitle), timeoutMs);
  }

  async expectMyAppsTitleText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.myAppsTitle), expected, timeoutMs);
  }

  async expectMyAppsTitleContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.myAppsTitle), substring, timeoutMs);
  }

  async expectMyAppsTitleValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.myAppsTitle), value, timeoutMs);
  }

  async expectMyAppsTitleEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.myAppsTitle), timeoutMs);
  }

  async expectMyAppsTitleDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.myAppsTitle), timeoutMs);
  }

  async expectMyAppsTitleChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.myAppsTitle), timeoutMs);
  }

  async expectMyAppsTitleUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.myAppsTitle), timeoutMs);
  }

  async expectMyAppsTitleFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.myAppsTitle), timeoutMs);
  }

  async expectMyAppsTitleCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.myAppsTitle), count, timeoutMs);
  }

  async scrollMyAppsTitleIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.myAppsTitle));
  }

  async doubleClickSharePoint(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.sharePoint));
  }

  async longPressSharePoint(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.sharePoint));
  }

  async expectSharePointHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.sharePoint), timeoutMs);
  }

  async expectSharePointText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.sharePoint), expected, timeoutMs);
  }

  async expectSharePointContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.sharePoint), substring, timeoutMs);
  }

  async expectSharePointValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.sharePoint), value, timeoutMs);
  }

  async expectSharePointEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.sharePoint), timeoutMs);
  }

  async expectSharePointDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.sharePoint), timeoutMs);
  }

  async expectSharePointChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.sharePoint), timeoutMs);
  }

  async expectSharePointUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.sharePoint), timeoutMs);
  }

  async expectSharePointFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.sharePoint), timeoutMs);
  }

  async expectSharePointCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.sharePoint), count, timeoutMs);
  }

  async scrollSharePointIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.sharePoint));
  }

  async typeTextMuiInputBaseInput(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, HomePage.L.muiInputBaseInput), value);
  }

  async expectMuiInputBaseInputHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.muiInputBaseInput), timeoutMs);
  }

  async expectMuiInputBaseInputText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.muiInputBaseInput), expected, timeoutMs);
  }

  async expectMuiInputBaseInputContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.muiInputBaseInput), substring, timeoutMs);
  }

  async expectMuiInputBaseInputValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.muiInputBaseInput), value, timeoutMs);
  }

  async expectMuiInputBaseInputEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.muiInputBaseInput), timeoutMs);
  }

  async expectMuiInputBaseInputDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.muiInputBaseInput), timeoutMs);
  }

  async expectMuiInputBaseInputChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.muiInputBaseInput), timeoutMs);
  }

  async expectMuiInputBaseInputUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.muiInputBaseInput), timeoutMs);
  }

  async expectMuiInputBaseInputFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.muiInputBaseInput), timeoutMs);
  }

  async expectMuiInputBaseInputCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.muiInputBaseInput), count, timeoutMs);
  }

  async scrollMuiInputBaseInputIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.muiInputBaseInput));
  }

  async doubleClickPopularSearches(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.popularSearches));
  }

  async longPressPopularSearches(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.popularSearches));
  }

  async expectPopularSearchesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.popularSearches), timeoutMs);
  }

  async expectPopularSearchesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.popularSearches), expected, timeoutMs);
  }

  async expectPopularSearchesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.popularSearches), substring, timeoutMs);
  }

  async expectPopularSearchesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.popularSearches), value, timeoutMs);
  }

  async expectPopularSearchesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.popularSearches), timeoutMs);
  }

  async expectPopularSearchesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.popularSearches), timeoutMs);
  }

  async expectPopularSearchesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.popularSearches), timeoutMs);
  }

  async expectPopularSearchesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.popularSearches), timeoutMs);
  }

  async expectPopularSearchesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.popularSearches), timeoutMs);
  }

  async expectPopularSearchesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.popularSearches), count, timeoutMs);
  }

  async scrollPopularSearchesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.popularSearches));
  }

  async longPressBrandHub(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.brandHub));
  }

  async expectBrandHubHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.brandHub), timeoutMs);
  }

  async expectBrandHubText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.brandHub), expected, timeoutMs);
  }

  async expectBrandHubContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.brandHub), substring, timeoutMs);
  }

  async expectBrandHubValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.brandHub), value, timeoutMs);
  }

  async expectBrandHubEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.brandHub), timeoutMs);
  }

  async expectBrandHubDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.brandHub), timeoutMs);
  }

  async expectBrandHubChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.brandHub), timeoutMs);
  }

  async expectBrandHubUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.brandHub), timeoutMs);
  }

  async expectBrandHubFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.brandHub), timeoutMs);
  }

  async expectBrandHubCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.brandHub), count, timeoutMs);
  }

  async scrollBrandHubIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.brandHub));
  }

  async longPressHolidayCalendar(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.holidayCalendar));
  }

  async expectHolidayCalendarHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.holidayCalendar), timeoutMs);
  }

  async expectHolidayCalendarText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.holidayCalendar), expected, timeoutMs);
  }

  async expectHolidayCalendarContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.holidayCalendar), substring, timeoutMs);
  }

  async expectHolidayCalendarValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.holidayCalendar), value, timeoutMs);
  }

  async expectHolidayCalendarEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.holidayCalendar), timeoutMs);
  }

  async expectHolidayCalendarDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.holidayCalendar), timeoutMs);
  }

  async expectHolidayCalendarChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.holidayCalendar), timeoutMs);
  }

  async expectHolidayCalendarUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.holidayCalendar), timeoutMs);
  }

  async expectHolidayCalendarFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.holidayCalendar), timeoutMs);
  }

  async expectHolidayCalendarCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.holidayCalendar), count, timeoutMs);
  }

  async scrollHolidayCalendarIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.holidayCalendar));
  }

  async longPressCelebrateU(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.celebrateU));
  }

  async expectCelebrateUHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.celebrateU), timeoutMs);
  }

  async expectCelebrateUText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.celebrateU), expected, timeoutMs);
  }

  async expectCelebrateUContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.celebrateU), substring, timeoutMs);
  }

  async expectCelebrateUValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.celebrateU), value, timeoutMs);
  }

  async expectCelebrateUEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.celebrateU), timeoutMs);
  }

  async expectCelebrateUDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.celebrateU), timeoutMs);
  }

  async expectCelebrateUChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.celebrateU), timeoutMs);
  }

  async expectCelebrateUUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.celebrateU), timeoutMs);
  }

  async expectCelebrateUFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.celebrateU), timeoutMs);
  }

  async expectCelebrateUCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.celebrateU), count, timeoutMs);
  }

  async scrollCelebrateUIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.celebrateU));
  }

  async longPressNewHireCenter(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.newHireCenter));
  }

  async expectNewHireCenterHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.newHireCenter), timeoutMs);
  }

  async expectNewHireCenterText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.newHireCenter), expected, timeoutMs);
  }

  async expectNewHireCenterContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.newHireCenter), substring, timeoutMs);
  }

  async expectNewHireCenterValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.newHireCenter), value, timeoutMs);
  }

  async expectNewHireCenterEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.newHireCenter), timeoutMs);
  }

  async expectNewHireCenterDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.newHireCenter), timeoutMs);
  }

  async expectNewHireCenterChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.newHireCenter), timeoutMs);
  }

  async expectNewHireCenterUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.newHireCenter), timeoutMs);
  }

  async expectNewHireCenterFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.newHireCenter), timeoutMs);
  }

  async expectNewHireCenterCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.newHireCenter), count, timeoutMs);
  }

  async scrollNewHireCenterIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.newHireCenter));
  }

  async doubleClickFeatured(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.featured));
  }

  async longPressFeatured(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.featured));
  }

  async expectFeaturedHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.featured), timeoutMs);
  }

  async expectFeaturedText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.featured), expected, timeoutMs);
  }

  async expectFeaturedContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.featured), substring, timeoutMs);
  }

  async expectFeaturedValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.featured), value, timeoutMs);
  }

  async expectFeaturedEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.featured), timeoutMs);
  }

  async expectFeaturedDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.featured), timeoutMs);
  }

  async expectFeaturedChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.featured), timeoutMs);
  }

  async expectFeaturedUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.featured), timeoutMs);
  }

  async expectFeaturedFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.featured), timeoutMs);
  }

  async expectFeaturedCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.featured), count, timeoutMs);
  }

  async scrollFeaturedIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.featured));
  }

  async doubleClickDrakeTiwary(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.drakeTiwary));
  }

  async longPressDrakeTiwary(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.drakeTiwary));
  }

  async expectDrakeTiwaryHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.drakeTiwary), timeoutMs);
  }

  async expectDrakeTiwaryText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.drakeTiwary), expected, timeoutMs);
  }

  async expectDrakeTiwaryContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.drakeTiwary), substring, timeoutMs);
  }

  async expectDrakeTiwaryValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.drakeTiwary), value, timeoutMs);
  }

  async expectDrakeTiwaryEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.drakeTiwary), timeoutMs);
  }

  async expectDrakeTiwaryDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.drakeTiwary), timeoutMs);
  }

  async expectDrakeTiwaryChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.drakeTiwary), timeoutMs);
  }

  async expectDrakeTiwaryUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.drakeTiwary), timeoutMs);
  }

  async expectDrakeTiwaryFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.drakeTiwary), timeoutMs);
  }

  async expectDrakeTiwaryCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.drakeTiwary), count, timeoutMs);
  }

  async scrollDrakeTiwaryIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.drakeTiwary));
  }

  async longPressShareNews(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.shareNews));
  }

  async expectShareNewsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.shareNews), timeoutMs);
  }

  async expectShareNewsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.shareNews), expected, timeoutMs);
  }

  async expectShareNewsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.shareNews), substring, timeoutMs);
  }

  async expectShareNewsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.shareNews), value, timeoutMs);
  }

  async expectShareNewsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.shareNews), timeoutMs);
  }

  async expectShareNewsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.shareNews), timeoutMs);
  }

  async expectShareNewsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.shareNews), timeoutMs);
  }

  async expectShareNewsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.shareNews), timeoutMs);
  }

  async expectShareNewsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.shareNews), timeoutMs);
  }

  async expectShareNewsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.shareNews), count, timeoutMs);
  }

  async scrollShareNewsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.shareNews));
  }

  async doubleClickBookmark2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.bookmark2));
  }

  async longPressBookmark2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.bookmark2));
  }

  async expectBookmark2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.bookmark2), timeoutMs);
  }

  async expectBookmark2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.bookmark2), expected, timeoutMs);
  }

  async expectBookmark2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.bookmark2), substring, timeoutMs);
  }

  async expectBookmark2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.bookmark2), value, timeoutMs);
  }

  async expectBookmark2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.bookmark2), timeoutMs);
  }

  async expectBookmark2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.bookmark2), timeoutMs);
  }

  async expectBookmark2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.bookmark2), timeoutMs);
  }

  async expectBookmark2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.bookmark2), timeoutMs);
  }

  async expectBookmark2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.bookmark2), timeoutMs);
  }

  async expectBookmark2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.bookmark2), count, timeoutMs);
  }

  async scrollBookmark2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.bookmark2));
  }

  async doubleClickLeftarrow(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.leftarrow));
  }

  async longPressLeftarrow(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.leftarrow));
  }

  async expectLeftarrowHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.leftarrow), timeoutMs);
  }

  async expectLeftarrowText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.leftarrow), expected, timeoutMs);
  }

  async expectLeftarrowContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.leftarrow), substring, timeoutMs);
  }

  async expectLeftarrowValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.leftarrow), value, timeoutMs);
  }

  async expectLeftarrowEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.leftarrow), timeoutMs);
  }

  async expectLeftarrowDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.leftarrow), timeoutMs);
  }

  async expectLeftarrowChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.leftarrow), timeoutMs);
  }

  async expectLeftarrowUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.leftarrow), timeoutMs);
  }

  async expectLeftarrowFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.leftarrow), timeoutMs);
  }

  async expectLeftarrowCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.leftarrow), count, timeoutMs);
  }

  async scrollLeftarrowIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.leftarrow));
  }

  async doubleClickRightarrow(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.rightarrow));
  }

  async longPressRightarrow(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.rightarrow));
  }

  async expectRightarrowHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.rightarrow), timeoutMs);
  }

  async expectRightarrowText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.rightarrow), expected, timeoutMs);
  }

  async expectRightarrowContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.rightarrow), substring, timeoutMs);
  }

  async expectRightarrowValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.rightarrow), value, timeoutMs);
  }

  async expectRightarrowEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.rightarrow), timeoutMs);
  }

  async expectRightarrowDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.rightarrow), timeoutMs);
  }

  async expectRightarrowChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.rightarrow), timeoutMs);
  }

  async expectRightarrowUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.rightarrow), timeoutMs);
  }

  async expectRightarrowFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.rightarrow), timeoutMs);
  }

  async expectRightarrowCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.rightarrow), count, timeoutMs);
  }

  async scrollRightarrowIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.rightarrow));
  }

}
