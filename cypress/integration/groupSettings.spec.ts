import {
  getInputName, 
  getButtonText, 
  dialog_actions, 
  randomName,
  successNotification,
  closeNotofic,
  getDropdownListName,
  gridFilter,
  search,
  buttonIconWrap,
  randomNameTwo,
  filterColumn,
 } from "../constants/elementSiteConst";

describe('Настройки группы пользователей', () => {
beforeEach(() => {
 cy.login2();
 cy.visit("settings/userGroups");
});

it('Редактирование настроек', () => {
  cy.get(gridFilter).first().click();
  cy.get(filterColumn).eq(4).click();
  cy.get(search).type("Wed Apr 17 2019 21:08:47 GMT+0300 (Восточная Европа, летнее время)");
  cy.get(buttonIconWrap).eq(1).click();
 
  cy.get(getDropdownListName).first().click();
  cy.get(getInputName('manufacturerIds')).click();
  cy.get(getDropdownListName).first().click();
 cy.get(dialog_actions).find(getButtonText).contains('Создать').click();
 cy.get(successNotification).should('contain','Создано успешно');
 cy.get(closeNotofic).click();

});

it('Редактирование группы пользователей', () => {

 cy.get(gridFilter).first().click();
 cy.get(filterColumn).eq(4).click();
 cy.get(search).type(randomName);

  cy.get(buttonIconWrap).first().click();
 cy.get(getInputName('groupName')).type(randomNameTwo);
 cy.get(getInputName('roleId')).click();
 cy.get(getDropdownListName).eq(2).click();
 cy.get(getInputName('manufacturerIds')).click();
 cy.get(getDropdownListName).eq(2).click();
 cy.get(dialog_actions).find(getButtonText).contains('Сохранить').click();
 cy.get(successNotification).should('contain','Сохранено успешно');
 cy.get(closeNotofic).click();

});


});