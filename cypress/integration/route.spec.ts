import {
     inputRight, 
     getInputName, 
     getButtonText, 
     dialog_actions, 
     routesItemName, 
     secondInList 
} from "../constants/elementSiteConst";

describe('Создание маршрута', () => {
  beforeEach(() => {
    cy.login2();
    cy.visit("/actions/routes");
  });

  it('CRUD маршрута', () => {
    cy.get(inputRight).click();
    cy.get(secondInList).click();
    cy.get(getButtonText).contains('Создать маршрут').click();
    cy.get(getInputName('routeName')).type('Route Title');
    cy.get(dialog_actions).find(getButtonText).contains('Создать').click();
    cy.get(routesItemName).contains('Route Title').click();
    cy.get(getInputName('routeName')).type('2');
    cy.get(dialog_actions).find(getButtonText).contains('Сохранить').click();
    cy.get(routesItemName).contains('Route Title2').click();
    cy.get(dialog_actions).find(getButtonText).contains('Удалить').click();
    cy.get(getButtonText).contains('Да').click();
    cy.get('div[class*="routesList_emptyText"]').should('be.visible');
  });

});