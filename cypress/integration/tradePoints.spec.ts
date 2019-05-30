import {
  triTochki, getButtonText, getInputName, secondInList, successNotification, randomName, gridFilter, filterColumn, chekAll, search, checkValue, buttonIconWrap, closeNotofic
} from "../constants/elementSiteConst";



describe('CRUD Торговых Точек', () => {
  beforeEach(() => {
    cy.login2();
    cy.visit("/directories/tradePoints");
  });

  it('CRUD Торговую Точку', () => {
    cy.get(triTochki).click();
    cy.get(getButtonText).contains('Добавить новую ТТ').click();
    cy.get(getInputName('ttName')).type(randomName);
    cy.get(getInputName('channelSaleId')).click();
    cy.get(secondInList).click();
    cy.get(getButtonText).contains('Сохранить').click();
    cy.get(successNotification).should('contain','Создано успешно');
    cy.get(closeNotofic).click();
 
    cy.get(gridFilter).first().click();
    cy.get(filterColumn).eq(5).click();
    cy.get(chekAll).click();
    cy.get(search).type(randomName);
    cy.get(checkValue).eq(1).click();
    cy.get(buttonIconWrap).eq(1).click();
    cy.get(getInputName('streetAddress')).type('Test street address');
    cy.get(getButtonText).contains('Сохранить').click();
    cy.get(successNotification).should('contain','Сохранено успешно');
    cy.get(closeNotofic).click();


    cy.get(buttonIconWrap).eq(1).click();
    cy.get(getButtonText).contains('Удалить').click();
    cy.get(getButtonText).contains('Да').click();
    cy.get(successNotification).should('contain','Удалено успешно');
    cy.get(closeNotofic).click();


  // it('Редактировать Торговую Точку', () => {
  //   cy.get(gridFilter).first().click();
  //   cy.get(filterColumn).first().click();
  //   cy.get(chekAll).click();
  //   cy.get(search).type(ttname);
  //   cy.get(checkValue).click();
  //   cy.get(getInputName('streetAddress')).type('Test street address');
  //   cy.get(getButtonText).contains('Сохранить').click();
  //   cy.get(successNotification).contains('Сохранено успешно');

  // });

  // it('Удалить Торговую Точку', () => {
  //   cy.get(gridFilter).first().click();
  //   cy.get(filterColumn).eq(5).click();
  //   cy.get(chekAll).click();
  //   cy.get(search).type(ttname);
  //   cy.get(checkValue).eq(1).click();
  //   cy.get(editTt).eq(1).click();
  //   cy.get(getButtonText).contains('Удалить').click();
  //   cy.get(getButtonText).contains('Да').click();
  //   cy.get(successNotification).contains('Удалено успешно');

  // });

});
});