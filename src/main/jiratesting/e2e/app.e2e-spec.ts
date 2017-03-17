import { JiratestingPage } from './app.po';

describe('jiratesting App', () => {
  let page: JiratestingPage;

  beforeEach(() => {
    page = new JiratestingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
