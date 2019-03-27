import {
   getInputName, getButtonText, createOrgButton
} from "../constants/elementSiteConst";

describe('Создание Оргструктуры', () => {
beforeEach(() => {
 cy.login2();
 cy.visit("/directories/org");
});

it('CRUD оргструктуры', () => {
  cy.get(createOrgButton).first().invoke('show').click();
 cy.get(createOrgButton).first().find(createOrgButton).first().invoke('show').click();
 cy.get('div[class*="dropdown-list_root"] > div:nth-child(2)').click();
 cy.get(getButtonText).contains('Создать маршрут').click();
 cy.get(getInputName('routeName')).type('Route Title');

});

});