import { PriceFilterPage } from './app.po';

describe('price-filter App', function() {
  let page: PriceFilterPage;

  beforeEach(() => {
    page = new PriceFilterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('zt works!');
  });
});
