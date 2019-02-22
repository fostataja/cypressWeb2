Cypress.Commands.add('login', () => {
  indexedDB.deleteDatabase('DED62630-6752-4303-8D6C-9DDCA3A2A3DC');

  cy.visit('');

  cy.get('input[name="email"]').type('u0ba2@mail.ru');
  cy.get('input[name="password"]').type('testPass');
  cy.get('button[type="submit"]').click();
});

Cypress.Commands.add('login2', () => {
  indexedDB.deleteDatabase('DED62630-6752-4303-8D6C-9DDCA3A2A3DC');

  cy
  .request('POST', '/webserver/user/auth', {"userName":"u0ba2@mail.ru","password":"testPass"});
  cy.visit('');

});

declare namespace Cypress {
  interface Chainable<Subject = any> {
    login(): Chainable<any>;
    login2(): Chainable<any>;
  }  
}
