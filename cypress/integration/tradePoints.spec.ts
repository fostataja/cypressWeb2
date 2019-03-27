import {
  triTochki, getButtonText, getInputName, secondInList, successNotification
} from "../constants/elementSiteConst";


describe('CRUD Торговых Точек', () => {
  beforeEach(() => {
    cy.login2();
    cy.visit("/directories/tradePoints");
  });

  it('Создать Торговую Точку', () => {
    cy.get(triTochki).click();
    cy.get(getButtonText).contains('Добавить новую ТТ').click();
    cy.get(getInputName('ttName')).type('newTradePoint');
    cy.get(getInputName('channelSaleId')).click();
    cy.get(secondInList).click();
    cy.get(getButtonText).contains('Сохранить').click();
    cy.get(successNotification).contains('Создано успешно');
  });

});