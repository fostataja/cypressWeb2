declare namespace Cypress {
  interface Chainable<Subject = any> {
    [x: string]: any;
    login(): Chainable<any>;
    login2(): Chainable<any>;
  }  
}