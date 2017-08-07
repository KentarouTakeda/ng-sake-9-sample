import { DownloadProgressPage } from './app.po';

describe('download-progress App', () => {
  let page: DownloadProgressPage;

  beforeEach(() => {
    page = new DownloadProgressPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
