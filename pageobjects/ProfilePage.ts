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

export class ProfilePage {
  private static readonly L = {
    profile: { strategy: 'text' as const, value: 'JM', actionKind: 'generic' as const },
    mySavedNews: { strategy: 'text' as const, value: 'My saved news', actionKind: 'generic' as const },
    customizeHomePageLayout: { strategy: 'text' as const, value: 'Customize home page layout', actionKind: 'generic' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async clickProfile(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.profile));
  }

  async expectProfileVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.profile), timeoutMs, soft);
  }

  async clickMySavedNews(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.mySavedNews));
  }

  async expectMySavedNewsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.mySavedNews), timeoutMs, soft);
  }

  async clickCustomizeHomePageLayout(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProfilePage.L.customizeHomePageLayout));
  }

  async expectCustomizeHomePageLayoutVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, ProfilePage.L.customizeHomePageLayout), timeoutMs, soft);
  }


  async doubleClickProfile(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.profile));
  }

  async longPressProfile(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.profile));
  }

  async expectProfileHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.profile), timeoutMs);
  }

  async expectProfileText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.profile), expected, timeoutMs);
  }

  async expectProfileContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.profile), substring, timeoutMs);
  }

  async expectProfileValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.profile), value, timeoutMs);
  }

  async expectProfileEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.profile), timeoutMs);
  }

  async expectProfileDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.profile), timeoutMs);
  }

  async expectProfileChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.profile), timeoutMs);
  }

  async expectProfileUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.profile), timeoutMs);
  }

  async expectProfileFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.profile), timeoutMs);
  }

  async expectProfileCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.profile), count, timeoutMs);
  }

  async scrollProfileIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.profile));
  }

  async doubleClickMySavedNews(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.mySavedNews));
  }

  async longPressMySavedNews(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.mySavedNews));
  }

  async expectMySavedNewsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.mySavedNews), timeoutMs);
  }

  async expectMySavedNewsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.mySavedNews), expected, timeoutMs);
  }

  async expectMySavedNewsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.mySavedNews), substring, timeoutMs);
  }

  async expectMySavedNewsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.mySavedNews), value, timeoutMs);
  }

  async expectMySavedNewsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.mySavedNews), timeoutMs);
  }

  async expectMySavedNewsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.mySavedNews), timeoutMs);
  }

  async expectMySavedNewsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.mySavedNews), timeoutMs);
  }

  async expectMySavedNewsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.mySavedNews), timeoutMs);
  }

  async expectMySavedNewsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.mySavedNews), timeoutMs);
  }

  async expectMySavedNewsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.mySavedNews), count, timeoutMs);
  }

  async scrollMySavedNewsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.mySavedNews));
  }

  async doubleClickCustomizeHomePageLayout(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProfilePage.L.customizeHomePageLayout));
  }

  async longPressCustomizeHomePageLayout(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProfilePage.L.customizeHomePageLayout));
  }

  async expectCustomizeHomePageLayoutHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProfilePage.L.customizeHomePageLayout), timeoutMs);
  }

  async expectCustomizeHomePageLayoutText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProfilePage.L.customizeHomePageLayout), expected, timeoutMs);
  }

  async expectCustomizeHomePageLayoutContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProfilePage.L.customizeHomePageLayout), substring, timeoutMs);
  }

  async expectCustomizeHomePageLayoutValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProfilePage.L.customizeHomePageLayout), value, timeoutMs);
  }

  async expectCustomizeHomePageLayoutEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProfilePage.L.customizeHomePageLayout), timeoutMs);
  }

  async expectCustomizeHomePageLayoutDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProfilePage.L.customizeHomePageLayout), timeoutMs);
  }

  async expectCustomizeHomePageLayoutChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProfilePage.L.customizeHomePageLayout), timeoutMs);
  }

  async expectCustomizeHomePageLayoutUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProfilePage.L.customizeHomePageLayout), timeoutMs);
  }

  async expectCustomizeHomePageLayoutFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProfilePage.L.customizeHomePageLayout), timeoutMs);
  }

  async expectCustomizeHomePageLayoutCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProfilePage.L.customizeHomePageLayout), count, timeoutMs);
  }

  async scrollCustomizeHomePageLayoutIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProfilePage.L.customizeHomePageLayout));
  }

}
