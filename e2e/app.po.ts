import { browser, element, by } from 'protractor';

export class PriceFilterPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('zt-root h1')).getText();
  }
}
