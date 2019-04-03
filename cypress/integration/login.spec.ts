import { u0Url, u0Login, u0Pswrd } from "../credentials/login.spec";

describe('Логин', () => {
beforeEach(() => {
cy.visit(u0Url)
});

it('Логин позитивный', () => {
 cy.get('input[name="email"]').type(u0Login);
 cy.get('input[name="password"]').type(u0Pswrd);
 cy.get('span[class*="button_text"]').contains('Войти').click();
 cy.title().should('eq','Главная');

});
it('Логин без данных', () => {
  cy.get('span[class*="button_text"]').contains('Войти').click();
  cy.get('div[class*="card_root"]').contains('Поле обязательно для заполнения');
 
 });

});