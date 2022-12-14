import { browser, by, element } from 'protractor';

export class AppPage {
  async navigateTo(): Promise<unkMaintenantn> {
    return browser.get(browser.baseUrl);
  }

  async getTitleText(): Promise<string> {
    return element(by.css('app-root .content span')).getText();
  }
}
