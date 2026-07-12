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

export class SavedNewsPage {
  private static readonly L = {
    viewThisPageIn: { strategy: 'text' as const, value: 'View this page in', actionKind: 'text' as const },
    to: { strategy: 'css' as const, value: '[name="to"]', actionKind: 'combobox' as const },
    showCollapsedMenu: { strategy: 'role' as const, value: 'show collapsed menu', role: 'button', actionKind: 'button' as const },
    mySavedNews: { strategy: 'role' as const, value: 'My saved news', role: 'button', actionKind: 'button' as const },
    noNews: { strategy: 'altText' as const, value: 'no-news', actionKind: 'generic' as const },
    noSavedNews: { strategy: 'text' as const, value: 'No saved news', actionKind: 'text' as const },
    featured: { strategy: 'role' as const, value: 'Featured', role: 'heading', level: 3, actionKind: 'text' as const },
    switchToPreviousNews: { strategy: 'role' as const, value: 'switch to previous news', role: 'button', actionKind: 'button' as const },
    ai: { strategy: 'text' as const, value: 'AI', actionKind: 'text' as const },
    saveNews: { strategy: 'role' as const, value: 'Save news', role: 'button', actionKind: 'button' as const },
    takeTheNextStep: { strategy: 'altText' as const, value: 'Take the next step in your development at UKG', actionKind: 'generic' as const },
    takeTheNextStep2: { strategy: 'text' as const, value: 'Take the next step in your development at UKG', actionKind: 'text' as const },
    stacyCutrono: { strategy: 'text' as const, value: 'Stacy Cutrono', actionKind: 'text' as const },
    allEmployeeTownHall: { strategy: 'altText' as const, value: 'All-Employee Town Hall - June 2026', actionKind: 'generic' as const },
    ashleyAmerson: { strategy: 'text' as const, value: 'Ashley Amerson', actionKind: 'text' as const },
    celebratingTheStrengthOf: { strategy: 'altText' as const, value: 'Celebrating the strength of the UKG Ready partner network', actionKind: 'generic' as const },
    celebratingTheStrengthOf2: { strategy: 'text' as const, value: 'Celebrating the strength of the UKG Ready partner', actionKind: 'text' as const },
    christopherKiklas: { strategy: 'text' as const, value: 'Christopher Kiklas', actionKind: 'text' as const },
    prideMonth2026Together: { strategy: 'altText' as const, value: 'Pride Month 2026: Together, with pride and love', actionKind: 'generic' as const },
    prideMonth2026Together2: { strategy: 'text' as const, value: 'Pride Month 2026: Together, with pride and love', actionKind: 'text' as const },
    sequoyaFord: { strategy: 'text' as const, value: 'Sequoya Ford', actionKind: 'text' as const },
    globalImpactInAction: { strategy: 'altText' as const, value: 'Global Impact in Action: 4-Week Challenge winners', actionKind: 'generic' as const },
    globalImpactInAction2: { strategy: 'text' as const, value: 'Global Impact in Action: 4-Week Challenge winners', actionKind: 'text' as const },
    sarahMarks: { strategy: 'text' as const, value: 'Sarah Marks', actionKind: 'text' as const },
    celebratingOneYearOf: { strategy: 'altText' as const, value: 'Celebrating one year of Shiftboard at UKG', actionKind: 'generic' as const },
    celebratingOneYearOf2: { strategy: 'text' as const, value: 'Celebrating one year of Shiftboard at UKG', actionKind: 'text' as const },
    brianBower: { strategy: 'text' as const, value: 'Brian Bower', actionKind: 'text' as const },
    switchToNextNews: { strategy: 'role' as const, value: 'switch to next news', role: 'button', actionKind: 'button' as const },
    latestNews: { strategy: 'role' as const, value: 'Latest news', role: 'heading', level: 3, actionKind: 'text' as const },
    seeAll: { strategy: 'role' as const, value: 'See all', role: 'button', actionKind: 'button' as const },
    webinarFeaturingUkgCustomer: { strategy: 'altText' as const, value: 'Webinar featuring UKG customer Bay Federal Credit Union', actionKind: 'generic' as const },
    gtmMarketing: { strategy: 'role' as const, value: 'GTM: Marketing', role: 'link', actionKind: 'link' as const },
    webinarFeaturingUkgCustomerLink: { strategy: 'role' as const, value: 'Webinar featuring UKG customer Bay Federal Credit', role: 'link', actionKind: 'link' as const },
    comment: { strategy: 'altText' as const, value: 'comment', actionKind: 'generic' as const },
    gtm: { strategy: 'role' as const, value: 'GTM', role: 'link', actionKind: 'link' as const },
    q3FY26SalesRecognitionLink: { strategy: 'role' as const, value: 'Q3 FY26 Sales Recognition 🎉', role: 'link', actionKind: 'link' as const },
    theRoleOfHrLink: { strategy: 'role' as const, value: 'The Role of HR in a Shrinking Higher Ed', role: 'link', actionKind: 'link' as const },
    julySocialSellingUpdatesLink: { strategy: 'role' as const, value: 'July social selling updates', role: 'link', actionKind: 'link' as const },
    whatSecuritySeesGood: { strategy: 'altText' as const, value: 'What Security Sees: Good intentions, unexpected risk', actionKind: 'generic' as const },
    productEngineeringGlobal: { strategy: 'role' as const, value: 'Product & Engineering: Global Security', role: 'link', actionKind: 'link' as const },
    whatSecuritySeesGoodLink: { strategy: 'role' as const, value: 'What Security Sees: Good intentions, unexpected', role: 'link', actionKind: 'link' as const },
    buildNewsletterJuly: { strategy: 'altText' as const, value: 'Build Newsletter - July 2026', actionKind: 'generic' as const },
    peopleUkgBuild: { strategy: 'role' as const, value: 'People: UKG Build', role: 'link', actionKind: 'link' as const },
    legalRiskCompliance: { strategy: 'role' as const, value: 'Legal: Risk & Compliance', role: 'link', actionKind: 'link' as const },
    policyGovernanceAtUkgLink: { strategy: 'text' as const, value: 'Policy governance at UKG: Building trust through strong governance', actionKind: 'link' as const },
    insideUkg: { strategy: 'role' as const, value: 'Inside UKG', role: 'link', actionKind: 'link' as const },
    photoOfTheWeekLink: { strategy: 'role' as const, value: 'Photo of the Week: Lowell office spotlight', role: 'link', actionKind: 'link' as const },
    aiHub: { strategy: 'role' as const, value: 'AI Hub', role: 'link', actionKind: 'link' as const },
    agencyUAgentAThonMovesIntoLink: { strategy: 'role' as const, value: 'AgencyU Agent-a-thon moves into judging', role: 'link', actionKind: 'link' as const },
    newForresterTotalEconomic: { strategy: 'altText' as const, value: 'New Forrester Total Economic Impact™ (TEI) study is live!', actionKind: 'generic' as const },
    newForresterTotalEconomicLink: { strategy: 'role' as const, value: 'New Forrester Total Economic Impact™ (TEI) study', role: 'link', actionKind: 'link' as const },
    july2026HealthAwareness: { strategy: 'altText' as const, value: 'July 2026 health awareness: Spotlight on wellness initiatives', actionKind: 'generic' as const },
    peopleUkgCares: { strategy: 'role' as const, value: 'People: UKG Cares', role: 'link', actionKind: 'link' as const },
    employeeResourceGroupErg: { strategy: 'altText' as const, value: 'Employee Resource Group (ERG) monthly newsletter: July 2026', actionKind: 'generic' as const },
    peopleBelongingImpact: { strategy: 'role' as const, value: 'People: Belonging & Impact', role: 'link', actionKind: 'link' as const },
    ukgRiseEarlyCareerLink: { strategy: 'text' as const, value: 'UKG Rise Early Career Month: Build the skills, shape the future', actionKind: 'link' as const },
    globalSecurityManagedVault: { strategy: 'altText' as const, value: 'Global Security managed Vault certificate migration calendar', actionKind: 'generic' as const },
    globalSecurityManagedVaultLink: { strategy: 'role' as const, value: 'Global Security managed Vault certificate', role: 'link', actionKind: 'link' as const },
    baselineImagesRequiredFor: { strategy: 'altText' as const, value: 'Baseline Images required for new deployments starting July 31', actionKind: 'generic' as const },
    commsEmployeeCommunications: { strategy: 'role' as const, value: 'Comms: Employee Communications', role: 'link', actionKind: 'link' as const },
    ukgCommonsMobileAppLink: { strategy: 'role' as const, value: 'UKG Commons mobile app now available', role: 'link', actionKind: 'link' as const },
    whatSecuritySeesSometimes: { strategy: 'altText' as const, value: 'What Security Sees: Sometimes thinking like a cybercriminal starts with “update now”', actionKind: 'generic' as const },
    disabilityINJuly2026: { strategy: 'altText' as const, value: 'DisabilityIN July 2026', actionKind: 'generic' as const },
    peopleUkgAdapt: { strategy: 'role' as const, value: 'People: UKG Adapt', role: 'link', actionKind: 'link' as const },
    photoOfTheWeekPhotoOfTheWeekTakeYourC: { strategy: 'role' as const, value: 'Photo of the Week: Take Your Child to Work Day', role: 'link', actionKind: 'link' as const },
    doNotEngageWithLink: { strategy: 'text' as const, value: 'Do not engage with unsolicited Teams calls or suspicious emails', actionKind: 'link' as const },
    englishUnitedStates: { strategy: 'css' as const, value: '#language-switcher-button', actionKind: 'button' as const },
    chat: { strategy: 'testId' as const, value: 'chat-link', frame: 'iframe#mw4web_iframe', actionKind: 'button' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async getInnerTextViewThisPageIn(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SavedNewsPage.L.viewThisPageIn));
  }

  async expectViewThisPageInVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.viewThisPageIn), timeoutMs, soft);
  }

  async selectTo(value: string): Promise<void> {
    await selectOptionWhenVisible(webLocator(this.page, SavedNewsPage.L.to), value);
  }

  async expectToVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.to), timeoutMs, soft);
  }

  async clickShowCollapsedMenu(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.showCollapsedMenu));
  }

  async doubleClickShowCollapsedMenu(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.showCollapsedMenu));
  }

  async expectShowCollapsedMenuVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.showCollapsedMenu), timeoutMs, soft);
  }

  async clickMySavedNews(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.mySavedNews));
  }

  async doubleClickMySavedNews(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.mySavedNews));
  }

  async expectMySavedNewsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.mySavedNews), timeoutMs, soft);
  }

  async clickNoNews(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.noNews));
  }

  async expectNoNewsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.noNews), timeoutMs, soft);
  }

  async getInnerTextNoSavedNews(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SavedNewsPage.L.noSavedNews));
  }

  async expectNoSavedNewsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.noSavedNews), timeoutMs, soft);
  }

  async getInnerTextFeatured(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SavedNewsPage.L.featured));
  }

  async expectFeaturedVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.featured), timeoutMs, soft);
  }

  async clickSwitchToPreviousNews(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.switchToPreviousNews));
  }

  async doubleClickSwitchToPreviousNews(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.switchToPreviousNews));
  }

  async expectSwitchToPreviousNewsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.switchToPreviousNews), timeoutMs, soft);
  }

  async getInnerTextAi(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SavedNewsPage.L.ai));
  }

  async expectAiVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.ai), timeoutMs, soft);
  }

  async clickSaveNews(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.saveNews));
  }

  async doubleClickSaveNews(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.saveNews));
  }

  async expectSaveNewsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.saveNews), timeoutMs, soft);
  }

  async clickTakeTheNextStep(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStep));
  }

  async expectTakeTheNextStepVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStep), timeoutMs, soft);
  }

  async getInnerTextTakeTheNextStep2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStep2));
  }

  async expectTakeTheNextStep2Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStep2), timeoutMs, soft);
  }

  async getInnerTextStacyCutrono(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SavedNewsPage.L.stacyCutrono));
  }

  async expectStacyCutronoVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.stacyCutrono), timeoutMs, soft);
  }

  async clickAllEmployeeTownHall(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHall));
  }

  async expectAllEmployeeTownHallVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHall), timeoutMs, soft);
  }

  async getInnerTextAshleyAmerson(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SavedNewsPage.L.ashleyAmerson));
  }

  async expectAshleyAmersonVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.ashleyAmerson), timeoutMs, soft);
  }

  async clickCelebratingTheStrengthOf(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOf));
  }

  async expectCelebratingTheStrengthOfVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOf), timeoutMs, soft);
  }

  async getInnerTextCelebratingTheStrengthOf2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOf2));
  }

  async expectCelebratingTheStrengthOf2Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOf2), timeoutMs, soft);
  }

  async getInnerTextChristopherKiklas(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SavedNewsPage.L.christopherKiklas));
  }

  async expectChristopherKiklasVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.christopherKiklas), timeoutMs, soft);
  }

  async clickPrideMonth2026Together(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.prideMonth2026Together));
  }

  async expectPrideMonth2026TogetherVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.prideMonth2026Together), timeoutMs, soft);
  }

  async getInnerTextPrideMonth2026Together2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SavedNewsPage.L.prideMonth2026Together2));
  }

  async expectPrideMonth2026Together2Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.prideMonth2026Together2), timeoutMs, soft);
  }

  async getInnerTextSequoyaFord(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SavedNewsPage.L.sequoyaFord));
  }

  async expectSequoyaFordVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.sequoyaFord), timeoutMs, soft);
  }

  async clickGlobalImpactInAction(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.globalImpactInAction));
  }

  async expectGlobalImpactInActionVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.globalImpactInAction), timeoutMs, soft);
  }

  async getInnerTextGlobalImpactInAction2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SavedNewsPage.L.globalImpactInAction2));
  }

  async expectGlobalImpactInAction2Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.globalImpactInAction2), timeoutMs, soft);
  }

  async getInnerTextSarahMarks(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SavedNewsPage.L.sarahMarks));
  }

  async expectSarahMarksVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.sarahMarks), timeoutMs, soft);
  }

  async clickCelebratingOneYearOf(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.celebratingOneYearOf));
  }

  async expectCelebratingOneYearOfVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.celebratingOneYearOf), timeoutMs, soft);
  }

  async getInnerTextCelebratingOneYearOf2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SavedNewsPage.L.celebratingOneYearOf2));
  }

  async expectCelebratingOneYearOf2Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.celebratingOneYearOf2), timeoutMs, soft);
  }

  async getInnerTextBrianBower(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SavedNewsPage.L.brianBower));
  }

  async expectBrianBowerVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.brianBower), timeoutMs, soft);
  }

  async clickSwitchToNextNews(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.switchToNextNews));
  }

  async doubleClickSwitchToNextNews(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.switchToNextNews));
  }

  async expectSwitchToNextNewsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.switchToNextNews), timeoutMs, soft);
  }

  async getInnerTextLatestNews(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SavedNewsPage.L.latestNews));
  }

  async expectLatestNewsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.latestNews), timeoutMs, soft);
  }

  async clickSeeAll(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.seeAll));
  }

  async doubleClickSeeAll(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.seeAll));
  }

  async expectSeeAllVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.seeAll), timeoutMs, soft);
  }

  async clickWebinarFeaturingUkgCustomer(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomer));
  }

  async expectWebinarFeaturingUkgCustomerVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomer), timeoutMs, soft);
  }

  async clickGtmMarketing(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.gtmMarketing));
  }

  async expectGtmMarketingVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.gtmMarketing), timeoutMs, soft);
  }

  async clickWebinarFeaturingUkgCustomerLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerLink));
  }

  async expectWebinarFeaturingUkgCustomerLinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerLink), timeoutMs, soft);
  }

  async clickComment(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.comment));
  }

  async expectCommentVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.comment), timeoutMs, soft);
  }

  async clickGtm(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.gtm));
  }

  async expectGtmVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.gtm), timeoutMs, soft);
  }

  async clickQ3FY26SalesRecognitionLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.q3FY26SalesRecognitionLink));
  }

  async expectQ3FY26SalesRecognitionLinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.q3FY26SalesRecognitionLink), timeoutMs, soft);
  }

  async clickTheRoleOfHrLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.theRoleOfHrLink));
  }

  async expectTheRoleOfHrLinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.theRoleOfHrLink), timeoutMs, soft);
  }

  async clickJulySocialSellingUpdatesLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.julySocialSellingUpdatesLink));
  }

  async expectJulySocialSellingUpdatesLinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.julySocialSellingUpdatesLink), timeoutMs, soft);
  }

  async clickWhatSecuritySeesGood(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesGood));
  }

  async expectWhatSecuritySeesGoodVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesGood), timeoutMs, soft);
  }

  async clickProductEngineeringGlobal(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.productEngineeringGlobal));
  }

  async expectProductEngineeringGlobalVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.productEngineeringGlobal), timeoutMs, soft);
  }

  async clickWhatSecuritySeesGoodLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesGoodLink));
  }

  async expectWhatSecuritySeesGoodLinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesGoodLink), timeoutMs, soft);
  }

  async clickBuildNewsletterJuly(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.buildNewsletterJuly));
  }

  async expectBuildNewsletterJulyVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.buildNewsletterJuly), timeoutMs, soft);
  }

  async clickPeopleUkgBuild(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.peopleUkgBuild));
  }

  async expectPeopleUkgBuildVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.peopleUkgBuild), timeoutMs, soft);
  }

  async clickLegalRiskCompliance(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.legalRiskCompliance));
  }

  async expectLegalRiskComplianceVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.legalRiskCompliance), timeoutMs, soft);
  }

  async clickPolicyGovernanceAtUkgLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.policyGovernanceAtUkgLink));
  }

  async expectPolicyGovernanceAtUkgLinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.policyGovernanceAtUkgLink), timeoutMs, soft);
  }

  async clickInsideUkg(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.insideUkg));
  }

  async expectInsideUkgVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.insideUkg), timeoutMs, soft);
  }

  async clickPhotoOfTheWeekLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.photoOfTheWeekLink));
  }

  async expectPhotoOfTheWeekLinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.photoOfTheWeekLink), timeoutMs, soft);
  }

  async clickAiHub(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.aiHub));
  }

  async expectAiHubVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.aiHub), timeoutMs, soft);
  }

  async clickAgencyUAgentAThonMovesIntoLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.agencyUAgentAThonMovesIntoLink));
  }

  async expectAgencyUAgentAThonMovesIntoLinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.agencyUAgentAThonMovesIntoLink), timeoutMs, soft);
  }

  async clickNewForresterTotalEconomic(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.newForresterTotalEconomic));
  }

  async expectNewForresterTotalEconomicVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.newForresterTotalEconomic), timeoutMs, soft);
  }

  async clickNewForresterTotalEconomicLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.newForresterTotalEconomicLink));
  }

  async expectNewForresterTotalEconomicLinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.newForresterTotalEconomicLink), timeoutMs, soft);
  }

  async clickJuly2026HealthAwareness(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.july2026HealthAwareness));
  }

  async expectJuly2026HealthAwarenessVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.july2026HealthAwareness), timeoutMs, soft);
  }

  async clickPeopleUkgCares(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.peopleUkgCares));
  }

  async expectPeopleUkgCaresVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.peopleUkgCares), timeoutMs, soft);
  }

  async clickEmployeeResourceGroupErg(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.employeeResourceGroupErg));
  }

  async expectEmployeeResourceGroupErgVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.employeeResourceGroupErg), timeoutMs, soft);
  }

  async clickPeopleBelongingImpact(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.peopleBelongingImpact));
  }

  async expectPeopleBelongingImpactVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.peopleBelongingImpact), timeoutMs, soft);
  }

  async clickUkgRiseEarlyCareerLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.ukgRiseEarlyCareerLink));
  }

  async expectUkgRiseEarlyCareerLinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.ukgRiseEarlyCareerLink), timeoutMs, soft);
  }

  async clickGlobalSecurityManagedVault(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.globalSecurityManagedVault));
  }

  async expectGlobalSecurityManagedVaultVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.globalSecurityManagedVault), timeoutMs, soft);
  }

  async clickGlobalSecurityManagedVaultLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.globalSecurityManagedVaultLink));
  }

  async expectGlobalSecurityManagedVaultLinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.globalSecurityManagedVaultLink), timeoutMs, soft);
  }

  async clickBaselineImagesRequiredFor(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.baselineImagesRequiredFor));
  }

  async expectBaselineImagesRequiredForVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.baselineImagesRequiredFor), timeoutMs, soft);
  }

  async clickCommsEmployeeCommunications(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.commsEmployeeCommunications));
  }

  async expectCommsEmployeeCommunicationsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.commsEmployeeCommunications), timeoutMs, soft);
  }

  async clickUkgCommonsMobileAppLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.ukgCommonsMobileAppLink));
  }

  async expectUkgCommonsMobileAppLinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.ukgCommonsMobileAppLink), timeoutMs, soft);
  }

  async clickWhatSecuritySeesSometimes(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesSometimes));
  }

  async expectWhatSecuritySeesSometimesVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesSometimes), timeoutMs, soft);
  }

  async clickDisabilityINJuly2026(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.disabilityINJuly2026));
  }

  async expectDisabilityINJuly2026Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.disabilityINJuly2026), timeoutMs, soft);
  }

  async clickPeopleUkgAdapt(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.peopleUkgAdapt));
  }

  async expectPeopleUkgAdaptVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.peopleUkgAdapt), timeoutMs, soft);
  }

  async clickPhotoOfTheWeekPhotoOfTheWeekTakeYourC(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.photoOfTheWeekPhotoOfTheWeekTakeYourC));
  }

  async expectPhotoOfTheWeekPhotoOfTheWeekTakeYourCVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.photoOfTheWeekPhotoOfTheWeekTakeYourC), timeoutMs, soft);
  }

  async clickDoNotEngageWithLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.doNotEngageWithLink));
  }

  async expectDoNotEngageWithLinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.doNotEngageWithLink), timeoutMs, soft);
  }

  async clickEnglishUnitedStates(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.englishUnitedStates));
  }

  async doubleClickEnglishUnitedStates(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.englishUnitedStates));
  }

  async expectEnglishUnitedStatesVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.englishUnitedStates), timeoutMs, soft);
  }

  async clickChat(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.chat));
  }

  async doubleClickChat(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.chat));
  }

  async expectChatVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.chat), timeoutMs, soft);
  }

  async getPageTitle(): Promise<string> {
    return this.page.title();
  }

  /** Assert page title matches an expected string or regex. */
  async expectPageTitle(expected: string | RegExp, timeoutMs = 30_000): Promise<void> {
    await expectPageTitle(this.page, expected, timeoutMs);
  }

  /** Verify we are on the correct page using the title captured at record time. */
  async verifyOnPage(timeoutMs = 30_000): Promise<void> {
    await expectPageTitle(this.page, 'UKG Commons', timeoutMs);
  }


  async clickViewThisPageIn(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.viewThisPageIn));
  }

  async doubleClickViewThisPageIn(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.viewThisPageIn));
  }

  async longPressViewThisPageIn(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.viewThisPageIn));
  }

  async expectViewThisPageInHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.viewThisPageIn), timeoutMs);
  }

  async expectViewThisPageInText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.viewThisPageIn), expected, timeoutMs);
  }

  async expectViewThisPageInContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.viewThisPageIn), substring, timeoutMs);
  }

  async expectViewThisPageInValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.viewThisPageIn), value, timeoutMs);
  }

  async expectViewThisPageInEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.viewThisPageIn), timeoutMs);
  }

  async expectViewThisPageInDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.viewThisPageIn), timeoutMs);
  }

  async expectViewThisPageInChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.viewThisPageIn), timeoutMs);
  }

  async expectViewThisPageInUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.viewThisPageIn), timeoutMs);
  }

  async expectViewThisPageInFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.viewThisPageIn), timeoutMs);
  }

  async expectViewThisPageInCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.viewThisPageIn), count, timeoutMs);
  }

  async scrollViewThisPageInIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.viewThisPageIn));
  }

  async expectToHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.to), timeoutMs);
  }

  async expectToText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.to), expected, timeoutMs);
  }

  async expectToContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.to), substring, timeoutMs);
  }

  async expectToValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.to), value, timeoutMs);
  }

  async expectToEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.to), timeoutMs);
  }

  async expectToDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.to), timeoutMs);
  }

  async expectToChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.to), timeoutMs);
  }

  async expectToUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.to), timeoutMs);
  }

  async expectToFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.to), timeoutMs);
  }

  async expectToCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.to), count, timeoutMs);
  }

  async scrollToIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.to));
  }

  async longPressShowCollapsedMenu(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.showCollapsedMenu));
  }

  async expectShowCollapsedMenuHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.showCollapsedMenu), timeoutMs);
  }

  async expectShowCollapsedMenuText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.showCollapsedMenu), expected, timeoutMs);
  }

  async expectShowCollapsedMenuContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.showCollapsedMenu), substring, timeoutMs);
  }

  async expectShowCollapsedMenuValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.showCollapsedMenu), value, timeoutMs);
  }

  async expectShowCollapsedMenuEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.showCollapsedMenu), timeoutMs);
  }

  async expectShowCollapsedMenuDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.showCollapsedMenu), timeoutMs);
  }

  async expectShowCollapsedMenuChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.showCollapsedMenu), timeoutMs);
  }

  async expectShowCollapsedMenuUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.showCollapsedMenu), timeoutMs);
  }

  async expectShowCollapsedMenuFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.showCollapsedMenu), timeoutMs);
  }

  async expectShowCollapsedMenuCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.showCollapsedMenu), count, timeoutMs);
  }

  async scrollShowCollapsedMenuIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.showCollapsedMenu));
  }

  async longPressMySavedNews(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.mySavedNews));
  }

  async expectMySavedNewsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.mySavedNews), timeoutMs);
  }

  async expectMySavedNewsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.mySavedNews), expected, timeoutMs);
  }

  async expectMySavedNewsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.mySavedNews), substring, timeoutMs);
  }

  async expectMySavedNewsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.mySavedNews), value, timeoutMs);
  }

  async expectMySavedNewsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.mySavedNews), timeoutMs);
  }

  async expectMySavedNewsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.mySavedNews), timeoutMs);
  }

  async expectMySavedNewsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.mySavedNews), timeoutMs);
  }

  async expectMySavedNewsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.mySavedNews), timeoutMs);
  }

  async expectMySavedNewsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.mySavedNews), timeoutMs);
  }

  async expectMySavedNewsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.mySavedNews), count, timeoutMs);
  }

  async scrollMySavedNewsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.mySavedNews));
  }

  async doubleClickNoNews(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.noNews));
  }

  async longPressNoNews(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.noNews));
  }

  async expectNoNewsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.noNews), timeoutMs);
  }

  async expectNoNewsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.noNews), expected, timeoutMs);
  }

  async expectNoNewsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.noNews), substring, timeoutMs);
  }

  async expectNoNewsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.noNews), value, timeoutMs);
  }

  async expectNoNewsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.noNews), timeoutMs);
  }

  async expectNoNewsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.noNews), timeoutMs);
  }

  async expectNoNewsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.noNews), timeoutMs);
  }

  async expectNoNewsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.noNews), timeoutMs);
  }

  async expectNoNewsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.noNews), timeoutMs);
  }

  async expectNoNewsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.noNews), count, timeoutMs);
  }

  async scrollNoNewsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.noNews));
  }

  async clickNoSavedNews(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.noSavedNews));
  }

  async doubleClickNoSavedNews(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.noSavedNews));
  }

  async longPressNoSavedNews(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.noSavedNews));
  }

  async expectNoSavedNewsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.noSavedNews), timeoutMs);
  }

  async expectNoSavedNewsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.noSavedNews), expected, timeoutMs);
  }

  async expectNoSavedNewsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.noSavedNews), substring, timeoutMs);
  }

  async expectNoSavedNewsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.noSavedNews), value, timeoutMs);
  }

  async expectNoSavedNewsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.noSavedNews), timeoutMs);
  }

  async expectNoSavedNewsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.noSavedNews), timeoutMs);
  }

  async expectNoSavedNewsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.noSavedNews), timeoutMs);
  }

  async expectNoSavedNewsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.noSavedNews), timeoutMs);
  }

  async expectNoSavedNewsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.noSavedNews), timeoutMs);
  }

  async expectNoSavedNewsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.noSavedNews), count, timeoutMs);
  }

  async scrollNoSavedNewsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.noSavedNews));
  }

  async clickFeatured(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.featured));
  }

  async doubleClickFeatured(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.featured));
  }

  async longPressFeatured(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.featured));
  }

  async expectFeaturedHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.featured), timeoutMs);
  }

  async expectFeaturedText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.featured), expected, timeoutMs);
  }

  async expectFeaturedContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.featured), substring, timeoutMs);
  }

  async expectFeaturedValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.featured), value, timeoutMs);
  }

  async expectFeaturedEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.featured), timeoutMs);
  }

  async expectFeaturedDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.featured), timeoutMs);
  }

  async expectFeaturedChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.featured), timeoutMs);
  }

  async expectFeaturedUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.featured), timeoutMs);
  }

  async expectFeaturedFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.featured), timeoutMs);
  }

  async expectFeaturedCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.featured), count, timeoutMs);
  }

  async scrollFeaturedIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.featured));
  }

  async longPressSwitchToPreviousNews(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.switchToPreviousNews));
  }

  async expectSwitchToPreviousNewsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.switchToPreviousNews), timeoutMs);
  }

  async expectSwitchToPreviousNewsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.switchToPreviousNews), expected, timeoutMs);
  }

  async expectSwitchToPreviousNewsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.switchToPreviousNews), substring, timeoutMs);
  }

  async expectSwitchToPreviousNewsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.switchToPreviousNews), value, timeoutMs);
  }

  async expectSwitchToPreviousNewsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.switchToPreviousNews), timeoutMs);
  }

  async expectSwitchToPreviousNewsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.switchToPreviousNews), timeoutMs);
  }

  async expectSwitchToPreviousNewsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.switchToPreviousNews), timeoutMs);
  }

  async expectSwitchToPreviousNewsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.switchToPreviousNews), timeoutMs);
  }

  async expectSwitchToPreviousNewsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.switchToPreviousNews), timeoutMs);
  }

  async expectSwitchToPreviousNewsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.switchToPreviousNews), count, timeoutMs);
  }

  async scrollSwitchToPreviousNewsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.switchToPreviousNews));
  }

  async clickAi(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.ai));
  }

  async doubleClickAi(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.ai));
  }

  async longPressAi(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.ai));
  }

  async expectAiHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.ai), timeoutMs);
  }

  async expectAiText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.ai), expected, timeoutMs);
  }

  async expectAiContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.ai), substring, timeoutMs);
  }

  async expectAiValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.ai), value, timeoutMs);
  }

  async expectAiEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.ai), timeoutMs);
  }

  async expectAiDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.ai), timeoutMs);
  }

  async expectAiChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.ai), timeoutMs);
  }

  async expectAiUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.ai), timeoutMs);
  }

  async expectAiFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.ai), timeoutMs);
  }

  async expectAiCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.ai), count, timeoutMs);
  }

  async scrollAiIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.ai));
  }

  async longPressSaveNews(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.saveNews));
  }

  async expectSaveNewsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.saveNews), timeoutMs);
  }

  async expectSaveNewsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.saveNews), expected, timeoutMs);
  }

  async expectSaveNewsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.saveNews), substring, timeoutMs);
  }

  async expectSaveNewsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.saveNews), value, timeoutMs);
  }

  async expectSaveNewsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.saveNews), timeoutMs);
  }

  async expectSaveNewsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.saveNews), timeoutMs);
  }

  async expectSaveNewsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.saveNews), timeoutMs);
  }

  async expectSaveNewsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.saveNews), timeoutMs);
  }

  async expectSaveNewsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.saveNews), timeoutMs);
  }

  async expectSaveNewsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.saveNews), count, timeoutMs);
  }

  async scrollSaveNewsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.saveNews));
  }

  async doubleClickTakeTheNextStep(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStep));
  }

  async longPressTakeTheNextStep(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStep));
  }

  async expectTakeTheNextStepHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.takeTheNextStep), timeoutMs);
  }

  async expectTakeTheNextStepText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.takeTheNextStep), expected, timeoutMs);
  }

  async expectTakeTheNextStepContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.takeTheNextStep), substring, timeoutMs);
  }

  async expectTakeTheNextStepValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.takeTheNextStep), value, timeoutMs);
  }

  async expectTakeTheNextStepEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.takeTheNextStep), timeoutMs);
  }

  async expectTakeTheNextStepDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.takeTheNextStep), timeoutMs);
  }

  async expectTakeTheNextStepChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.takeTheNextStep), timeoutMs);
  }

  async expectTakeTheNextStepUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.takeTheNextStep), timeoutMs);
  }

  async expectTakeTheNextStepFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.takeTheNextStep), timeoutMs);
  }

  async expectTakeTheNextStepCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.takeTheNextStep), count, timeoutMs);
  }

  async scrollTakeTheNextStepIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStep));
  }

  async clickTakeTheNextStep2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStep2));
  }

  async doubleClickTakeTheNextStep2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStep2));
  }

  async longPressTakeTheNextStep2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStep2));
  }

  async expectTakeTheNextStep2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.takeTheNextStep2), timeoutMs);
  }

  async expectTakeTheNextStep2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.takeTheNextStep2), expected, timeoutMs);
  }

  async expectTakeTheNextStep2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.takeTheNextStep2), substring, timeoutMs);
  }

  async expectTakeTheNextStep2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.takeTheNextStep2), value, timeoutMs);
  }

  async expectTakeTheNextStep2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.takeTheNextStep2), timeoutMs);
  }

  async expectTakeTheNextStep2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.takeTheNextStep2), timeoutMs);
  }

  async expectTakeTheNextStep2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.takeTheNextStep2), timeoutMs);
  }

  async expectTakeTheNextStep2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.takeTheNextStep2), timeoutMs);
  }

  async expectTakeTheNextStep2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.takeTheNextStep2), timeoutMs);
  }

  async expectTakeTheNextStep2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.takeTheNextStep2), count, timeoutMs);
  }

  async scrollTakeTheNextStep2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStep2));
  }

  async clickStacyCutrono(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.stacyCutrono));
  }

  async doubleClickStacyCutrono(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.stacyCutrono));
  }

  async longPressStacyCutrono(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.stacyCutrono));
  }

  async expectStacyCutronoHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.stacyCutrono), timeoutMs);
  }

  async expectStacyCutronoText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.stacyCutrono), expected, timeoutMs);
  }

  async expectStacyCutronoContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.stacyCutrono), substring, timeoutMs);
  }

  async expectStacyCutronoValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.stacyCutrono), value, timeoutMs);
  }

  async expectStacyCutronoEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.stacyCutrono), timeoutMs);
  }

  async expectStacyCutronoDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.stacyCutrono), timeoutMs);
  }

  async expectStacyCutronoChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.stacyCutrono), timeoutMs);
  }

  async expectStacyCutronoUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.stacyCutrono), timeoutMs);
  }

  async expectStacyCutronoFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.stacyCutrono), timeoutMs);
  }

  async expectStacyCutronoCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.stacyCutrono), count, timeoutMs);
  }

  async scrollStacyCutronoIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.stacyCutrono));
  }

  async doubleClickAllEmployeeTownHall(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHall));
  }

  async longPressAllEmployeeTownHall(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHall));
  }

  async expectAllEmployeeTownHallHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHall), timeoutMs);
  }

  async expectAllEmployeeTownHallText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHall), expected, timeoutMs);
  }

  async expectAllEmployeeTownHallContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHall), substring, timeoutMs);
  }

  async expectAllEmployeeTownHallValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHall), value, timeoutMs);
  }

  async expectAllEmployeeTownHallEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHall), timeoutMs);
  }

  async expectAllEmployeeTownHallDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHall), timeoutMs);
  }

  async expectAllEmployeeTownHallChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHall), timeoutMs);
  }

  async expectAllEmployeeTownHallUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHall), timeoutMs);
  }

  async expectAllEmployeeTownHallFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHall), timeoutMs);
  }

  async expectAllEmployeeTownHallCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHall), count, timeoutMs);
  }

  async scrollAllEmployeeTownHallIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHall));
  }

  async clickAshleyAmerson(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.ashleyAmerson));
  }

  async doubleClickAshleyAmerson(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.ashleyAmerson));
  }

  async longPressAshleyAmerson(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.ashleyAmerson));
  }

  async expectAshleyAmersonHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.ashleyAmerson), timeoutMs);
  }

  async expectAshleyAmersonText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.ashleyAmerson), expected, timeoutMs);
  }

  async expectAshleyAmersonContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.ashleyAmerson), substring, timeoutMs);
  }

  async expectAshleyAmersonValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.ashleyAmerson), value, timeoutMs);
  }

  async expectAshleyAmersonEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.ashleyAmerson), timeoutMs);
  }

  async expectAshleyAmersonDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.ashleyAmerson), timeoutMs);
  }

  async expectAshleyAmersonChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.ashleyAmerson), timeoutMs);
  }

  async expectAshleyAmersonUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.ashleyAmerson), timeoutMs);
  }

  async expectAshleyAmersonFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.ashleyAmerson), timeoutMs);
  }

  async expectAshleyAmersonCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.ashleyAmerson), count, timeoutMs);
  }

  async scrollAshleyAmersonIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.ashleyAmerson));
  }

  async doubleClickCelebratingTheStrengthOf(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOf));
  }

  async longPressCelebratingTheStrengthOf(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOf));
  }

  async expectCelebratingTheStrengthOfHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOf), timeoutMs);
  }

  async expectCelebratingTheStrengthOfText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOf), expected, timeoutMs);
  }

  async expectCelebratingTheStrengthOfContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOf), substring, timeoutMs);
  }

  async expectCelebratingTheStrengthOfValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOf), value, timeoutMs);
  }

  async expectCelebratingTheStrengthOfEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOf), timeoutMs);
  }

  async expectCelebratingTheStrengthOfDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOf), timeoutMs);
  }

  async expectCelebratingTheStrengthOfChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOf), timeoutMs);
  }

  async expectCelebratingTheStrengthOfUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOf), timeoutMs);
  }

  async expectCelebratingTheStrengthOfFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOf), timeoutMs);
  }

  async expectCelebratingTheStrengthOfCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOf), count, timeoutMs);
  }

  async scrollCelebratingTheStrengthOfIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOf));
  }

  async clickCelebratingTheStrengthOf2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOf2));
  }

  async doubleClickCelebratingTheStrengthOf2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOf2));
  }

  async longPressCelebratingTheStrengthOf2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOf2));
  }

  async expectCelebratingTheStrengthOf2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOf2), timeoutMs);
  }

  async expectCelebratingTheStrengthOf2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOf2), expected, timeoutMs);
  }

  async expectCelebratingTheStrengthOf2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOf2), substring, timeoutMs);
  }

  async expectCelebratingTheStrengthOf2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOf2), value, timeoutMs);
  }

  async expectCelebratingTheStrengthOf2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOf2), timeoutMs);
  }

  async expectCelebratingTheStrengthOf2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOf2), timeoutMs);
  }

  async expectCelebratingTheStrengthOf2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOf2), timeoutMs);
  }

  async expectCelebratingTheStrengthOf2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOf2), timeoutMs);
  }

  async expectCelebratingTheStrengthOf2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOf2), timeoutMs);
  }

  async expectCelebratingTheStrengthOf2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOf2), count, timeoutMs);
  }

  async scrollCelebratingTheStrengthOf2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOf2));
  }

  async clickChristopherKiklas(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.christopherKiklas));
  }

  async doubleClickChristopherKiklas(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.christopherKiklas));
  }

  async longPressChristopherKiklas(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.christopherKiklas));
  }

  async expectChristopherKiklasHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.christopherKiklas), timeoutMs);
  }

  async expectChristopherKiklasText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.christopherKiklas), expected, timeoutMs);
  }

  async expectChristopherKiklasContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.christopherKiklas), substring, timeoutMs);
  }

  async expectChristopherKiklasValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.christopherKiklas), value, timeoutMs);
  }

  async expectChristopherKiklasEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.christopherKiklas), timeoutMs);
  }

  async expectChristopherKiklasDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.christopherKiklas), timeoutMs);
  }

  async expectChristopherKiklasChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.christopherKiklas), timeoutMs);
  }

  async expectChristopherKiklasUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.christopherKiklas), timeoutMs);
  }

  async expectChristopherKiklasFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.christopherKiklas), timeoutMs);
  }

  async expectChristopherKiklasCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.christopherKiklas), count, timeoutMs);
  }

  async scrollChristopherKiklasIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.christopherKiklas));
  }

  async doubleClickPrideMonth2026Together(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.prideMonth2026Together));
  }

  async longPressPrideMonth2026Together(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.prideMonth2026Together));
  }

  async expectPrideMonth2026TogetherHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.prideMonth2026Together), timeoutMs);
  }

  async expectPrideMonth2026TogetherText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.prideMonth2026Together), expected, timeoutMs);
  }

  async expectPrideMonth2026TogetherContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.prideMonth2026Together), substring, timeoutMs);
  }

  async expectPrideMonth2026TogetherValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.prideMonth2026Together), value, timeoutMs);
  }

  async expectPrideMonth2026TogetherEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.prideMonth2026Together), timeoutMs);
  }

  async expectPrideMonth2026TogetherDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.prideMonth2026Together), timeoutMs);
  }

  async expectPrideMonth2026TogetherChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.prideMonth2026Together), timeoutMs);
  }

  async expectPrideMonth2026TogetherUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.prideMonth2026Together), timeoutMs);
  }

  async expectPrideMonth2026TogetherFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.prideMonth2026Together), timeoutMs);
  }

  async expectPrideMonth2026TogetherCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.prideMonth2026Together), count, timeoutMs);
  }

  async scrollPrideMonth2026TogetherIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.prideMonth2026Together));
  }

  async clickPrideMonth2026Together2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.prideMonth2026Together2));
  }

  async doubleClickPrideMonth2026Together2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.prideMonth2026Together2));
  }

  async longPressPrideMonth2026Together2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.prideMonth2026Together2));
  }

  async expectPrideMonth2026Together2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.prideMonth2026Together2), timeoutMs);
  }

  async expectPrideMonth2026Together2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.prideMonth2026Together2), expected, timeoutMs);
  }

  async expectPrideMonth2026Together2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.prideMonth2026Together2), substring, timeoutMs);
  }

  async expectPrideMonth2026Together2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.prideMonth2026Together2), value, timeoutMs);
  }

  async expectPrideMonth2026Together2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.prideMonth2026Together2), timeoutMs);
  }

  async expectPrideMonth2026Together2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.prideMonth2026Together2), timeoutMs);
  }

  async expectPrideMonth2026Together2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.prideMonth2026Together2), timeoutMs);
  }

  async expectPrideMonth2026Together2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.prideMonth2026Together2), timeoutMs);
  }

  async expectPrideMonth2026Together2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.prideMonth2026Together2), timeoutMs);
  }

  async expectPrideMonth2026Together2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.prideMonth2026Together2), count, timeoutMs);
  }

  async scrollPrideMonth2026Together2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.prideMonth2026Together2));
  }

  async clickSequoyaFord(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.sequoyaFord));
  }

  async doubleClickSequoyaFord(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.sequoyaFord));
  }

  async longPressSequoyaFord(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.sequoyaFord));
  }

  async expectSequoyaFordHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.sequoyaFord), timeoutMs);
  }

  async expectSequoyaFordText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.sequoyaFord), expected, timeoutMs);
  }

  async expectSequoyaFordContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.sequoyaFord), substring, timeoutMs);
  }

  async expectSequoyaFordValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.sequoyaFord), value, timeoutMs);
  }

  async expectSequoyaFordEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.sequoyaFord), timeoutMs);
  }

  async expectSequoyaFordDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.sequoyaFord), timeoutMs);
  }

  async expectSequoyaFordChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.sequoyaFord), timeoutMs);
  }

  async expectSequoyaFordUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.sequoyaFord), timeoutMs);
  }

  async expectSequoyaFordFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.sequoyaFord), timeoutMs);
  }

  async expectSequoyaFordCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.sequoyaFord), count, timeoutMs);
  }

  async scrollSequoyaFordIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.sequoyaFord));
  }

  async doubleClickGlobalImpactInAction(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.globalImpactInAction));
  }

  async longPressGlobalImpactInAction(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.globalImpactInAction));
  }

  async expectGlobalImpactInActionHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.globalImpactInAction), timeoutMs);
  }

  async expectGlobalImpactInActionText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.globalImpactInAction), expected, timeoutMs);
  }

  async expectGlobalImpactInActionContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.globalImpactInAction), substring, timeoutMs);
  }

  async expectGlobalImpactInActionValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.globalImpactInAction), value, timeoutMs);
  }

  async expectGlobalImpactInActionEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.globalImpactInAction), timeoutMs);
  }

  async expectGlobalImpactInActionDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.globalImpactInAction), timeoutMs);
  }

  async expectGlobalImpactInActionChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.globalImpactInAction), timeoutMs);
  }

  async expectGlobalImpactInActionUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.globalImpactInAction), timeoutMs);
  }

  async expectGlobalImpactInActionFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.globalImpactInAction), timeoutMs);
  }

  async expectGlobalImpactInActionCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.globalImpactInAction), count, timeoutMs);
  }

  async scrollGlobalImpactInActionIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.globalImpactInAction));
  }

  async clickGlobalImpactInAction2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.globalImpactInAction2));
  }

  async doubleClickGlobalImpactInAction2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.globalImpactInAction2));
  }

  async longPressGlobalImpactInAction2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.globalImpactInAction2));
  }

  async expectGlobalImpactInAction2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.globalImpactInAction2), timeoutMs);
  }

  async expectGlobalImpactInAction2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.globalImpactInAction2), expected, timeoutMs);
  }

  async expectGlobalImpactInAction2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.globalImpactInAction2), substring, timeoutMs);
  }

  async expectGlobalImpactInAction2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.globalImpactInAction2), value, timeoutMs);
  }

  async expectGlobalImpactInAction2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.globalImpactInAction2), timeoutMs);
  }

  async expectGlobalImpactInAction2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.globalImpactInAction2), timeoutMs);
  }

  async expectGlobalImpactInAction2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.globalImpactInAction2), timeoutMs);
  }

  async expectGlobalImpactInAction2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.globalImpactInAction2), timeoutMs);
  }

  async expectGlobalImpactInAction2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.globalImpactInAction2), timeoutMs);
  }

  async expectGlobalImpactInAction2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.globalImpactInAction2), count, timeoutMs);
  }

  async scrollGlobalImpactInAction2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.globalImpactInAction2));
  }

  async clickSarahMarks(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.sarahMarks));
  }

  async doubleClickSarahMarks(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.sarahMarks));
  }

  async longPressSarahMarks(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.sarahMarks));
  }

  async expectSarahMarksHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.sarahMarks), timeoutMs);
  }

  async expectSarahMarksText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.sarahMarks), expected, timeoutMs);
  }

  async expectSarahMarksContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.sarahMarks), substring, timeoutMs);
  }

  async expectSarahMarksValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.sarahMarks), value, timeoutMs);
  }

  async expectSarahMarksEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.sarahMarks), timeoutMs);
  }

  async expectSarahMarksDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.sarahMarks), timeoutMs);
  }

  async expectSarahMarksChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.sarahMarks), timeoutMs);
  }

  async expectSarahMarksUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.sarahMarks), timeoutMs);
  }

  async expectSarahMarksFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.sarahMarks), timeoutMs);
  }

  async expectSarahMarksCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.sarahMarks), count, timeoutMs);
  }

  async scrollSarahMarksIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.sarahMarks));
  }

  async doubleClickCelebratingOneYearOf(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.celebratingOneYearOf));
  }

  async longPressCelebratingOneYearOf(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.celebratingOneYearOf));
  }

  async expectCelebratingOneYearOfHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.celebratingOneYearOf), timeoutMs);
  }

  async expectCelebratingOneYearOfText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.celebratingOneYearOf), expected, timeoutMs);
  }

  async expectCelebratingOneYearOfContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.celebratingOneYearOf), substring, timeoutMs);
  }

  async expectCelebratingOneYearOfValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.celebratingOneYearOf), value, timeoutMs);
  }

  async expectCelebratingOneYearOfEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.celebratingOneYearOf), timeoutMs);
  }

  async expectCelebratingOneYearOfDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.celebratingOneYearOf), timeoutMs);
  }

  async expectCelebratingOneYearOfChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.celebratingOneYearOf), timeoutMs);
  }

  async expectCelebratingOneYearOfUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.celebratingOneYearOf), timeoutMs);
  }

  async expectCelebratingOneYearOfFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.celebratingOneYearOf), timeoutMs);
  }

  async expectCelebratingOneYearOfCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.celebratingOneYearOf), count, timeoutMs);
  }

  async scrollCelebratingOneYearOfIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.celebratingOneYearOf));
  }

  async clickCelebratingOneYearOf2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.celebratingOneYearOf2));
  }

  async doubleClickCelebratingOneYearOf2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.celebratingOneYearOf2));
  }

  async longPressCelebratingOneYearOf2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.celebratingOneYearOf2));
  }

  async expectCelebratingOneYearOf2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.celebratingOneYearOf2), timeoutMs);
  }

  async expectCelebratingOneYearOf2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.celebratingOneYearOf2), expected, timeoutMs);
  }

  async expectCelebratingOneYearOf2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.celebratingOneYearOf2), substring, timeoutMs);
  }

  async expectCelebratingOneYearOf2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.celebratingOneYearOf2), value, timeoutMs);
  }

  async expectCelebratingOneYearOf2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.celebratingOneYearOf2), timeoutMs);
  }

  async expectCelebratingOneYearOf2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.celebratingOneYearOf2), timeoutMs);
  }

  async expectCelebratingOneYearOf2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.celebratingOneYearOf2), timeoutMs);
  }

  async expectCelebratingOneYearOf2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.celebratingOneYearOf2), timeoutMs);
  }

  async expectCelebratingOneYearOf2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.celebratingOneYearOf2), timeoutMs);
  }

  async expectCelebratingOneYearOf2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.celebratingOneYearOf2), count, timeoutMs);
  }

  async scrollCelebratingOneYearOf2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.celebratingOneYearOf2));
  }

  async clickBrianBower(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.brianBower));
  }

  async doubleClickBrianBower(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.brianBower));
  }

  async longPressBrianBower(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.brianBower));
  }

  async expectBrianBowerHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.brianBower), timeoutMs);
  }

  async expectBrianBowerText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.brianBower), expected, timeoutMs);
  }

  async expectBrianBowerContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.brianBower), substring, timeoutMs);
  }

  async expectBrianBowerValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.brianBower), value, timeoutMs);
  }

  async expectBrianBowerEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.brianBower), timeoutMs);
  }

  async expectBrianBowerDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.brianBower), timeoutMs);
  }

  async expectBrianBowerChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.brianBower), timeoutMs);
  }

  async expectBrianBowerUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.brianBower), timeoutMs);
  }

  async expectBrianBowerFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.brianBower), timeoutMs);
  }

  async expectBrianBowerCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.brianBower), count, timeoutMs);
  }

  async scrollBrianBowerIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.brianBower));
  }

  async longPressSwitchToNextNews(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.switchToNextNews));
  }

  async expectSwitchToNextNewsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.switchToNextNews), timeoutMs);
  }

  async expectSwitchToNextNewsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.switchToNextNews), expected, timeoutMs);
  }

  async expectSwitchToNextNewsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.switchToNextNews), substring, timeoutMs);
  }

  async expectSwitchToNextNewsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.switchToNextNews), value, timeoutMs);
  }

  async expectSwitchToNextNewsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.switchToNextNews), timeoutMs);
  }

  async expectSwitchToNextNewsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.switchToNextNews), timeoutMs);
  }

  async expectSwitchToNextNewsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.switchToNextNews), timeoutMs);
  }

  async expectSwitchToNextNewsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.switchToNextNews), timeoutMs);
  }

  async expectSwitchToNextNewsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.switchToNextNews), timeoutMs);
  }

  async expectSwitchToNextNewsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.switchToNextNews), count, timeoutMs);
  }

  async scrollSwitchToNextNewsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.switchToNextNews));
  }

  async clickLatestNews(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.latestNews));
  }

  async doubleClickLatestNews(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.latestNews));
  }

  async longPressLatestNews(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.latestNews));
  }

  async expectLatestNewsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.latestNews), timeoutMs);
  }

  async expectLatestNewsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.latestNews), expected, timeoutMs);
  }

  async expectLatestNewsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.latestNews), substring, timeoutMs);
  }

  async expectLatestNewsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.latestNews), value, timeoutMs);
  }

  async expectLatestNewsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.latestNews), timeoutMs);
  }

  async expectLatestNewsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.latestNews), timeoutMs);
  }

  async expectLatestNewsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.latestNews), timeoutMs);
  }

  async expectLatestNewsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.latestNews), timeoutMs);
  }

  async expectLatestNewsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.latestNews), timeoutMs);
  }

  async expectLatestNewsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.latestNews), count, timeoutMs);
  }

  async scrollLatestNewsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.latestNews));
  }

  async longPressSeeAll(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.seeAll));
  }

  async expectSeeAllHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.seeAll), timeoutMs);
  }

  async expectSeeAllText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.seeAll), expected, timeoutMs);
  }

  async expectSeeAllContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.seeAll), substring, timeoutMs);
  }

  async expectSeeAllValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.seeAll), value, timeoutMs);
  }

  async expectSeeAllEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.seeAll), timeoutMs);
  }

  async expectSeeAllDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.seeAll), timeoutMs);
  }

  async expectSeeAllChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.seeAll), timeoutMs);
  }

  async expectSeeAllUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.seeAll), timeoutMs);
  }

  async expectSeeAllFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.seeAll), timeoutMs);
  }

  async expectSeeAllCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.seeAll), count, timeoutMs);
  }

  async scrollSeeAllIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.seeAll));
  }

  async doubleClickWebinarFeaturingUkgCustomer(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomer));
  }

  async longPressWebinarFeaturingUkgCustomer(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomer));
  }

  async expectWebinarFeaturingUkgCustomerHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomer), timeoutMs);
  }

  async expectWebinarFeaturingUkgCustomerText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomer), expected, timeoutMs);
  }

  async expectWebinarFeaturingUkgCustomerContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomer), substring, timeoutMs);
  }

  async expectWebinarFeaturingUkgCustomerValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomer), value, timeoutMs);
  }

  async expectWebinarFeaturingUkgCustomerEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomer), timeoutMs);
  }

  async expectWebinarFeaturingUkgCustomerDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomer), timeoutMs);
  }

  async expectWebinarFeaturingUkgCustomerChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomer), timeoutMs);
  }

  async expectWebinarFeaturingUkgCustomerUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomer), timeoutMs);
  }

  async expectWebinarFeaturingUkgCustomerFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomer), timeoutMs);
  }

  async expectWebinarFeaturingUkgCustomerCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomer), count, timeoutMs);
  }

  async scrollWebinarFeaturingUkgCustomerIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomer));
  }

  async doubleClickGtmMarketing(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.gtmMarketing));
  }

  async longPressGtmMarketing(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.gtmMarketing));
  }

  async expectGtmMarketingHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.gtmMarketing), timeoutMs);
  }

  async expectGtmMarketingText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.gtmMarketing), expected, timeoutMs);
  }

  async expectGtmMarketingContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.gtmMarketing), substring, timeoutMs);
  }

  async expectGtmMarketingValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.gtmMarketing), value, timeoutMs);
  }

  async expectGtmMarketingEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.gtmMarketing), timeoutMs);
  }

  async expectGtmMarketingDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.gtmMarketing), timeoutMs);
  }

  async expectGtmMarketingChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.gtmMarketing), timeoutMs);
  }

  async expectGtmMarketingUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.gtmMarketing), timeoutMs);
  }

  async expectGtmMarketingFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.gtmMarketing), timeoutMs);
  }

  async expectGtmMarketingCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.gtmMarketing), count, timeoutMs);
  }

  async scrollGtmMarketingIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.gtmMarketing));
  }

  async doubleClickWebinarFeaturingUkgCustomerLink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerLink));
  }

  async longPressWebinarFeaturingUkgCustomerLink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerLink));
  }

  async expectWebinarFeaturingUkgCustomerLinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerLink), timeoutMs);
  }

  async expectWebinarFeaturingUkgCustomerLinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerLink), expected, timeoutMs);
  }

  async expectWebinarFeaturingUkgCustomerLinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerLink), substring, timeoutMs);
  }

  async expectWebinarFeaturingUkgCustomerLinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerLink), value, timeoutMs);
  }

  async expectWebinarFeaturingUkgCustomerLinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerLink), timeoutMs);
  }

  async expectWebinarFeaturingUkgCustomerLinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerLink), timeoutMs);
  }

  async expectWebinarFeaturingUkgCustomerLinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerLink), timeoutMs);
  }

  async expectWebinarFeaturingUkgCustomerLinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerLink), timeoutMs);
  }

  async expectWebinarFeaturingUkgCustomerLinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerLink), timeoutMs);
  }

  async expectWebinarFeaturingUkgCustomerLinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerLink), count, timeoutMs);
  }

  async scrollWebinarFeaturingUkgCustomerLinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerLink));
  }

  async doubleClickComment(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.comment));
  }

  async longPressComment(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.comment));
  }

  async expectCommentHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.comment), timeoutMs);
  }

  async expectCommentText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.comment), expected, timeoutMs);
  }

  async expectCommentContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.comment), substring, timeoutMs);
  }

  async expectCommentValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.comment), value, timeoutMs);
  }

  async expectCommentEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.comment), timeoutMs);
  }

  async expectCommentDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.comment), timeoutMs);
  }

  async expectCommentChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.comment), timeoutMs);
  }

  async expectCommentUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.comment), timeoutMs);
  }

  async expectCommentFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.comment), timeoutMs);
  }

  async expectCommentCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.comment), count, timeoutMs);
  }

  async scrollCommentIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.comment));
  }

  async doubleClickGtm(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.gtm));
  }

  async longPressGtm(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.gtm));
  }

  async expectGtmHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.gtm), timeoutMs);
  }

  async expectGtmText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.gtm), expected, timeoutMs);
  }

  async expectGtmContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.gtm), substring, timeoutMs);
  }

  async expectGtmValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.gtm), value, timeoutMs);
  }

  async expectGtmEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.gtm), timeoutMs);
  }

  async expectGtmDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.gtm), timeoutMs);
  }

  async expectGtmChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.gtm), timeoutMs);
  }

  async expectGtmUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.gtm), timeoutMs);
  }

  async expectGtmFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.gtm), timeoutMs);
  }

  async expectGtmCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.gtm), count, timeoutMs);
  }

  async scrollGtmIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.gtm));
  }

  async doubleClickQ3FY26SalesRecognitionLink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.q3FY26SalesRecognitionLink));
  }

  async longPressQ3FY26SalesRecognitionLink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.q3FY26SalesRecognitionLink));
  }

  async expectQ3FY26SalesRecognitionLinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.q3FY26SalesRecognitionLink), timeoutMs);
  }

  async expectQ3FY26SalesRecognitionLinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.q3FY26SalesRecognitionLink), expected, timeoutMs);
  }

  async expectQ3FY26SalesRecognitionLinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.q3FY26SalesRecognitionLink), substring, timeoutMs);
  }

  async expectQ3FY26SalesRecognitionLinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.q3FY26SalesRecognitionLink), value, timeoutMs);
  }

  async expectQ3FY26SalesRecognitionLinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.q3FY26SalesRecognitionLink), timeoutMs);
  }

  async expectQ3FY26SalesRecognitionLinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.q3FY26SalesRecognitionLink), timeoutMs);
  }

  async expectQ3FY26SalesRecognitionLinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.q3FY26SalesRecognitionLink), timeoutMs);
  }

  async expectQ3FY26SalesRecognitionLinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.q3FY26SalesRecognitionLink), timeoutMs);
  }

  async expectQ3FY26SalesRecognitionLinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.q3FY26SalesRecognitionLink), timeoutMs);
  }

  async expectQ3FY26SalesRecognitionLinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.q3FY26SalesRecognitionLink), count, timeoutMs);
  }

  async scrollQ3FY26SalesRecognitionLinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.q3FY26SalesRecognitionLink));
  }

  async doubleClickTheRoleOfHrLink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.theRoleOfHrLink));
  }

  async longPressTheRoleOfHrLink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.theRoleOfHrLink));
  }

  async expectTheRoleOfHrLinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.theRoleOfHrLink), timeoutMs);
  }

  async expectTheRoleOfHrLinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.theRoleOfHrLink), expected, timeoutMs);
  }

  async expectTheRoleOfHrLinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.theRoleOfHrLink), substring, timeoutMs);
  }

  async expectTheRoleOfHrLinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.theRoleOfHrLink), value, timeoutMs);
  }

  async expectTheRoleOfHrLinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.theRoleOfHrLink), timeoutMs);
  }

  async expectTheRoleOfHrLinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.theRoleOfHrLink), timeoutMs);
  }

  async expectTheRoleOfHrLinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.theRoleOfHrLink), timeoutMs);
  }

  async expectTheRoleOfHrLinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.theRoleOfHrLink), timeoutMs);
  }

  async expectTheRoleOfHrLinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.theRoleOfHrLink), timeoutMs);
  }

  async expectTheRoleOfHrLinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.theRoleOfHrLink), count, timeoutMs);
  }

  async scrollTheRoleOfHrLinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.theRoleOfHrLink));
  }

  async doubleClickJulySocialSellingUpdatesLink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.julySocialSellingUpdatesLink));
  }

  async longPressJulySocialSellingUpdatesLink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.julySocialSellingUpdatesLink));
  }

  async expectJulySocialSellingUpdatesLinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.julySocialSellingUpdatesLink), timeoutMs);
  }

  async expectJulySocialSellingUpdatesLinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.julySocialSellingUpdatesLink), expected, timeoutMs);
  }

  async expectJulySocialSellingUpdatesLinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.julySocialSellingUpdatesLink), substring, timeoutMs);
  }

  async expectJulySocialSellingUpdatesLinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.julySocialSellingUpdatesLink), value, timeoutMs);
  }

  async expectJulySocialSellingUpdatesLinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.julySocialSellingUpdatesLink), timeoutMs);
  }

  async expectJulySocialSellingUpdatesLinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.julySocialSellingUpdatesLink), timeoutMs);
  }

  async expectJulySocialSellingUpdatesLinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.julySocialSellingUpdatesLink), timeoutMs);
  }

  async expectJulySocialSellingUpdatesLinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.julySocialSellingUpdatesLink), timeoutMs);
  }

  async expectJulySocialSellingUpdatesLinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.julySocialSellingUpdatesLink), timeoutMs);
  }

  async expectJulySocialSellingUpdatesLinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.julySocialSellingUpdatesLink), count, timeoutMs);
  }

  async scrollJulySocialSellingUpdatesLinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.julySocialSellingUpdatesLink));
  }

  async doubleClickWhatSecuritySeesGood(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesGood));
  }

  async longPressWhatSecuritySeesGood(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesGood));
  }

  async expectWhatSecuritySeesGoodHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesGood), timeoutMs);
  }

  async expectWhatSecuritySeesGoodText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesGood), expected, timeoutMs);
  }

  async expectWhatSecuritySeesGoodContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesGood), substring, timeoutMs);
  }

  async expectWhatSecuritySeesGoodValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesGood), value, timeoutMs);
  }

  async expectWhatSecuritySeesGoodEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesGood), timeoutMs);
  }

  async expectWhatSecuritySeesGoodDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesGood), timeoutMs);
  }

  async expectWhatSecuritySeesGoodChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesGood), timeoutMs);
  }

  async expectWhatSecuritySeesGoodUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesGood), timeoutMs);
  }

  async expectWhatSecuritySeesGoodFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesGood), timeoutMs);
  }

  async expectWhatSecuritySeesGoodCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesGood), count, timeoutMs);
  }

  async scrollWhatSecuritySeesGoodIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesGood));
  }

  async doubleClickProductEngineeringGlobal(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.productEngineeringGlobal));
  }

  async longPressProductEngineeringGlobal(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.productEngineeringGlobal));
  }

  async expectProductEngineeringGlobalHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.productEngineeringGlobal), timeoutMs);
  }

  async expectProductEngineeringGlobalText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.productEngineeringGlobal), expected, timeoutMs);
  }

  async expectProductEngineeringGlobalContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.productEngineeringGlobal), substring, timeoutMs);
  }

  async expectProductEngineeringGlobalValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.productEngineeringGlobal), value, timeoutMs);
  }

  async expectProductEngineeringGlobalEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.productEngineeringGlobal), timeoutMs);
  }

  async expectProductEngineeringGlobalDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.productEngineeringGlobal), timeoutMs);
  }

  async expectProductEngineeringGlobalChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.productEngineeringGlobal), timeoutMs);
  }

  async expectProductEngineeringGlobalUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.productEngineeringGlobal), timeoutMs);
  }

  async expectProductEngineeringGlobalFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.productEngineeringGlobal), timeoutMs);
  }

  async expectProductEngineeringGlobalCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.productEngineeringGlobal), count, timeoutMs);
  }

  async scrollProductEngineeringGlobalIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.productEngineeringGlobal));
  }

  async doubleClickWhatSecuritySeesGoodLink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesGoodLink));
  }

  async longPressWhatSecuritySeesGoodLink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesGoodLink));
  }

  async expectWhatSecuritySeesGoodLinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesGoodLink), timeoutMs);
  }

  async expectWhatSecuritySeesGoodLinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesGoodLink), expected, timeoutMs);
  }

  async expectWhatSecuritySeesGoodLinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesGoodLink), substring, timeoutMs);
  }

  async expectWhatSecuritySeesGoodLinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesGoodLink), value, timeoutMs);
  }

  async expectWhatSecuritySeesGoodLinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesGoodLink), timeoutMs);
  }

  async expectWhatSecuritySeesGoodLinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesGoodLink), timeoutMs);
  }

  async expectWhatSecuritySeesGoodLinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesGoodLink), timeoutMs);
  }

  async expectWhatSecuritySeesGoodLinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesGoodLink), timeoutMs);
  }

  async expectWhatSecuritySeesGoodLinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesGoodLink), timeoutMs);
  }

  async expectWhatSecuritySeesGoodLinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesGoodLink), count, timeoutMs);
  }

  async scrollWhatSecuritySeesGoodLinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesGoodLink));
  }

  async doubleClickBuildNewsletterJuly(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.buildNewsletterJuly));
  }

  async longPressBuildNewsletterJuly(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.buildNewsletterJuly));
  }

  async expectBuildNewsletterJulyHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.buildNewsletterJuly), timeoutMs);
  }

  async expectBuildNewsletterJulyText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.buildNewsletterJuly), expected, timeoutMs);
  }

  async expectBuildNewsletterJulyContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.buildNewsletterJuly), substring, timeoutMs);
  }

  async expectBuildNewsletterJulyValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.buildNewsletterJuly), value, timeoutMs);
  }

  async expectBuildNewsletterJulyEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.buildNewsletterJuly), timeoutMs);
  }

  async expectBuildNewsletterJulyDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.buildNewsletterJuly), timeoutMs);
  }

  async expectBuildNewsletterJulyChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.buildNewsletterJuly), timeoutMs);
  }

  async expectBuildNewsletterJulyUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.buildNewsletterJuly), timeoutMs);
  }

  async expectBuildNewsletterJulyFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.buildNewsletterJuly), timeoutMs);
  }

  async expectBuildNewsletterJulyCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.buildNewsletterJuly), count, timeoutMs);
  }

  async scrollBuildNewsletterJulyIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.buildNewsletterJuly));
  }

  async doubleClickPeopleUkgBuild(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.peopleUkgBuild));
  }

  async longPressPeopleUkgBuild(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.peopleUkgBuild));
  }

  async expectPeopleUkgBuildHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.peopleUkgBuild), timeoutMs);
  }

  async expectPeopleUkgBuildText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.peopleUkgBuild), expected, timeoutMs);
  }

  async expectPeopleUkgBuildContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.peopleUkgBuild), substring, timeoutMs);
  }

  async expectPeopleUkgBuildValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.peopleUkgBuild), value, timeoutMs);
  }

  async expectPeopleUkgBuildEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.peopleUkgBuild), timeoutMs);
  }

  async expectPeopleUkgBuildDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.peopleUkgBuild), timeoutMs);
  }

  async expectPeopleUkgBuildChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.peopleUkgBuild), timeoutMs);
  }

  async expectPeopleUkgBuildUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.peopleUkgBuild), timeoutMs);
  }

  async expectPeopleUkgBuildFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.peopleUkgBuild), timeoutMs);
  }

  async expectPeopleUkgBuildCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.peopleUkgBuild), count, timeoutMs);
  }

  async scrollPeopleUkgBuildIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.peopleUkgBuild));
  }

  async doubleClickLegalRiskCompliance(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.legalRiskCompliance));
  }

  async longPressLegalRiskCompliance(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.legalRiskCompliance));
  }

  async expectLegalRiskComplianceHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.legalRiskCompliance), timeoutMs);
  }

  async expectLegalRiskComplianceText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.legalRiskCompliance), expected, timeoutMs);
  }

  async expectLegalRiskComplianceContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.legalRiskCompliance), substring, timeoutMs);
  }

  async expectLegalRiskComplianceValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.legalRiskCompliance), value, timeoutMs);
  }

  async expectLegalRiskComplianceEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.legalRiskCompliance), timeoutMs);
  }

  async expectLegalRiskComplianceDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.legalRiskCompliance), timeoutMs);
  }

  async expectLegalRiskComplianceChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.legalRiskCompliance), timeoutMs);
  }

  async expectLegalRiskComplianceUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.legalRiskCompliance), timeoutMs);
  }

  async expectLegalRiskComplianceFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.legalRiskCompliance), timeoutMs);
  }

  async expectLegalRiskComplianceCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.legalRiskCompliance), count, timeoutMs);
  }

  async scrollLegalRiskComplianceIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.legalRiskCompliance));
  }

  async doubleClickPolicyGovernanceAtUkgLink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.policyGovernanceAtUkgLink));
  }

  async longPressPolicyGovernanceAtUkgLink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.policyGovernanceAtUkgLink));
  }

  async expectPolicyGovernanceAtUkgLinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.policyGovernanceAtUkgLink), timeoutMs);
  }

  async expectPolicyGovernanceAtUkgLinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.policyGovernanceAtUkgLink), expected, timeoutMs);
  }

  async expectPolicyGovernanceAtUkgLinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.policyGovernanceAtUkgLink), substring, timeoutMs);
  }

  async expectPolicyGovernanceAtUkgLinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.policyGovernanceAtUkgLink), value, timeoutMs);
  }

  async expectPolicyGovernanceAtUkgLinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.policyGovernanceAtUkgLink), timeoutMs);
  }

  async expectPolicyGovernanceAtUkgLinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.policyGovernanceAtUkgLink), timeoutMs);
  }

  async expectPolicyGovernanceAtUkgLinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.policyGovernanceAtUkgLink), timeoutMs);
  }

  async expectPolicyGovernanceAtUkgLinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.policyGovernanceAtUkgLink), timeoutMs);
  }

  async expectPolicyGovernanceAtUkgLinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.policyGovernanceAtUkgLink), timeoutMs);
  }

  async expectPolicyGovernanceAtUkgLinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.policyGovernanceAtUkgLink), count, timeoutMs);
  }

  async scrollPolicyGovernanceAtUkgLinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.policyGovernanceAtUkgLink));
  }

  async doubleClickInsideUkg(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.insideUkg));
  }

  async longPressInsideUkg(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.insideUkg));
  }

  async expectInsideUkgHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.insideUkg), timeoutMs);
  }

  async expectInsideUkgText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.insideUkg), expected, timeoutMs);
  }

  async expectInsideUkgContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.insideUkg), substring, timeoutMs);
  }

  async expectInsideUkgValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.insideUkg), value, timeoutMs);
  }

  async expectInsideUkgEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.insideUkg), timeoutMs);
  }

  async expectInsideUkgDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.insideUkg), timeoutMs);
  }

  async expectInsideUkgChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.insideUkg), timeoutMs);
  }

  async expectInsideUkgUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.insideUkg), timeoutMs);
  }

  async expectInsideUkgFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.insideUkg), timeoutMs);
  }

  async expectInsideUkgCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.insideUkg), count, timeoutMs);
  }

  async scrollInsideUkgIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.insideUkg));
  }

  async doubleClickPhotoOfTheWeekLink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.photoOfTheWeekLink));
  }

  async longPressPhotoOfTheWeekLink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.photoOfTheWeekLink));
  }

  async expectPhotoOfTheWeekLinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.photoOfTheWeekLink), timeoutMs);
  }

  async expectPhotoOfTheWeekLinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.photoOfTheWeekLink), expected, timeoutMs);
  }

  async expectPhotoOfTheWeekLinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.photoOfTheWeekLink), substring, timeoutMs);
  }

  async expectPhotoOfTheWeekLinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.photoOfTheWeekLink), value, timeoutMs);
  }

  async expectPhotoOfTheWeekLinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.photoOfTheWeekLink), timeoutMs);
  }

  async expectPhotoOfTheWeekLinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.photoOfTheWeekLink), timeoutMs);
  }

  async expectPhotoOfTheWeekLinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.photoOfTheWeekLink), timeoutMs);
  }

  async expectPhotoOfTheWeekLinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.photoOfTheWeekLink), timeoutMs);
  }

  async expectPhotoOfTheWeekLinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.photoOfTheWeekLink), timeoutMs);
  }

  async expectPhotoOfTheWeekLinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.photoOfTheWeekLink), count, timeoutMs);
  }

  async scrollPhotoOfTheWeekLinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.photoOfTheWeekLink));
  }

  async doubleClickAiHub(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.aiHub));
  }

  async longPressAiHub(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.aiHub));
  }

  async expectAiHubHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.aiHub), timeoutMs);
  }

  async expectAiHubText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.aiHub), expected, timeoutMs);
  }

  async expectAiHubContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.aiHub), substring, timeoutMs);
  }

  async expectAiHubValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.aiHub), value, timeoutMs);
  }

  async expectAiHubEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.aiHub), timeoutMs);
  }

  async expectAiHubDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.aiHub), timeoutMs);
  }

  async expectAiHubChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.aiHub), timeoutMs);
  }

  async expectAiHubUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.aiHub), timeoutMs);
  }

  async expectAiHubFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.aiHub), timeoutMs);
  }

  async expectAiHubCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.aiHub), count, timeoutMs);
  }

  async scrollAiHubIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.aiHub));
  }

  async doubleClickAgencyUAgentAThonMovesIntoLink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.agencyUAgentAThonMovesIntoLink));
  }

  async longPressAgencyUAgentAThonMovesIntoLink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.agencyUAgentAThonMovesIntoLink));
  }

  async expectAgencyUAgentAThonMovesIntoLinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.agencyUAgentAThonMovesIntoLink), timeoutMs);
  }

  async expectAgencyUAgentAThonMovesIntoLinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.agencyUAgentAThonMovesIntoLink), expected, timeoutMs);
  }

  async expectAgencyUAgentAThonMovesIntoLinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.agencyUAgentAThonMovesIntoLink), substring, timeoutMs);
  }

  async expectAgencyUAgentAThonMovesIntoLinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.agencyUAgentAThonMovesIntoLink), value, timeoutMs);
  }

  async expectAgencyUAgentAThonMovesIntoLinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.agencyUAgentAThonMovesIntoLink), timeoutMs);
  }

  async expectAgencyUAgentAThonMovesIntoLinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.agencyUAgentAThonMovesIntoLink), timeoutMs);
  }

  async expectAgencyUAgentAThonMovesIntoLinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.agencyUAgentAThonMovesIntoLink), timeoutMs);
  }

  async expectAgencyUAgentAThonMovesIntoLinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.agencyUAgentAThonMovesIntoLink), timeoutMs);
  }

  async expectAgencyUAgentAThonMovesIntoLinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.agencyUAgentAThonMovesIntoLink), timeoutMs);
  }

  async expectAgencyUAgentAThonMovesIntoLinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.agencyUAgentAThonMovesIntoLink), count, timeoutMs);
  }

  async scrollAgencyUAgentAThonMovesIntoLinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.agencyUAgentAThonMovesIntoLink));
  }

  async doubleClickNewForresterTotalEconomic(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.newForresterTotalEconomic));
  }

  async longPressNewForresterTotalEconomic(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.newForresterTotalEconomic));
  }

  async expectNewForresterTotalEconomicHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.newForresterTotalEconomic), timeoutMs);
  }

  async expectNewForresterTotalEconomicText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.newForresterTotalEconomic), expected, timeoutMs);
  }

  async expectNewForresterTotalEconomicContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.newForresterTotalEconomic), substring, timeoutMs);
  }

  async expectNewForresterTotalEconomicValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.newForresterTotalEconomic), value, timeoutMs);
  }

  async expectNewForresterTotalEconomicEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.newForresterTotalEconomic), timeoutMs);
  }

  async expectNewForresterTotalEconomicDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.newForresterTotalEconomic), timeoutMs);
  }

  async expectNewForresterTotalEconomicChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.newForresterTotalEconomic), timeoutMs);
  }

  async expectNewForresterTotalEconomicUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.newForresterTotalEconomic), timeoutMs);
  }

  async expectNewForresterTotalEconomicFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.newForresterTotalEconomic), timeoutMs);
  }

  async expectNewForresterTotalEconomicCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.newForresterTotalEconomic), count, timeoutMs);
  }

  async scrollNewForresterTotalEconomicIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.newForresterTotalEconomic));
  }

  async doubleClickNewForresterTotalEconomicLink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.newForresterTotalEconomicLink));
  }

  async longPressNewForresterTotalEconomicLink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.newForresterTotalEconomicLink));
  }

  async expectNewForresterTotalEconomicLinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.newForresterTotalEconomicLink), timeoutMs);
  }

  async expectNewForresterTotalEconomicLinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.newForresterTotalEconomicLink), expected, timeoutMs);
  }

  async expectNewForresterTotalEconomicLinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.newForresterTotalEconomicLink), substring, timeoutMs);
  }

  async expectNewForresterTotalEconomicLinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.newForresterTotalEconomicLink), value, timeoutMs);
  }

  async expectNewForresterTotalEconomicLinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.newForresterTotalEconomicLink), timeoutMs);
  }

  async expectNewForresterTotalEconomicLinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.newForresterTotalEconomicLink), timeoutMs);
  }

  async expectNewForresterTotalEconomicLinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.newForresterTotalEconomicLink), timeoutMs);
  }

  async expectNewForresterTotalEconomicLinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.newForresterTotalEconomicLink), timeoutMs);
  }

  async expectNewForresterTotalEconomicLinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.newForresterTotalEconomicLink), timeoutMs);
  }

  async expectNewForresterTotalEconomicLinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.newForresterTotalEconomicLink), count, timeoutMs);
  }

  async scrollNewForresterTotalEconomicLinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.newForresterTotalEconomicLink));
  }

  async doubleClickJuly2026HealthAwareness(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.july2026HealthAwareness));
  }

  async longPressJuly2026HealthAwareness(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.july2026HealthAwareness));
  }

  async expectJuly2026HealthAwarenessHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.july2026HealthAwareness), timeoutMs);
  }

  async expectJuly2026HealthAwarenessText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.july2026HealthAwareness), expected, timeoutMs);
  }

  async expectJuly2026HealthAwarenessContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.july2026HealthAwareness), substring, timeoutMs);
  }

  async expectJuly2026HealthAwarenessValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.july2026HealthAwareness), value, timeoutMs);
  }

  async expectJuly2026HealthAwarenessEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.july2026HealthAwareness), timeoutMs);
  }

  async expectJuly2026HealthAwarenessDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.july2026HealthAwareness), timeoutMs);
  }

  async expectJuly2026HealthAwarenessChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.july2026HealthAwareness), timeoutMs);
  }

  async expectJuly2026HealthAwarenessUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.july2026HealthAwareness), timeoutMs);
  }

  async expectJuly2026HealthAwarenessFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.july2026HealthAwareness), timeoutMs);
  }

  async expectJuly2026HealthAwarenessCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.july2026HealthAwareness), count, timeoutMs);
  }

  async scrollJuly2026HealthAwarenessIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.july2026HealthAwareness));
  }

  async doubleClickPeopleUkgCares(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.peopleUkgCares));
  }

  async longPressPeopleUkgCares(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.peopleUkgCares));
  }

  async expectPeopleUkgCaresHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.peopleUkgCares), timeoutMs);
  }

  async expectPeopleUkgCaresText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.peopleUkgCares), expected, timeoutMs);
  }

  async expectPeopleUkgCaresContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.peopleUkgCares), substring, timeoutMs);
  }

  async expectPeopleUkgCaresValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.peopleUkgCares), value, timeoutMs);
  }

  async expectPeopleUkgCaresEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.peopleUkgCares), timeoutMs);
  }

  async expectPeopleUkgCaresDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.peopleUkgCares), timeoutMs);
  }

  async expectPeopleUkgCaresChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.peopleUkgCares), timeoutMs);
  }

  async expectPeopleUkgCaresUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.peopleUkgCares), timeoutMs);
  }

  async expectPeopleUkgCaresFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.peopleUkgCares), timeoutMs);
  }

  async expectPeopleUkgCaresCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.peopleUkgCares), count, timeoutMs);
  }

  async scrollPeopleUkgCaresIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.peopleUkgCares));
  }

  async doubleClickEmployeeResourceGroupErg(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.employeeResourceGroupErg));
  }

  async longPressEmployeeResourceGroupErg(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.employeeResourceGroupErg));
  }

  async expectEmployeeResourceGroupErgHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.employeeResourceGroupErg), timeoutMs);
  }

  async expectEmployeeResourceGroupErgText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.employeeResourceGroupErg), expected, timeoutMs);
  }

  async expectEmployeeResourceGroupErgContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.employeeResourceGroupErg), substring, timeoutMs);
  }

  async expectEmployeeResourceGroupErgValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.employeeResourceGroupErg), value, timeoutMs);
  }

  async expectEmployeeResourceGroupErgEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.employeeResourceGroupErg), timeoutMs);
  }

  async expectEmployeeResourceGroupErgDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.employeeResourceGroupErg), timeoutMs);
  }

  async expectEmployeeResourceGroupErgChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.employeeResourceGroupErg), timeoutMs);
  }

  async expectEmployeeResourceGroupErgUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.employeeResourceGroupErg), timeoutMs);
  }

  async expectEmployeeResourceGroupErgFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.employeeResourceGroupErg), timeoutMs);
  }

  async expectEmployeeResourceGroupErgCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.employeeResourceGroupErg), count, timeoutMs);
  }

  async scrollEmployeeResourceGroupErgIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.employeeResourceGroupErg));
  }

  async doubleClickPeopleBelongingImpact(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.peopleBelongingImpact));
  }

  async longPressPeopleBelongingImpact(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.peopleBelongingImpact));
  }

  async expectPeopleBelongingImpactHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.peopleBelongingImpact), timeoutMs);
  }

  async expectPeopleBelongingImpactText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.peopleBelongingImpact), expected, timeoutMs);
  }

  async expectPeopleBelongingImpactContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.peopleBelongingImpact), substring, timeoutMs);
  }

  async expectPeopleBelongingImpactValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.peopleBelongingImpact), value, timeoutMs);
  }

  async expectPeopleBelongingImpactEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.peopleBelongingImpact), timeoutMs);
  }

  async expectPeopleBelongingImpactDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.peopleBelongingImpact), timeoutMs);
  }

  async expectPeopleBelongingImpactChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.peopleBelongingImpact), timeoutMs);
  }

  async expectPeopleBelongingImpactUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.peopleBelongingImpact), timeoutMs);
  }

  async expectPeopleBelongingImpactFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.peopleBelongingImpact), timeoutMs);
  }

  async expectPeopleBelongingImpactCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.peopleBelongingImpact), count, timeoutMs);
  }

  async scrollPeopleBelongingImpactIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.peopleBelongingImpact));
  }

  async doubleClickUkgRiseEarlyCareerLink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.ukgRiseEarlyCareerLink));
  }

  async longPressUkgRiseEarlyCareerLink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.ukgRiseEarlyCareerLink));
  }

  async expectUkgRiseEarlyCareerLinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.ukgRiseEarlyCareerLink), timeoutMs);
  }

  async expectUkgRiseEarlyCareerLinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.ukgRiseEarlyCareerLink), expected, timeoutMs);
  }

  async expectUkgRiseEarlyCareerLinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.ukgRiseEarlyCareerLink), substring, timeoutMs);
  }

  async expectUkgRiseEarlyCareerLinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.ukgRiseEarlyCareerLink), value, timeoutMs);
  }

  async expectUkgRiseEarlyCareerLinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.ukgRiseEarlyCareerLink), timeoutMs);
  }

  async expectUkgRiseEarlyCareerLinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.ukgRiseEarlyCareerLink), timeoutMs);
  }

  async expectUkgRiseEarlyCareerLinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.ukgRiseEarlyCareerLink), timeoutMs);
  }

  async expectUkgRiseEarlyCareerLinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.ukgRiseEarlyCareerLink), timeoutMs);
  }

  async expectUkgRiseEarlyCareerLinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.ukgRiseEarlyCareerLink), timeoutMs);
  }

  async expectUkgRiseEarlyCareerLinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.ukgRiseEarlyCareerLink), count, timeoutMs);
  }

  async scrollUkgRiseEarlyCareerLinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.ukgRiseEarlyCareerLink));
  }

  async doubleClickGlobalSecurityManagedVault(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.globalSecurityManagedVault));
  }

  async longPressGlobalSecurityManagedVault(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.globalSecurityManagedVault));
  }

  async expectGlobalSecurityManagedVaultHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.globalSecurityManagedVault), timeoutMs);
  }

  async expectGlobalSecurityManagedVaultText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.globalSecurityManagedVault), expected, timeoutMs);
  }

  async expectGlobalSecurityManagedVaultContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.globalSecurityManagedVault), substring, timeoutMs);
  }

  async expectGlobalSecurityManagedVaultValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.globalSecurityManagedVault), value, timeoutMs);
  }

  async expectGlobalSecurityManagedVaultEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.globalSecurityManagedVault), timeoutMs);
  }

  async expectGlobalSecurityManagedVaultDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.globalSecurityManagedVault), timeoutMs);
  }

  async expectGlobalSecurityManagedVaultChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.globalSecurityManagedVault), timeoutMs);
  }

  async expectGlobalSecurityManagedVaultUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.globalSecurityManagedVault), timeoutMs);
  }

  async expectGlobalSecurityManagedVaultFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.globalSecurityManagedVault), timeoutMs);
  }

  async expectGlobalSecurityManagedVaultCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.globalSecurityManagedVault), count, timeoutMs);
  }

  async scrollGlobalSecurityManagedVaultIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.globalSecurityManagedVault));
  }

  async doubleClickGlobalSecurityManagedVaultLink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.globalSecurityManagedVaultLink));
  }

  async longPressGlobalSecurityManagedVaultLink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.globalSecurityManagedVaultLink));
  }

  async expectGlobalSecurityManagedVaultLinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.globalSecurityManagedVaultLink), timeoutMs);
  }

  async expectGlobalSecurityManagedVaultLinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.globalSecurityManagedVaultLink), expected, timeoutMs);
  }

  async expectGlobalSecurityManagedVaultLinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.globalSecurityManagedVaultLink), substring, timeoutMs);
  }

  async expectGlobalSecurityManagedVaultLinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.globalSecurityManagedVaultLink), value, timeoutMs);
  }

  async expectGlobalSecurityManagedVaultLinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.globalSecurityManagedVaultLink), timeoutMs);
  }

  async expectGlobalSecurityManagedVaultLinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.globalSecurityManagedVaultLink), timeoutMs);
  }

  async expectGlobalSecurityManagedVaultLinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.globalSecurityManagedVaultLink), timeoutMs);
  }

  async expectGlobalSecurityManagedVaultLinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.globalSecurityManagedVaultLink), timeoutMs);
  }

  async expectGlobalSecurityManagedVaultLinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.globalSecurityManagedVaultLink), timeoutMs);
  }

  async expectGlobalSecurityManagedVaultLinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.globalSecurityManagedVaultLink), count, timeoutMs);
  }

  async scrollGlobalSecurityManagedVaultLinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.globalSecurityManagedVaultLink));
  }

  async doubleClickBaselineImagesRequiredFor(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.baselineImagesRequiredFor));
  }

  async longPressBaselineImagesRequiredFor(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.baselineImagesRequiredFor));
  }

  async expectBaselineImagesRequiredForHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.baselineImagesRequiredFor), timeoutMs);
  }

  async expectBaselineImagesRequiredForText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.baselineImagesRequiredFor), expected, timeoutMs);
  }

  async expectBaselineImagesRequiredForContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.baselineImagesRequiredFor), substring, timeoutMs);
  }

  async expectBaselineImagesRequiredForValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.baselineImagesRequiredFor), value, timeoutMs);
  }

  async expectBaselineImagesRequiredForEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.baselineImagesRequiredFor), timeoutMs);
  }

  async expectBaselineImagesRequiredForDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.baselineImagesRequiredFor), timeoutMs);
  }

  async expectBaselineImagesRequiredForChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.baselineImagesRequiredFor), timeoutMs);
  }

  async expectBaselineImagesRequiredForUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.baselineImagesRequiredFor), timeoutMs);
  }

  async expectBaselineImagesRequiredForFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.baselineImagesRequiredFor), timeoutMs);
  }

  async expectBaselineImagesRequiredForCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.baselineImagesRequiredFor), count, timeoutMs);
  }

  async scrollBaselineImagesRequiredForIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.baselineImagesRequiredFor));
  }

  async doubleClickCommsEmployeeCommunications(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.commsEmployeeCommunications));
  }

  async longPressCommsEmployeeCommunications(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.commsEmployeeCommunications));
  }

  async expectCommsEmployeeCommunicationsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.commsEmployeeCommunications), timeoutMs);
  }

  async expectCommsEmployeeCommunicationsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.commsEmployeeCommunications), expected, timeoutMs);
  }

  async expectCommsEmployeeCommunicationsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.commsEmployeeCommunications), substring, timeoutMs);
  }

  async expectCommsEmployeeCommunicationsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.commsEmployeeCommunications), value, timeoutMs);
  }

  async expectCommsEmployeeCommunicationsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.commsEmployeeCommunications), timeoutMs);
  }

  async expectCommsEmployeeCommunicationsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.commsEmployeeCommunications), timeoutMs);
  }

  async expectCommsEmployeeCommunicationsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.commsEmployeeCommunications), timeoutMs);
  }

  async expectCommsEmployeeCommunicationsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.commsEmployeeCommunications), timeoutMs);
  }

  async expectCommsEmployeeCommunicationsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.commsEmployeeCommunications), timeoutMs);
  }

  async expectCommsEmployeeCommunicationsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.commsEmployeeCommunications), count, timeoutMs);
  }

  async scrollCommsEmployeeCommunicationsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.commsEmployeeCommunications));
  }

  async doubleClickUkgCommonsMobileAppLink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.ukgCommonsMobileAppLink));
  }

  async longPressUkgCommonsMobileAppLink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.ukgCommonsMobileAppLink));
  }

  async expectUkgCommonsMobileAppLinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.ukgCommonsMobileAppLink), timeoutMs);
  }

  async expectUkgCommonsMobileAppLinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.ukgCommonsMobileAppLink), expected, timeoutMs);
  }

  async expectUkgCommonsMobileAppLinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.ukgCommonsMobileAppLink), substring, timeoutMs);
  }

  async expectUkgCommonsMobileAppLinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.ukgCommonsMobileAppLink), value, timeoutMs);
  }

  async expectUkgCommonsMobileAppLinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.ukgCommonsMobileAppLink), timeoutMs);
  }

  async expectUkgCommonsMobileAppLinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.ukgCommonsMobileAppLink), timeoutMs);
  }

  async expectUkgCommonsMobileAppLinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.ukgCommonsMobileAppLink), timeoutMs);
  }

  async expectUkgCommonsMobileAppLinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.ukgCommonsMobileAppLink), timeoutMs);
  }

  async expectUkgCommonsMobileAppLinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.ukgCommonsMobileAppLink), timeoutMs);
  }

  async expectUkgCommonsMobileAppLinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.ukgCommonsMobileAppLink), count, timeoutMs);
  }

  async scrollUkgCommonsMobileAppLinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.ukgCommonsMobileAppLink));
  }

  async doubleClickWhatSecuritySeesSometimes(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesSometimes));
  }

  async longPressWhatSecuritySeesSometimes(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesSometimes));
  }

  async expectWhatSecuritySeesSometimesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesSometimes), timeoutMs);
  }

  async expectWhatSecuritySeesSometimesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesSometimes), expected, timeoutMs);
  }

  async expectWhatSecuritySeesSometimesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesSometimes), substring, timeoutMs);
  }

  async expectWhatSecuritySeesSometimesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesSometimes), value, timeoutMs);
  }

  async expectWhatSecuritySeesSometimesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesSometimes), timeoutMs);
  }

  async expectWhatSecuritySeesSometimesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesSometimes), timeoutMs);
  }

  async expectWhatSecuritySeesSometimesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesSometimes), timeoutMs);
  }

  async expectWhatSecuritySeesSometimesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesSometimes), timeoutMs);
  }

  async expectWhatSecuritySeesSometimesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesSometimes), timeoutMs);
  }

  async expectWhatSecuritySeesSometimesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesSometimes), count, timeoutMs);
  }

  async scrollWhatSecuritySeesSometimesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesSometimes));
  }

  async doubleClickDisabilityINJuly2026(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.disabilityINJuly2026));
  }

  async longPressDisabilityINJuly2026(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.disabilityINJuly2026));
  }

  async expectDisabilityINJuly2026Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.disabilityINJuly2026), timeoutMs);
  }

  async expectDisabilityINJuly2026Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.disabilityINJuly2026), expected, timeoutMs);
  }

  async expectDisabilityINJuly2026ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.disabilityINJuly2026), substring, timeoutMs);
  }

  async expectDisabilityINJuly2026Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.disabilityINJuly2026), value, timeoutMs);
  }

  async expectDisabilityINJuly2026Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.disabilityINJuly2026), timeoutMs);
  }

  async expectDisabilityINJuly2026Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.disabilityINJuly2026), timeoutMs);
  }

  async expectDisabilityINJuly2026Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.disabilityINJuly2026), timeoutMs);
  }

  async expectDisabilityINJuly2026Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.disabilityINJuly2026), timeoutMs);
  }

  async expectDisabilityINJuly2026Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.disabilityINJuly2026), timeoutMs);
  }

  async expectDisabilityINJuly2026Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.disabilityINJuly2026), count, timeoutMs);
  }

  async scrollDisabilityINJuly2026IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.disabilityINJuly2026));
  }

  async doubleClickPeopleUkgAdapt(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.peopleUkgAdapt));
  }

  async longPressPeopleUkgAdapt(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.peopleUkgAdapt));
  }

  async expectPeopleUkgAdaptHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.peopleUkgAdapt), timeoutMs);
  }

  async expectPeopleUkgAdaptText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.peopleUkgAdapt), expected, timeoutMs);
  }

  async expectPeopleUkgAdaptContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.peopleUkgAdapt), substring, timeoutMs);
  }

  async expectPeopleUkgAdaptValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.peopleUkgAdapt), value, timeoutMs);
  }

  async expectPeopleUkgAdaptEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.peopleUkgAdapt), timeoutMs);
  }

  async expectPeopleUkgAdaptDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.peopleUkgAdapt), timeoutMs);
  }

  async expectPeopleUkgAdaptChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.peopleUkgAdapt), timeoutMs);
  }

  async expectPeopleUkgAdaptUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.peopleUkgAdapt), timeoutMs);
  }

  async expectPeopleUkgAdaptFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.peopleUkgAdapt), timeoutMs);
  }

  async expectPeopleUkgAdaptCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.peopleUkgAdapt), count, timeoutMs);
  }

  async scrollPeopleUkgAdaptIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.peopleUkgAdapt));
  }

  async doubleClickPhotoOfTheWeekPhotoOfTheWeekTakeYourC(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.photoOfTheWeekPhotoOfTheWeekTakeYourC));
  }

  async longPressPhotoOfTheWeekPhotoOfTheWeekTakeYourC(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.photoOfTheWeekPhotoOfTheWeekTakeYourC));
  }

  async expectPhotoOfTheWeekPhotoOfTheWeekTakeYourCHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.photoOfTheWeekPhotoOfTheWeekTakeYourC), timeoutMs);
  }

  async expectPhotoOfTheWeekPhotoOfTheWeekTakeYourCText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.photoOfTheWeekPhotoOfTheWeekTakeYourC), expected, timeoutMs);
  }

  async expectPhotoOfTheWeekPhotoOfTheWeekTakeYourCContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.photoOfTheWeekPhotoOfTheWeekTakeYourC), substring, timeoutMs);
  }

  async expectPhotoOfTheWeekPhotoOfTheWeekTakeYourCValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.photoOfTheWeekPhotoOfTheWeekTakeYourC), value, timeoutMs);
  }

  async expectPhotoOfTheWeekPhotoOfTheWeekTakeYourCEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.photoOfTheWeekPhotoOfTheWeekTakeYourC), timeoutMs);
  }

  async expectPhotoOfTheWeekPhotoOfTheWeekTakeYourCDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.photoOfTheWeekPhotoOfTheWeekTakeYourC), timeoutMs);
  }

  async expectPhotoOfTheWeekPhotoOfTheWeekTakeYourCChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.photoOfTheWeekPhotoOfTheWeekTakeYourC), timeoutMs);
  }

  async expectPhotoOfTheWeekPhotoOfTheWeekTakeYourCUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.photoOfTheWeekPhotoOfTheWeekTakeYourC), timeoutMs);
  }

  async expectPhotoOfTheWeekPhotoOfTheWeekTakeYourCFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.photoOfTheWeekPhotoOfTheWeekTakeYourC), timeoutMs);
  }

  async expectPhotoOfTheWeekPhotoOfTheWeekTakeYourCCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.photoOfTheWeekPhotoOfTheWeekTakeYourC), count, timeoutMs);
  }

  async scrollPhotoOfTheWeekPhotoOfTheWeekTakeYourCIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.photoOfTheWeekPhotoOfTheWeekTakeYourC));
  }

  async doubleClickDoNotEngageWithLink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.doNotEngageWithLink));
  }

  async longPressDoNotEngageWithLink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.doNotEngageWithLink));
  }

  async expectDoNotEngageWithLinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.doNotEngageWithLink), timeoutMs);
  }

  async expectDoNotEngageWithLinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.doNotEngageWithLink), expected, timeoutMs);
  }

  async expectDoNotEngageWithLinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.doNotEngageWithLink), substring, timeoutMs);
  }

  async expectDoNotEngageWithLinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.doNotEngageWithLink), value, timeoutMs);
  }

  async expectDoNotEngageWithLinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.doNotEngageWithLink), timeoutMs);
  }

  async expectDoNotEngageWithLinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.doNotEngageWithLink), timeoutMs);
  }

  async expectDoNotEngageWithLinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.doNotEngageWithLink), timeoutMs);
  }

  async expectDoNotEngageWithLinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.doNotEngageWithLink), timeoutMs);
  }

  async expectDoNotEngageWithLinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.doNotEngageWithLink), timeoutMs);
  }

  async expectDoNotEngageWithLinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.doNotEngageWithLink), count, timeoutMs);
  }

  async scrollDoNotEngageWithLinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.doNotEngageWithLink));
  }

  async longPressEnglishUnitedStates(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.englishUnitedStates));
  }

  async expectEnglishUnitedStatesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.englishUnitedStates), timeoutMs);
  }

  async expectEnglishUnitedStatesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.englishUnitedStates), expected, timeoutMs);
  }

  async expectEnglishUnitedStatesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.englishUnitedStates), substring, timeoutMs);
  }

  async expectEnglishUnitedStatesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.englishUnitedStates), value, timeoutMs);
  }

  async expectEnglishUnitedStatesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.englishUnitedStates), timeoutMs);
  }

  async expectEnglishUnitedStatesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.englishUnitedStates), timeoutMs);
  }

  async expectEnglishUnitedStatesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.englishUnitedStates), timeoutMs);
  }

  async expectEnglishUnitedStatesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.englishUnitedStates), timeoutMs);
  }

  async expectEnglishUnitedStatesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.englishUnitedStates), timeoutMs);
  }

  async expectEnglishUnitedStatesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.englishUnitedStates), count, timeoutMs);
  }

  async scrollEnglishUnitedStatesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.englishUnitedStates));
  }

  async longPressChat(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.chat));
  }

  async expectChatHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.chat), timeoutMs);
  }

  async expectChatText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.chat), expected, timeoutMs);
  }

  async expectChatContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.chat), substring, timeoutMs);
  }

  async expectChatValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.chat), value, timeoutMs);
  }

  async expectChatEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.chat), timeoutMs);
  }

  async expectChatDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.chat), timeoutMs);
  }

  async expectChatChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.chat), timeoutMs);
  }

  async expectChatUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.chat), timeoutMs);
  }

  async expectChatFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.chat), timeoutMs);
  }

  async expectChatCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.chat), count, timeoutMs);
  }

  async scrollChatIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.chat));
  }

}
