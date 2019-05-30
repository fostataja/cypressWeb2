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
  input_description,
  input_clearButton} from "../constants/elementSiteConst";

describe('Группа пользователей', () => {
beforeEach(() => {
 cy.login2();
 cy.visit("settings/userGroups");
});

it('Создание группы пользователей', () => {
  cy.get(getButtonText).contains('Создать').click();
  cy.get(getInputName('groupName')).type(randomName);
  cy.get(getInputName('roleId')).click();
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

it('Удаление группы пользователей', () => {

  cy.get(gridFilter).first().click();
  cy.get(filterColumn).eq(4).click();
  cy.get(search).type(randomNameTwo);
   cy.get(buttonIconWrap).first().click();
  cy.get(dialog_actions).find(getButtonText).contains('Удалить').click();
  cy.get(dialog_actions).eq(1).find(getButtonText).contains('Да').click();
  cy.get(successNotification).should('contain','Удалено успешно');
  cy.get(closeNotofic).click();
 
 });

it('Создание группы пользователей с таким же наименованием', () => {
  cy.get(getButtonText).contains('Создать').click();
  cy.get(getInputName('groupName')).type("Wed Apr 17 2019 21:08:47 GMT+0300 (Восточная Европа, летнее время)");
  cy.get(getInputName('roleId')).click();
  cy.get(getDropdownListName).first().click();
  cy.get(getInputName('manufacturerIds')).click();
  cy.get(getDropdownListName).first().click();
 cy.get(dialog_actions).find(getButtonText).contains('Создать').click();
 cy.get(input_description).should('contain','Не уникально');
 cy.get(input_clearButton).click();
 cy.get(dialog_actions).find(getButtonText).contains('Отмена').click();

});
});