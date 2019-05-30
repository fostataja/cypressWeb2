import { u0Login, u0Pswrd, userGuidU0 } from "../credentials/login.spec";

Cypress.Commands.add('login', () => {
  indexedDB.deleteDatabase(userGuidU0);

  cy.visit('');

  cy.get('input[name="email"]').type(u0Login);
  cy.get('input[name="password"]').type(u0Pswrd);
  cy.get('button[type="submit"]').click();
});

Cypress.Commands.add('login2', () => {
  indexedDB.deleteDatabase(userGuidU0);

  cy
  .request('POST', '/webserver/user/auth', {"userName":u0Login,"password":u0Pswrd});
  cy.visit('');
});
