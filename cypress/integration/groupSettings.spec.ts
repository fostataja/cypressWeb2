import {
  getButtonText, 
  dialog_actions, 
  gridFilter,
  search,
  buttonIconWrap,
  filterColumn,
 } from "../constants/elementSiteConst";

describe('Настройки группы пользователей', () => {
beforeEach(() => {
 cy.login2();
 cy.visit("settings/userGroups");
});

it('Редактирование настроек', () => {
  cy.get(gridFilter).first().click();
  cy.get(filterColumn).eq(3).click();
  cy.get(search).first().type("Руководитель мобильных сотрудников");
  cy.get(buttonIconWrap).eq(1).click();
  cy.get(dialog_actions).find(getButtonText).contains('Отмена').click();


});


});