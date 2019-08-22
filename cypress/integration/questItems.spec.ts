import {
  getButtonText, getInputName, successNotification, randomName, dialog_actions, chip_title, buttonIconWrap, secondInList, switcherItem, getDropdownListName, MuiLinearProgress} from "../constants/elementSiteConst";
;



describe('CRUD Вопросов', () => {
  before(() => {
    cy.login2();
    cy.visit("/actions/quest");

  });
  beforeEach(() => {
    Cypress.Cookies.preserveOnce('UserId.Token')
  });
  

  // function add ( a: string) {
  //   cy.title().should('eq','Действия: управление анкетами');
  //   cy.get(chip_title).contains('Autotests QH').first().click()
  //   cy.get(getButtonText).contains('Показать вопросы').click();
  //   cy.get(getButtonText).contains('Создать Вопрос').click();
  //   cy.get(getInputName('questionName')).type(a);
  //   cy.get(dialog_actions).find(getButtonText).contains('Создать').click();
  // }
  // it('Создать вопрос Из функции', (add) => {
  //   cy.title().should('eq','Действия: управление анкетами');
  //   cy.get(chip_title).contains('Autotests QH').first().click()
  //   cy.get(getButtonText).contains('Показать вопросы').click();
  //   cy.get(getButtonText).contains('Создать Вопрос').click();
  //   cy.get(getInputName('questionName')).type(a);
  //   cy.get(dialog_actions).find(getButtonText).contains('Создать').click();
  //   cy.get(successNotification).should('contain','Создано успешно')
  //   cy.get(successNotification).contains('Создано успешно').click();

  // });

  it('Создать вопрос', () => {
    cy.title().should('eq','Действия: управление анкетами');
    cy.get(chip_title).contains('Autotests QH').first().click()
    cy.get(getButtonText).contains('Показать вопросы').click().wait(400);
    cy.get(MuiLinearProgress).should('not.visible');
    cy.get(MuiLinearProgress).should('be.visible');
    cy.get(getButtonText).contains('Создать Вопрос').click();
    cy.get(getInputName('questionName')).type(randomName);
    cy.get(getInputName('questCategoryId')).click();
    cy.get(secondInList).click().wait(200);
    cy.get(dialog_actions).find(getButtonText).contains('Создать').click();
    cy.get(successNotification).should('contain','Создано успешно')
    cy.get(successNotification).contains('Создано успешно').click();

  });
  it('Редактировать вопрос', () => {
    cy.get(buttonIconWrap).eq(1).click();
    cy.get(getInputName('questCategoryId')).click();
    cy.get(secondInList).click().wait(200);
    cy.get(dialog_actions).find(getButtonText).contains('Сохранить').click();
    cy.get(successNotification).should('contain','Сохранено успешно')
    cy.get(successNotification).contains('Сохранено успешно').click();

  });
  it('Удалить вопрос', () => {
    cy.get(buttonIconWrap).eq(1).click();
    cy.get(dialog_actions).find(getButtonText).contains('Удалить').click();
    cy.get(dialog_actions).find(getButtonText).contains('Да').click();
    cy.get(successNotification).should('contain','Удалено успешно');
    cy.get(successNotification).contains('Удалено успешно').click();
    cy.get(chip_title).should('be.visible').and('not.contain', randomName)

  });
  it('Создать вопрос  со всеми полями', () => {
    cy.get(getButtonText).contains('Создать Вопрос').click();
    cy.get(getInputName('questionName')).type(randomName);
    cy.get(getInputName('date')).click({ force: true });
    cy.get(getButtonText).contains('Применить').click();
    cy.get(getInputName('questCategoryId')).click();
    cy.get(secondInList).click().wait(200);
    cy.get(getInputName('productCategory')).type('Some product category');
    cy.get(getInputName('brand')).type('Some brand');
    cy.get(getInputName('activityFreq')).click({ force: true });
    cy.get(secondInList).click().wait(200);
    cy.get(switcherItem).contains('Да').click();
    cy.get('#photoReport').click({ force: true });
    cy.get('#activityFreqChangeByAnswer').click({ force: true });
    cy.get(getInputName('salePointsIds')).click().type('some streer');
    cy.get(getDropdownListName).contains('TradePoint').click();
    // cy.get(getInputName('channelSaleId')).click().type('some streer');
    // cy.get(secondInList).click();





    cy.get(dialog_actions).find(getButtonText).contains('Создать').click();
    cy.get(successNotification).should('contain','Создано успешно')
    cy.get(successNotification).contains('Создано успешно').click();

  });
  
  it('Создать вопрос БЕЗ обязательных полей', () => {
    cy.get(getButtonText).contains('Создать Вопрос').click();
    cy.get(dialog_actions).find(getButtonText).contains('Создать').click();
    cy.get('div[class *= "input_description"]').should('contain','Поле обязательно для заполнения');

  });
  });