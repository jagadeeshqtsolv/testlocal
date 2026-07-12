import type { Locator, Page } from '@playwright/test';
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

export class NewsCardPage {
  constructor(private readonly page: Page) {}

  private static readonly L = {
    featuredNewsSection: { strategy: 'css', value: '[data-testid="featured-news-section"]', actionKind: 'generic' as const },
    latestNewsSection: { strategy: 'css', value: '[data-testid="latest-news-section"]', actionKind: 'generic' as const },
    featuredBookmarkIcon: { strategy: 'css', value: '[data-testid="featured-news-card"] [data-testid="bookmark-icon"]', actionKind: 'button' as const },
    featuredBookmarkIconSaved: { strategy: 'css', value: '[data-testid="featured-news-card"] [data-testid="bookmark-icon"][data-saved="true"]', actionKind: 'button' as const },
    latestBookmarkIcon: { strategy: 'css', value: '[data-testid="latest-news-card"] [data-testid="bookmark-icon"]', actionKind: 'button' as const },
    toastAlert: { strategy: 'css', value: '[role="alert"]', actionKind: 'generic' as const },
    toastViewSavedNewsLink: { strategy: 'css', value: '[data-testid="view-saved-news-toast-link"]', actionKind: 'link' as const },
    savedNewsCard: { strategy: 'css', value: '[data-testid="saved-news-card"]', actionKind: 'generic' as const },
    savedNewsCardUnsaveIcon: { strategy: 'css', value: '[data-testid="saved-news-card"] [data-testid="unsave-icon"]', actionKind: 'button' as const },
    savedNewsCardTitleFirst: { strategy: 'css', value: '[data-testid="saved-news-card"]:first-child [data-testid="news-title"]', actionKind: 'generic' as const },
    savedNewsCardItem: { strategy: 'css', value: '[data-testid="saved-news-card"]', actionKind: 'generic' as const },
    newsArticleContent: { strategy: 'css', value: '[data-testid="news-article-content"]', actionKind: 'generic' as const },
    featuredBookmarkIcon1: { strategy: 'css', value: '[data-testid="featured-news-card"]:nth-child(1) [data-testid="bookmark-icon"]', actionKind: 'button' as const },
    featuredBookmarkIcon2: { strategy: 'css', value: '[data-testid="featured-news-card"]:nth-child(2) [data-testid="bookmark-icon"]', actionKind: 'button' as const },
    latestNewsCard: { strategy: 'css', value: '[data-testid="latest-news-card"]', actionKind: 'generic' as const }
  } as const;

  async scrollFeaturedNewsSectionIntoView() {
    await scrollIntoViewWhenVisible(this.page, webLocator(this.page, NewsCardPage.L.featuredNewsSection));
  }

  async scrollLatestNewsSectionIntoView() {
    await scrollIntoViewWhenVisible(this.page, webLocator(this.page, NewsCardPage.L.latestNewsSection));
  }

  async expectFeaturedBookmarkIconVisible() {
    await expectVisible(this.page, webLocator(this.page, NewsCardPage.L.featuredBookmarkIcon));
  }

  async expectLatestBookmarkIconVisible() {
    await expectVisible(this.page, webLocator(this.page, NewsCardPage.L.latestBookmarkIcon));
  }

  async clickFeaturedBookmarkIcon() {
    await clickWhenVisible(this.page, webLocator(this.page, NewsCardPage.L.featuredBookmarkIcon));
  }

  async clickLatestBookmarkIcon() {
    await clickWhenVisible(this.page, webLocator(this.page, NewsCardPage.L.latestBookmarkIcon));
  }

  async expectToastAlertVisible() {
    await expectVisible(this.page, webLocator(this.page, NewsCardPage.L.toastAlert));
  }

  async expectToastAlertText(text: string) {
    await expectText(this.page, webLocator(this.page, NewsCardPage.L.toastAlert), text);
  }

  async clickToastViewSavedNewsLink() {
    await clickWhenVisible(this.page, webLocator(this.page, NewsCardPage.L.toastViewSavedNewsLink));
  }

  async expectSavedNewsCardVisible() {
    await expectVisible(this.page, webLocator(this.page, NewsCardPage.L.savedNewsCard));
  }

  async expectSavedNewsCardHidden() {
    await expectHidden(this.page, webLocator(this.page, NewsCardPage.L.savedNewsCard));
  }

  async clickSavedNewsCard() {
    await clickWhenVisible(this.page, webLocator(this.page, NewsCardPage.L.savedNewsCard));
  }

  async clickSavedNewsCardUnsaveIcon() {
    await clickWhenVisible(this.page, webLocator(this.page, NewsCardPage.L.savedNewsCardUnsaveIcon));
  }

  async expectSavedBookmarkIconFilledVisible() {
    await expectVisible(this.page, webLocator(this.page, NewsCardPage.L.featuredBookmarkIconSaved));
  }

  async expectNewsArticleContentVisible() {
    await expectVisible(this.page, webLocator(this.page, NewsCardPage.L.newsArticleContent));
  }

  async clickFeaturedBookmarkIcon1() {
    await clickWhenVisible(this.page, webLocator(this.page, NewsCardPage.L.featuredBookmarkIcon1));
  }

  async clickFeaturedBookmarkIcon2() {
    await clickWhenVisible(this.page, webLocator(this.page, NewsCardPage.L.featuredBookmarkIcon2));
  }

  async expectSavedNewsCardTitleFirstText(text: string) {
    await expectText(this.page, webLocator(this.page, NewsCardPage.L.savedNewsCardTitleFirst), text);
  }

  async expectLatestNewsCardBookmarkIconVisible() {
    await expectVisible(this.page, webLocator(this.page, NewsCardPage.L.latestBookmarkIcon));
  }

  async expectLatestNewsCardVisible() {
    await expectVisible(this.page, webLocator(this.page, NewsCardPage.L.latestNewsCard));
  }

  async clickFeaturedNewsSection(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, NewsCardPage.L.featuredNewsSection));
  }

  async doubleClickFeaturedNewsSection(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, NewsCardPage.L.featuredNewsSection));
  }

  async longPressFeaturedNewsSection(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, NewsCardPage.L.featuredNewsSection));
  }

  async expectFeaturedNewsSectionVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, NewsCardPage.L.featuredNewsSection), timeoutMs);
  }

  async expectFeaturedNewsSectionHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, NewsCardPage.L.featuredNewsSection), timeoutMs);
  }

  async expectFeaturedNewsSectionText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, NewsCardPage.L.featuredNewsSection), expected, timeoutMs);
  }

  async expectFeaturedNewsSectionContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, NewsCardPage.L.featuredNewsSection), substring, timeoutMs);
  }

  async expectFeaturedNewsSectionValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, NewsCardPage.L.featuredNewsSection), value, timeoutMs);
  }

  async expectFeaturedNewsSectionEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, NewsCardPage.L.featuredNewsSection), timeoutMs);
  }

  async expectFeaturedNewsSectionDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, NewsCardPage.L.featuredNewsSection), timeoutMs);
  }

  async expectFeaturedNewsSectionChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, NewsCardPage.L.featuredNewsSection), timeoutMs);
  }

  async expectFeaturedNewsSectionUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, NewsCardPage.L.featuredNewsSection), timeoutMs);
  }

  async expectFeaturedNewsSectionFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, NewsCardPage.L.featuredNewsSection), timeoutMs);
  }

  async expectFeaturedNewsSectionCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, NewsCardPage.L.featuredNewsSection), count, timeoutMs);
  }

  async clickLatestNewsSection(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, NewsCardPage.L.latestNewsSection));
  }

  async doubleClickLatestNewsSection(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, NewsCardPage.L.latestNewsSection));
  }

  async longPressLatestNewsSection(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, NewsCardPage.L.latestNewsSection));
  }

  async expectLatestNewsSectionVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, NewsCardPage.L.latestNewsSection), timeoutMs);
  }

  async expectLatestNewsSectionHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, NewsCardPage.L.latestNewsSection), timeoutMs);
  }

  async expectLatestNewsSectionText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, NewsCardPage.L.latestNewsSection), expected, timeoutMs);
  }

  async expectLatestNewsSectionContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, NewsCardPage.L.latestNewsSection), substring, timeoutMs);
  }

  async expectLatestNewsSectionValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, NewsCardPage.L.latestNewsSection), value, timeoutMs);
  }

  async expectLatestNewsSectionEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, NewsCardPage.L.latestNewsSection), timeoutMs);
  }

  async expectLatestNewsSectionDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, NewsCardPage.L.latestNewsSection), timeoutMs);
  }

  async expectLatestNewsSectionChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, NewsCardPage.L.latestNewsSection), timeoutMs);
  }

  async expectLatestNewsSectionUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, NewsCardPage.L.latestNewsSection), timeoutMs);
  }

  async expectLatestNewsSectionFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, NewsCardPage.L.latestNewsSection), timeoutMs);
  }

  async expectLatestNewsSectionCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, NewsCardPage.L.latestNewsSection), count, timeoutMs);
  }

  async doubleClickFeaturedBookmarkIcon(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, NewsCardPage.L.featuredBookmarkIcon));
  }

  async longPressFeaturedBookmarkIcon(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, NewsCardPage.L.featuredBookmarkIcon));
  }

  async expectFeaturedBookmarkIconHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, NewsCardPage.L.featuredBookmarkIcon), timeoutMs);
  }

  async expectFeaturedBookmarkIconText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, NewsCardPage.L.featuredBookmarkIcon), expected, timeoutMs);
  }

  async expectFeaturedBookmarkIconContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, NewsCardPage.L.featuredBookmarkIcon), substring, timeoutMs);
  }

  async expectFeaturedBookmarkIconValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, NewsCardPage.L.featuredBookmarkIcon), value, timeoutMs);
  }

  async expectFeaturedBookmarkIconEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, NewsCardPage.L.featuredBookmarkIcon), timeoutMs);
  }

  async expectFeaturedBookmarkIconDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, NewsCardPage.L.featuredBookmarkIcon), timeoutMs);
  }

  async expectFeaturedBookmarkIconChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, NewsCardPage.L.featuredBookmarkIcon), timeoutMs);
  }

  async expectFeaturedBookmarkIconUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, NewsCardPage.L.featuredBookmarkIcon), timeoutMs);
  }

  async expectFeaturedBookmarkIconFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, NewsCardPage.L.featuredBookmarkIcon), timeoutMs);
  }

  async expectFeaturedBookmarkIconCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, NewsCardPage.L.featuredBookmarkIcon), count, timeoutMs);
  }

  async scrollFeaturedBookmarkIconIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, NewsCardPage.L.featuredBookmarkIcon));
  }

  async clickFeaturedBookmarkIconSaved(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, NewsCardPage.L.featuredBookmarkIconSaved));
  }

  async doubleClickFeaturedBookmarkIconSaved(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, NewsCardPage.L.featuredBookmarkIconSaved));
  }

  async longPressFeaturedBookmarkIconSaved(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, NewsCardPage.L.featuredBookmarkIconSaved));
  }

  async expectFeaturedBookmarkIconSavedVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, NewsCardPage.L.featuredBookmarkIconSaved), timeoutMs);
  }

  async expectFeaturedBookmarkIconSavedHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, NewsCardPage.L.featuredBookmarkIconSaved), timeoutMs);
  }

  async expectFeaturedBookmarkIconSavedText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, NewsCardPage.L.featuredBookmarkIconSaved), expected, timeoutMs);
  }

  async expectFeaturedBookmarkIconSavedContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, NewsCardPage.L.featuredBookmarkIconSaved), substring, timeoutMs);
  }

  async expectFeaturedBookmarkIconSavedValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, NewsCardPage.L.featuredBookmarkIconSaved), value, timeoutMs);
  }

  async expectFeaturedBookmarkIconSavedEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, NewsCardPage.L.featuredBookmarkIconSaved), timeoutMs);
  }

  async expectFeaturedBookmarkIconSavedDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, NewsCardPage.L.featuredBookmarkIconSaved), timeoutMs);
  }

  async expectFeaturedBookmarkIconSavedChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, NewsCardPage.L.featuredBookmarkIconSaved), timeoutMs);
  }

  async expectFeaturedBookmarkIconSavedUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, NewsCardPage.L.featuredBookmarkIconSaved), timeoutMs);
  }

  async expectFeaturedBookmarkIconSavedFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, NewsCardPage.L.featuredBookmarkIconSaved), timeoutMs);
  }

  async expectFeaturedBookmarkIconSavedCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, NewsCardPage.L.featuredBookmarkIconSaved), count, timeoutMs);
  }

  async scrollFeaturedBookmarkIconSavedIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, NewsCardPage.L.featuredBookmarkIconSaved));
  }

  async doubleClickLatestBookmarkIcon(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, NewsCardPage.L.latestBookmarkIcon));
  }

  async longPressLatestBookmarkIcon(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, NewsCardPage.L.latestBookmarkIcon));
  }

  async expectLatestBookmarkIconHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, NewsCardPage.L.latestBookmarkIcon), timeoutMs);
  }

  async expectLatestBookmarkIconText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, NewsCardPage.L.latestBookmarkIcon), expected, timeoutMs);
  }

  async expectLatestBookmarkIconContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, NewsCardPage.L.latestBookmarkIcon), substring, timeoutMs);
  }

  async expectLatestBookmarkIconValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, NewsCardPage.L.latestBookmarkIcon), value, timeoutMs);
  }

  async expectLatestBookmarkIconEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, NewsCardPage.L.latestBookmarkIcon), timeoutMs);
  }

  async expectLatestBookmarkIconDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, NewsCardPage.L.latestBookmarkIcon), timeoutMs);
  }

  async expectLatestBookmarkIconChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, NewsCardPage.L.latestBookmarkIcon), timeoutMs);
  }

  async expectLatestBookmarkIconUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, NewsCardPage.L.latestBookmarkIcon), timeoutMs);
  }

  async expectLatestBookmarkIconFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, NewsCardPage.L.latestBookmarkIcon), timeoutMs);
  }

  async expectLatestBookmarkIconCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, NewsCardPage.L.latestBookmarkIcon), count, timeoutMs);
  }

  async scrollLatestBookmarkIconIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, NewsCardPage.L.latestBookmarkIcon));
  }

  async clickToastAlert(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, NewsCardPage.L.toastAlert));
  }

  async doubleClickToastAlert(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, NewsCardPage.L.toastAlert));
  }

  async longPressToastAlert(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, NewsCardPage.L.toastAlert));
  }

  async expectToastAlertHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, NewsCardPage.L.toastAlert), timeoutMs);
  }

  async expectToastAlertContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, NewsCardPage.L.toastAlert), substring, timeoutMs);
  }

  async expectToastAlertValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, NewsCardPage.L.toastAlert), value, timeoutMs);
  }

  async expectToastAlertEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, NewsCardPage.L.toastAlert), timeoutMs);
  }

  async expectToastAlertDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, NewsCardPage.L.toastAlert), timeoutMs);
  }

  async expectToastAlertChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, NewsCardPage.L.toastAlert), timeoutMs);
  }

  async expectToastAlertUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, NewsCardPage.L.toastAlert), timeoutMs);
  }

  async expectToastAlertFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, NewsCardPage.L.toastAlert), timeoutMs);
  }

  async expectToastAlertCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, NewsCardPage.L.toastAlert), count, timeoutMs);
  }

  async scrollToastAlertIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, NewsCardPage.L.toastAlert));
  }

  async doubleClickToastViewSavedNewsLink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, NewsCardPage.L.toastViewSavedNewsLink));
  }

  async longPressToastViewSavedNewsLink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, NewsCardPage.L.toastViewSavedNewsLink));
  }

  async expectToastViewSavedNewsLinkVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, NewsCardPage.L.toastViewSavedNewsLink), timeoutMs);
  }

  async expectToastViewSavedNewsLinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, NewsCardPage.L.toastViewSavedNewsLink), timeoutMs);
  }

  async expectToastViewSavedNewsLinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, NewsCardPage.L.toastViewSavedNewsLink), expected, timeoutMs);
  }

  async expectToastViewSavedNewsLinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, NewsCardPage.L.toastViewSavedNewsLink), substring, timeoutMs);
  }

  async expectToastViewSavedNewsLinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, NewsCardPage.L.toastViewSavedNewsLink), value, timeoutMs);
  }

  async expectToastViewSavedNewsLinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, NewsCardPage.L.toastViewSavedNewsLink), timeoutMs);
  }

  async expectToastViewSavedNewsLinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, NewsCardPage.L.toastViewSavedNewsLink), timeoutMs);
  }

  async expectToastViewSavedNewsLinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, NewsCardPage.L.toastViewSavedNewsLink), timeoutMs);
  }

  async expectToastViewSavedNewsLinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, NewsCardPage.L.toastViewSavedNewsLink), timeoutMs);
  }

  async expectToastViewSavedNewsLinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, NewsCardPage.L.toastViewSavedNewsLink), timeoutMs);
  }

  async expectToastViewSavedNewsLinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, NewsCardPage.L.toastViewSavedNewsLink), count, timeoutMs);
  }

  async scrollToastViewSavedNewsLinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, NewsCardPage.L.toastViewSavedNewsLink));
  }

  async doubleClickSavedNewsCard(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, NewsCardPage.L.savedNewsCard));
  }

  async longPressSavedNewsCard(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, NewsCardPage.L.savedNewsCard));
  }

  async expectSavedNewsCardText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, NewsCardPage.L.savedNewsCard), expected, timeoutMs);
  }

  async expectSavedNewsCardContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, NewsCardPage.L.savedNewsCard), substring, timeoutMs);
  }

  async expectSavedNewsCardValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, NewsCardPage.L.savedNewsCard), value, timeoutMs);
  }

  async expectSavedNewsCardEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, NewsCardPage.L.savedNewsCard), timeoutMs);
  }

  async expectSavedNewsCardDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, NewsCardPage.L.savedNewsCard), timeoutMs);
  }

  async expectSavedNewsCardChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, NewsCardPage.L.savedNewsCard), timeoutMs);
  }

  async expectSavedNewsCardUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, NewsCardPage.L.savedNewsCard), timeoutMs);
  }

  async expectSavedNewsCardFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, NewsCardPage.L.savedNewsCard), timeoutMs);
  }

  async expectSavedNewsCardCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, NewsCardPage.L.savedNewsCard), count, timeoutMs);
  }

  async scrollSavedNewsCardIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, NewsCardPage.L.savedNewsCard));
  }

  async doubleClickSavedNewsCardUnsaveIcon(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, NewsCardPage.L.savedNewsCardUnsaveIcon));
  }

  async longPressSavedNewsCardUnsaveIcon(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, NewsCardPage.L.savedNewsCardUnsaveIcon));
  }

  async expectSavedNewsCardUnsaveIconVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, NewsCardPage.L.savedNewsCardUnsaveIcon), timeoutMs);
  }

  async expectSavedNewsCardUnsaveIconHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, NewsCardPage.L.savedNewsCardUnsaveIcon), timeoutMs);
  }

  async expectSavedNewsCardUnsaveIconText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, NewsCardPage.L.savedNewsCardUnsaveIcon), expected, timeoutMs);
  }

  async expectSavedNewsCardUnsaveIconContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, NewsCardPage.L.savedNewsCardUnsaveIcon), substring, timeoutMs);
  }

  async expectSavedNewsCardUnsaveIconValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, NewsCardPage.L.savedNewsCardUnsaveIcon), value, timeoutMs);
  }

  async expectSavedNewsCardUnsaveIconEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, NewsCardPage.L.savedNewsCardUnsaveIcon), timeoutMs);
  }

  async expectSavedNewsCardUnsaveIconDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, NewsCardPage.L.savedNewsCardUnsaveIcon), timeoutMs);
  }

  async expectSavedNewsCardUnsaveIconChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, NewsCardPage.L.savedNewsCardUnsaveIcon), timeoutMs);
  }

  async expectSavedNewsCardUnsaveIconUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, NewsCardPage.L.savedNewsCardUnsaveIcon), timeoutMs);
  }

  async expectSavedNewsCardUnsaveIconFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, NewsCardPage.L.savedNewsCardUnsaveIcon), timeoutMs);
  }

  async expectSavedNewsCardUnsaveIconCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, NewsCardPage.L.savedNewsCardUnsaveIcon), count, timeoutMs);
  }

  async scrollSavedNewsCardUnsaveIconIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, NewsCardPage.L.savedNewsCardUnsaveIcon));
  }

  async clickSavedNewsCardTitleFirst(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, NewsCardPage.L.savedNewsCardTitleFirst));
  }

  async doubleClickSavedNewsCardTitleFirst(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, NewsCardPage.L.savedNewsCardTitleFirst));
  }

  async longPressSavedNewsCardTitleFirst(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, NewsCardPage.L.savedNewsCardTitleFirst));
  }

  async expectSavedNewsCardTitleFirstVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, NewsCardPage.L.savedNewsCardTitleFirst), timeoutMs);
  }

  async expectSavedNewsCardTitleFirstHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, NewsCardPage.L.savedNewsCardTitleFirst), timeoutMs);
  }

  async expectSavedNewsCardTitleFirstContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, NewsCardPage.L.savedNewsCardTitleFirst), substring, timeoutMs);
  }

  async expectSavedNewsCardTitleFirstValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, NewsCardPage.L.savedNewsCardTitleFirst), value, timeoutMs);
  }

  async expectSavedNewsCardTitleFirstEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, NewsCardPage.L.savedNewsCardTitleFirst), timeoutMs);
  }

  async expectSavedNewsCardTitleFirstDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, NewsCardPage.L.savedNewsCardTitleFirst), timeoutMs);
  }

  async expectSavedNewsCardTitleFirstChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, NewsCardPage.L.savedNewsCardTitleFirst), timeoutMs);
  }

  async expectSavedNewsCardTitleFirstUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, NewsCardPage.L.savedNewsCardTitleFirst), timeoutMs);
  }

  async expectSavedNewsCardTitleFirstFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, NewsCardPage.L.savedNewsCardTitleFirst), timeoutMs);
  }

  async expectSavedNewsCardTitleFirstCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, NewsCardPage.L.savedNewsCardTitleFirst), count, timeoutMs);
  }

  async scrollSavedNewsCardTitleFirstIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, NewsCardPage.L.savedNewsCardTitleFirst));
  }

  async clickSavedNewsCardItem(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, NewsCardPage.L.savedNewsCardItem));
  }

  async doubleClickSavedNewsCardItem(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, NewsCardPage.L.savedNewsCardItem));
  }

  async longPressSavedNewsCardItem(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, NewsCardPage.L.savedNewsCardItem));
  }

  async expectSavedNewsCardItemVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, NewsCardPage.L.savedNewsCardItem), timeoutMs);
  }

  async expectSavedNewsCardItemHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, NewsCardPage.L.savedNewsCardItem), timeoutMs);
  }

  async expectSavedNewsCardItemText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, NewsCardPage.L.savedNewsCardItem), expected, timeoutMs);
  }

  async expectSavedNewsCardItemContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, NewsCardPage.L.savedNewsCardItem), substring, timeoutMs);
  }

  async expectSavedNewsCardItemValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, NewsCardPage.L.savedNewsCardItem), value, timeoutMs);
  }

  async expectSavedNewsCardItemEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, NewsCardPage.L.savedNewsCardItem), timeoutMs);
  }

  async expectSavedNewsCardItemDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, NewsCardPage.L.savedNewsCardItem), timeoutMs);
  }

  async expectSavedNewsCardItemChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, NewsCardPage.L.savedNewsCardItem), timeoutMs);
  }

  async expectSavedNewsCardItemUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, NewsCardPage.L.savedNewsCardItem), timeoutMs);
  }

  async expectSavedNewsCardItemFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, NewsCardPage.L.savedNewsCardItem), timeoutMs);
  }

  async expectSavedNewsCardItemCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, NewsCardPage.L.savedNewsCardItem), count, timeoutMs);
  }

  async scrollSavedNewsCardItemIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, NewsCardPage.L.savedNewsCardItem));
  }

  async clickNewsArticleContent(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, NewsCardPage.L.newsArticleContent));
  }

  async doubleClickNewsArticleContent(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, NewsCardPage.L.newsArticleContent));
  }

  async longPressNewsArticleContent(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, NewsCardPage.L.newsArticleContent));
  }

  async expectNewsArticleContentHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, NewsCardPage.L.newsArticleContent), timeoutMs);
  }

  async expectNewsArticleContentText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, NewsCardPage.L.newsArticleContent), expected, timeoutMs);
  }

  async expectNewsArticleContentContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, NewsCardPage.L.newsArticleContent), substring, timeoutMs);
  }

  async expectNewsArticleContentValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, NewsCardPage.L.newsArticleContent), value, timeoutMs);
  }

  async expectNewsArticleContentEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, NewsCardPage.L.newsArticleContent), timeoutMs);
  }

  async expectNewsArticleContentDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, NewsCardPage.L.newsArticleContent), timeoutMs);
  }

  async expectNewsArticleContentChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, NewsCardPage.L.newsArticleContent), timeoutMs);
  }

  async expectNewsArticleContentUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, NewsCardPage.L.newsArticleContent), timeoutMs);
  }

  async expectNewsArticleContentFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, NewsCardPage.L.newsArticleContent), timeoutMs);
  }

  async expectNewsArticleContentCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, NewsCardPage.L.newsArticleContent), count, timeoutMs);
  }

  async scrollNewsArticleContentIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, NewsCardPage.L.newsArticleContent));
  }

  async doubleClickFeaturedBookmarkIcon1(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, NewsCardPage.L.featuredBookmarkIcon1));
  }

  async longPressFeaturedBookmarkIcon1(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, NewsCardPage.L.featuredBookmarkIcon1));
  }

  async expectFeaturedBookmarkIcon1Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, NewsCardPage.L.featuredBookmarkIcon1), timeoutMs);
  }

  async expectFeaturedBookmarkIcon1Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, NewsCardPage.L.featuredBookmarkIcon1), timeoutMs);
  }

  async expectFeaturedBookmarkIcon1Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, NewsCardPage.L.featuredBookmarkIcon1), expected, timeoutMs);
  }

  async expectFeaturedBookmarkIcon1ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, NewsCardPage.L.featuredBookmarkIcon1), substring, timeoutMs);
  }

  async expectFeaturedBookmarkIcon1Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, NewsCardPage.L.featuredBookmarkIcon1), value, timeoutMs);
  }

  async expectFeaturedBookmarkIcon1Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, NewsCardPage.L.featuredBookmarkIcon1), timeoutMs);
  }

  async expectFeaturedBookmarkIcon1Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, NewsCardPage.L.featuredBookmarkIcon1), timeoutMs);
  }

  async expectFeaturedBookmarkIcon1Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, NewsCardPage.L.featuredBookmarkIcon1), timeoutMs);
  }

  async expectFeaturedBookmarkIcon1Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, NewsCardPage.L.featuredBookmarkIcon1), timeoutMs);
  }

  async expectFeaturedBookmarkIcon1Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, NewsCardPage.L.featuredBookmarkIcon1), timeoutMs);
  }

  async expectFeaturedBookmarkIcon1Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, NewsCardPage.L.featuredBookmarkIcon1), count, timeoutMs);
  }

  async scrollFeaturedBookmarkIcon1IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, NewsCardPage.L.featuredBookmarkIcon1));
  }

  async doubleClickFeaturedBookmarkIcon2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, NewsCardPage.L.featuredBookmarkIcon2));
  }

  async longPressFeaturedBookmarkIcon2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, NewsCardPage.L.featuredBookmarkIcon2));
  }

  async expectFeaturedBookmarkIcon2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, NewsCardPage.L.featuredBookmarkIcon2), timeoutMs);
  }

  async expectFeaturedBookmarkIcon2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, NewsCardPage.L.featuredBookmarkIcon2), timeoutMs);
  }

  async expectFeaturedBookmarkIcon2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, NewsCardPage.L.featuredBookmarkIcon2), expected, timeoutMs);
  }

  async expectFeaturedBookmarkIcon2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, NewsCardPage.L.featuredBookmarkIcon2), substring, timeoutMs);
  }

  async expectFeaturedBookmarkIcon2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, NewsCardPage.L.featuredBookmarkIcon2), value, timeoutMs);
  }

  async expectFeaturedBookmarkIcon2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, NewsCardPage.L.featuredBookmarkIcon2), timeoutMs);
  }

  async expectFeaturedBookmarkIcon2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, NewsCardPage.L.featuredBookmarkIcon2), timeoutMs);
  }

  async expectFeaturedBookmarkIcon2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, NewsCardPage.L.featuredBookmarkIcon2), timeoutMs);
  }

  async expectFeaturedBookmarkIcon2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, NewsCardPage.L.featuredBookmarkIcon2), timeoutMs);
  }

  async expectFeaturedBookmarkIcon2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, NewsCardPage.L.featuredBookmarkIcon2), timeoutMs);
  }

  async expectFeaturedBookmarkIcon2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, NewsCardPage.L.featuredBookmarkIcon2), count, timeoutMs);
  }

  async scrollFeaturedBookmarkIcon2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, NewsCardPage.L.featuredBookmarkIcon2));
  }

  async clickLatestNewsCard(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, NewsCardPage.L.latestNewsCard));
  }

  async doubleClickLatestNewsCard(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, NewsCardPage.L.latestNewsCard));
  }

  async longPressLatestNewsCard(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, NewsCardPage.L.latestNewsCard));
  }

  async expectLatestNewsCardHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, NewsCardPage.L.latestNewsCard), timeoutMs);
  }

  async expectLatestNewsCardText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, NewsCardPage.L.latestNewsCard), expected, timeoutMs);
  }

  async expectLatestNewsCardContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, NewsCardPage.L.latestNewsCard), substring, timeoutMs);
  }

  async expectLatestNewsCardValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, NewsCardPage.L.latestNewsCard), value, timeoutMs);
  }

  async expectLatestNewsCardEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, NewsCardPage.L.latestNewsCard), timeoutMs);
  }

  async expectLatestNewsCardDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, NewsCardPage.L.latestNewsCard), timeoutMs);
  }

  async expectLatestNewsCardChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, NewsCardPage.L.latestNewsCard), timeoutMs);
  }

  async expectLatestNewsCardUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, NewsCardPage.L.latestNewsCard), timeoutMs);
  }

  async expectLatestNewsCardFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, NewsCardPage.L.latestNewsCard), timeoutMs);
  }

  async expectLatestNewsCardCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, NewsCardPage.L.latestNewsCard), count, timeoutMs);
  }

  async scrollLatestNewsCardIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, NewsCardPage.L.latestNewsCard));
  }

}
