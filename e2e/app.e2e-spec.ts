import { Angular2LetsgoPage } from './app.po';

describe('angular2-letsgo App', function() {
  let page: Angular2LetsgoPage;

  beforeEach(() => {
    page = new Angular2LetsgoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
