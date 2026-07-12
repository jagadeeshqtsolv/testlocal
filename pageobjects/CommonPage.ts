import type { Locator, Page } from "@playwright/test";
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

export class CommonPage {
  private static readonly L = {
    toastConfirmationMessage: { strategy: 'css' as const, value: '[role=\'alert\']', actionKind: 'generic' as const },
    toastActionViewSavedNewsUnderProfile: { strategy: 'css' as const, value: 'text=View saved news under Profile', actionKind: 'button' as const },
    savedNewsListHasAtLeast1Item: { strategy: 'testId' as const, value: 'saved-news-list', actionKind: 'generic' as const },
  } as const;

  constructor(private readonly page: Page) {}


  async clickToastConfirmationMessage(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CommonPage.L.toastConfirmationMessage));
  }

  async doubleClickToastConfirmationMessage(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CommonPage.L.toastConfirmationMessage));
  }

  async longPressToastConfirmationMessage(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CommonPage.L.toastConfirmationMessage));
  }

  async expectToastConfirmationMessageVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CommonPage.L.toastConfirmationMessage), timeoutMs);
  }

  async expectToastConfirmationMessageHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CommonPage.L.toastConfirmationMessage), timeoutMs);
  }

  async expectToastConfirmationMessageText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CommonPage.L.toastConfirmationMessage), expected, timeoutMs);
  }

  async expectToastConfirmationMessageContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CommonPage.L.toastConfirmationMessage), substring, timeoutMs);
  }

  async expectToastConfirmationMessageValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CommonPage.L.toastConfirmationMessage), value, timeoutMs);
  }

  async expectToastConfirmationMessageEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CommonPage.L.toastConfirmationMessage), timeoutMs);
  }

  async expectToastConfirmationMessageDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CommonPage.L.toastConfirmationMessage), timeoutMs);
  }

  async expectToastConfirmationMessageChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CommonPage.L.toastConfirmationMessage), timeoutMs);
  }

  async expectToastConfirmationMessageUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CommonPage.L.toastConfirmationMessage), timeoutMs);
  }

  async expectToastConfirmationMessageFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CommonPage.L.toastConfirmationMessage), timeoutMs);
  }

  async expectToastConfirmationMessageCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CommonPage.L.toastConfirmationMessage), count, timeoutMs);
  }

  async scrollToastConfirmationMessageIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CommonPage.L.toastConfirmationMessage));
  }


  async clickToastActionViewSavedNewsUnderProfile(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CommonPage.L.toastActionViewSavedNewsUnderProfile));
  }

  async doubleClickToastActionViewSavedNewsUnderProfile(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CommonPage.L.toastActionViewSavedNewsUnderProfile));
  }

  async longPressToastActionViewSavedNewsUnderProfile(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CommonPage.L.toastActionViewSavedNewsUnderProfile));
  }

  async expectToastActionViewSavedNewsUnderProfileVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CommonPage.L.toastActionViewSavedNewsUnderProfile), timeoutMs);
  }

  async expectToastActionViewSavedNewsUnderProfileHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CommonPage.L.toastActionViewSavedNewsUnderProfile), timeoutMs);
  }

  async expectToastActionViewSavedNewsUnderProfileText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CommonPage.L.toastActionViewSavedNewsUnderProfile), expected, timeoutMs);
  }

  async expectToastActionViewSavedNewsUnderProfileContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CommonPage.L.toastActionViewSavedNewsUnderProfile), substring, timeoutMs);
  }

  async expectToastActionViewSavedNewsUnderProfileValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CommonPage.L.toastActionViewSavedNewsUnderProfile), value, timeoutMs);
  }

  async expectToastActionViewSavedNewsUnderProfileEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CommonPage.L.toastActionViewSavedNewsUnderProfile), timeoutMs);
  }

  async expectToastActionViewSavedNewsUnderProfileDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CommonPage.L.toastActionViewSavedNewsUnderProfile), timeoutMs);
  }

  async expectToastActionViewSavedNewsUnderProfileChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CommonPage.L.toastActionViewSavedNewsUnderProfile), timeoutMs);
  }

  async expectToastActionViewSavedNewsUnderProfileUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CommonPage.L.toastActionViewSavedNewsUnderProfile), timeoutMs);
  }

  async expectToastActionViewSavedNewsUnderProfileFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CommonPage.L.toastActionViewSavedNewsUnderProfile), timeoutMs);
  }

  async expectToastActionViewSavedNewsUnderProfileCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CommonPage.L.toastActionViewSavedNewsUnderProfile), count, timeoutMs);
  }

  async scrollToastActionViewSavedNewsUnderProfileIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CommonPage.L.toastActionViewSavedNewsUnderProfile));
  }


  async clickSavedNewsListHasAtLeast1Item(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CommonPage.L.savedNewsListHasAtLeast1Item));
  }

  async doubleClickSavedNewsListHasAtLeast1Item(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CommonPage.L.savedNewsListHasAtLeast1Item));
  }

  async longPressSavedNewsListHasAtLeast1Item(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CommonPage.L.savedNewsListHasAtLeast1Item));
  }

  async expectSavedNewsListHasAtLeast1ItemVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CommonPage.L.savedNewsListHasAtLeast1Item), timeoutMs);
  }

  async expectSavedNewsListHasAtLeast1ItemHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CommonPage.L.savedNewsListHasAtLeast1Item), timeoutMs);
  }

  async expectSavedNewsListHasAtLeast1ItemText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CommonPage.L.savedNewsListHasAtLeast1Item), expected, timeoutMs);
  }

  async expectSavedNewsListHasAtLeast1ItemContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CommonPage.L.savedNewsListHasAtLeast1Item), substring, timeoutMs);
  }

  async expectSavedNewsListHasAtLeast1ItemValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CommonPage.L.savedNewsListHasAtLeast1Item), value, timeoutMs);
  }

  async expectSavedNewsListHasAtLeast1ItemEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CommonPage.L.savedNewsListHasAtLeast1Item), timeoutMs);
  }

  async expectSavedNewsListHasAtLeast1ItemDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CommonPage.L.savedNewsListHasAtLeast1Item), timeoutMs);
  }

  async expectSavedNewsListHasAtLeast1ItemChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CommonPage.L.savedNewsListHasAtLeast1Item), timeoutMs);
  }

  async expectSavedNewsListHasAtLeast1ItemUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CommonPage.L.savedNewsListHasAtLeast1Item), timeoutMs);
  }

  async expectSavedNewsListHasAtLeast1ItemFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CommonPage.L.savedNewsListHasAtLeast1Item), timeoutMs);
  }

  async expectSavedNewsListHasAtLeast1ItemCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CommonPage.L.savedNewsListHasAtLeast1Item), count, timeoutMs);
  }

  async scrollSavedNewsListHasAtLeast1ItemIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CommonPage.L.savedNewsListHasAtLeast1Item));
  }

}
