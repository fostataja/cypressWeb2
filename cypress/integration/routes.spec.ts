import {
     inputRight, getInputName, getButtonText, getDialogActions, routesItemName, headerTitle 
} from "../constants/elementSiteConst";

describe('Создание маршрута', () => {
  beforeEach(() => {
    cy.login2();
    cy.visit("/actions/routes");
  });

  it('CRUD маршрута', () => {
    cy.get(inputRight).click();
    cy.get('div[class*="dropdown-list_root"] > div:nth-child(2)').click();
    cy.get(getButtonText).contains('Создать маршрут').click();
    cy.get(getInputName('routeName')).type('Route Title');
    cy.get(getDialogActions).find(getButtonText).contains('Создать').click();
    cy.get(routesItemName).contains('Route Title').click();
    cy.get(getInputName('routeName')).type('2');
    cy.get(getDialogActions).find(getButtonText).contains('Сохранить').click();
    cy.get(routesItemName).contains('Route Title2').click();
    cy.get(getDialogActions).find(getButtonText).contains('Удалить').click();
    cy.get(getButtonText).contains('Да').click();
    cy.get(headerTitle).contains('Действия: маршруты');
  });

  });