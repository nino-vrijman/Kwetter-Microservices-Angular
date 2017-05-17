import { KwetterMicroservicesPage } from './app.po';

describe('kwetter-microservices App', () => {
  let page: KwetterMicroservicesPage;

  beforeEach(() => {
    page = new KwetterMicroservicesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
