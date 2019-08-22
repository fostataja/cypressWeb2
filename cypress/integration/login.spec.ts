import { u0Url, u0Login, u0Pswrd } from "../credentials/login.spec";

describe('Логин', () => {
beforeEach(() => {
cy.visit(u0Url)
});

it('Логин позитивный', () => {
  cy.url().should('include','/anon/login');
 cy.get('input[name="login"]').type(u0Login)
 .should('have.value','u0ba2@mail.ru');

 cy.get('input[name="password"]').type(u0Pswrd)
 .should('have.value','testPass');

 cy.get('span[class*="button_text"]').contains('Войти').click();
 cy.title().should('eq','Главная');

});
it('Логин без данных', () => {
  cy.get('span[class*="button_text"]').contains('Войти').click();
  cy.get('div[class*="card_root"]').contains('Поле обязательно для заполнения');
 
 });

});