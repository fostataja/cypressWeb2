import {
  getButtonText, getInputName, successNotification, randomName, closeNotofic, gridFilter, filterColumn, search, randomNameTwo, buttonIconWrap, body_viewport, secondInList} from "../constants/elementSiteConst";
;



describe('CRUD Товаров', () => {
  before(() => {
    cy.login2();
    cy.visit("/directories/goods");
  });
  beforeEach(() => {
    Cypress.Cookies.preserveOnce('UserId.Token')
  });
  

  it('Создать товар', () => {
    cy.get(getButtonText).contains('Создать').click();
    cy.get(getInputName('productName')).type(randomName);
    cy.get(getInputName('extId')).type(randomName);
    cy.get('div[class *= "dialog_actions"]').find(getButtonText).contains('Создать').click();
    cy.get(successNotification).should('contain','Создано успешно');
    cy.get(closeNotofic).click();
  });

  it('Редактировать товар', () => {
  cy.get(gridFilter).first().click();
  cy.get(filterColumn).eq(6).click();
  cy.get(search).first().type(randomName).wait(500);
  cy.get(body_viewport).contains(randomName).parents(body_viewport).find(buttonIconWrap).eq(0).click();
  cy.get(getInputName('extId')).clear().type(randomName + randomNameTwo);
  cy.get('div[class *= "dialog_actions"]').find(getButtonText).contains('Сохранить').click();
  cy.get(successNotification).should('contain','Сохранено успешно');
  cy.get(closeNotofic).click();
  
});



it('Удалить товар', () => { 
  cy.get(body_viewport).contains(randomName).parents(body_viewport).find(buttonIconWrap).eq(0).click();
  cy.get('div[class *= "dialog_actions"]').find(getButtonText).contains('Удалить').click();
  cy.get(getButtonText).contains('Да').click();
  cy.get(successNotification).should('contain','Удалено успешно');
  cy.get(closeNotofic).eq(0).click();

});


  it('Создать товар со всеми полями', () => {
    cy.get(getButtonText).contains('Создать').click();
    cy.get(getInputName('productName')).type(randomName);
    cy.get(getInputName('manufacturerId')).click()
    cy.get(secondInList).click().wait(200);
    cy.get(getInputName('brandId')).click()
    cy.get(secondInList).click().wait(200);
    cy.get(getInputName('subBrandId')).click()
    cy.get(secondInList).click().wait(200);
    cy.get(getInputName('extId')).type(randomName);
    cy.get(getInputName('unitId')).click()
    cy.get(secondInList).click();
    cy.get(getInputName('quantity')).type('123');
    cy.get(getInputName('length')).type('123');
    cy.get(getInputName('width')).type('123');
    cy.get(getInputName('height')).type('123');
    cy.get(getInputName('vatRate')).type('123');
    cy.get(getInputName('basePrice')).type('123');
    cy.get(getInputName('license')).type(randomName);
    cy.get(getInputName('ean')).type(randomName);
    cy.get(getInputName('productTypeId')).click()
    cy.get(secondInList).click();
    cy.get(getInputName('productTypeId')).click()
    cy.get(secondInList).click();
    cy.get(getInputName('qntPerPack')).type('123');
    cy.get(getInputName('qntPerCase')).type('123');
    cy.get(getInputName('qntPerPall')).type('123');
    cy.get('div[class *= "dialog_actions"]').find(getButtonText).contains('Создать').click();
    cy.get(successNotification).should('contain','Создано успешно');
    cy.get(closeNotofic).click();
 
  });
  it('Создать товар без обязательных полей', () => {
    cy.get(getButtonText).contains('Создать').click()
    cy.get(getInputName('manufacturerId')).click()
    cy.get(secondInList).click().wait(200);
    cy.get('div[class *= "dialog_actions"]').find(getButtonText).contains('Создать').click();
    cy.get('div[class *= "input_description"]').should('contain','Поле обязательно для заполнения');
    cy.get('div[class *= "dialog_actions"]').find(getButtonText).contains('Отмена').click();

  });
   
  it('Создать товар с одинаковым  ean', () => {
    cy.get(getButtonText).contains('Создать').click()
    cy.get(getInputName('productName')).type(randomName);
    cy.get(getInputName('ean')).type(randomName);
    cy.get('div[class *= "dialog_actions"]').find(getButtonText).contains('Создать').click();
    cy.get('div[class *= "input_description"]').should('contain','Не уникально');
    cy.get('div[class *= "dialog_actions"]').find(getButtonText).contains('Отмена').click();
  });

  it('Обновить товар с одинаковым  ean', () => {
    cy.get(getButtonText).contains('Создать').click()
    cy.get(getInputName('productName')).type(randomName);
    cy.get(getInputName('ean')).type(randomName + randomNameTwo);
    cy.get('div[class *= "dialog_actions"]').find(getButtonText).contains('Создать').click();
    cy.get(successNotification).should('contain','Создано успешно');
    cy.get(closeNotofic).click();
    cy.get(getButtonText).contains('Создать').click()
    cy.get(getInputName('productName')).type(randomName);
    cy.get(getInputName('ean')).type(randomName + randomNameTwo);
    cy.get('div[class *= "dialog_actions"]').find(getButtonText).contains('Создать').click();
    cy.get('div[class *= "input_description"]').should('contain','Не уникально');
  });

});

  