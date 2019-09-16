import {
  getButtonText, getInputName, successNotification, randomName, gridFilter, filterColumn, search, buttonIconWrap, closeNotofic, secondInList, body_viewport, MuiLinearProgress
} from "../constants/elementSiteConst";



describe('CRUD Торговых Точек', () => {
  before(() => {
    cy.login2();
    cy.visit("/directories/tradePoints");
  });
  beforeEach(() => {
    Cypress.Cookies.preserveOnce('UserId.Token')
  });
  
  it('Создание Торговой Точки', () => {
    cy.get(MuiLinearProgress).should('not.visible');
    cy.get(MuiLinearProgress).should('be.visible');
    cy.get(getButtonText).contains('Создать').should('be.visible');

    cy.get(getButtonText).contains('Создать').click();
    cy.get(getInputName('ttName')).type(randomName);
    cy.get(getInputName('channelSaleId')).click();
    cy.get(secondInList).click();
    cy.get(getButtonText).contains('Сохранить').click();
    cy.get(successNotification).should('contain','Создано успешно');
    cy.get(closeNotofic).click();
});
it('Редактирование Торговой Точки', () => {
  cy.get(MuiLinearProgress).should('not.visible');

    cy.get(gridFilter).eq(1).click();
    cy.get(filterColumn).eq(6).click();
    cy.get(search).first().type(randomName).wait(1000);
    cy.get(body_viewport).contains(randomName).parents(body_viewport).find(buttonIconWrap).eq(1).click();
    cy.get(getInputName('streetAddress')).type('Test street address');
    cy.get(getButtonText).contains('Сохранить').click();
    cy.get(successNotification).should('contain','Сохранено успешно');
    cy.get(closeNotofic).click();
  });
  it('Удаление Торговой Точки', () => {
    cy.get(buttonIconWrap).eq(1).click().wait(500);;
    cy.get(getButtonText).contains('Удалить').click().wait(500);
    cy.get(getButtonText).contains('Да').click().wait(500);;
    cy.get(successNotification).should('contain','Удалено успешно');
    cy.get(successNotification).contains('Удалено успешно').click();
  });

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