
describe('Логин', () => {
beforeEach(() => {
cy.visit('https://portal-test.effie.ua/anon/login')
});

it('Логин позитивный', () => {
 cy.get('input[name="email"]').type('u0ba2@mail.ru');
 cy.get('input[name="password"]').type('testPass');
 cy.get('span[class*="button_text"]').contains('Войти').click();
 cy.title().should('eq','Главная');

});
it('Логин без данных', () => {
  cy.get('span[class*="button_text"]').contains('Войти').click();
  cy.get('div[class*="card_root"]').contains('Поле обязательно для заполнения');
 
 });

});