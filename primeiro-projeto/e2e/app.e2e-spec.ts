import { PrimeiroProjetoPage } from './app.po';

describe('primeiro-projeto App', () => {
  let page: PrimeiroProjetoPage;

  beforeEach(() => {
    page = new PrimeiroProjetoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
