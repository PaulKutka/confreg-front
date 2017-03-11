import { ConfregFrontPage } from './app.po';

describe('confreg-front App', () => {
  let page: ConfregFrontPage;

  beforeEach(() => {
    page = new ConfregFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
