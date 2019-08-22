import {
  getButtonText, getInputName, randomName, dialog_actions, successNotification, chip_title, randomNameTwo, secondInList} from "../constants/elementSiteConst";
;



describe('CRUD Анкет', () => {
  before(() => {
    cy.login2();
    cy.visit("/actions/quest");

  });
  beforeEach(() => {
    Cypress.Cookies.preserveOnce('UserId.Token')
  });
  

  it('Создать анкету', () => {
    cy.title().should('eq','Действия: управление анкетами');
    cy.get(getButtonText).contains('Создать').click();
    cy.get(getInputName('questionnaireName')).type(randomName);
    cy.get(dialog_actions).find(getButtonText).contains('Создать').click();
    cy.get(successNotification).should('contain','Создано успешно')
    cy.get(successNotification).contains('Создано успешно').click();
  });

  
  it('Редактировать анкету', () => {
    cy.get(chip_title).contains(randomName).parents('div[class *= "chip_root"]').find('button[class *= "chip_button"]').first().click({ force: true });
    cy.get(getInputName('questionnaireName')).clear().type(randomNameTwo);
    cy.get(dialog_actions).find(getButtonText).contains('Сохранить').click();
    cy.get(dialog_actions).find(getButtonText).contains('Да').click();
    cy.get(successNotification).should('contain','Сохранено успешно');
    cy.get(successNotification).contains('Сохранено успешно').click();
  });
  it('Удалить анкету', () => {
    cy.get(chip_title).contains(randomNameTwo).parents('div[class *= "chip_root"]').find('button[class *= "chip_button"]').first().click({ force: true });
    cy.get(dialog_actions).find(getButtonText).contains('Удалить').click();
    cy.get(dialog_actions).find(getButtonText).contains('Да').click();
    cy.get(successNotification).should('contain','Удалено успешно');
    cy.get(successNotification).contains('Удалено успешно').click();
    cy.get(chip_title).should('be.visible').and('not.contain', randomName)

     
  });

  it('Создать анкету со всеми полями', () => {
    cy.get(getButtonText).contains('Создать').click();
    cy.get(getInputName('questionnaireName')).type(randomName);
    cy.get(getInputName('typeId')).click({ force: true });
    cy.get(secondInList).click().wait(200);
    cy.get('#tasks').click({ force: true });
    cy.get('#reporting').click({ force: true });
    cy.get('#results').click({ force: true });
    cy.get(getInputName('visitTypes')).click()
    cy.get(secondInList).click().wait(200);
    cy.get(getInputName('manufacturerId')).click()
    cy.get(secondInList).eq(1).click().wait(200);
    cy.get(getInputName('questFilter')).click({ force: true });
    cy.get(secondInList).click().wait(200);
    cy.get('#loadPreviousAnswer').click({ force: true });
    cy.get(dialog_actions).find(getButtonText).contains('Создать').click();
    cy.get(successNotification).should('contain','Создано успешно');
    cy.get(successNotification).contains('Создано успешно').click();
  });
  it('Проверить анкету со всеми полями', () => {
    cy.login2();
    cy.visit("/actions/quest");
    cy.get(chip_title).contains(randomName).parents('div[class *= "chip_root"]').find('button[class *= "chip_button"]').first().click({ force: true });
    cy.get(getInputName('questionnaireName')).invoke('attr', 'value').should('eq',randomName);
    cy.get(getInputName('typeId')).invoke('attr', 'value').should('eq','Ассортиментная матрица');
    cy.get('#tasks').invoke('attr', 'aria-checked').should('eq','true');
    cy.get('#reporting').invoke('attr', 'aria-checked').should('eq','true');
    cy.get('#results').invoke('attr', 'aria-checked').should('eq','true');
    cy.get('div[class *= "dropdownMultiple_chipList"]').find(chip_title).invoke('attr', 'title').should('eq','Неплановый визит');
    cy.get(getInputName('manufacturerId')).invoke('attr', 'value').should('eq','0Белый медведь');
    cy.get(getInputName('questFilter')).invoke('attr', 'value').should('eq','Только обязательные');
    cy.get('#loadPreviousAnswer').invoke('attr', 'aria-checked').should('eq','true');
    cy.get(dialog_actions).find(getButtonText).contains('Отмена').click();
  });
  it('Удалить анкету со всеми полями', () => {
    cy.wait(200);
    cy.get(chip_title).contains(randomName).parents('div[class *= "chip_root"]').find('button[class *= "chip_button"]').first().click({ force: true });
    cy.get(dialog_actions).find(getButtonText).contains('Удалить').click();
    cy.get(dialog_actions).find(getButtonText).contains('Да').click();
    cy.get(successNotification).should('contain','Удалено успешно');
    cy.get(successNotification).contains('Удалено успешно').click();
    cy.get(chip_title).should('be.visible').and('not.contain', randomName)
     
  });


  // it.only('Удалить много одинаковых анкет', () => {
  //   let i = 0;
  //   while(i < 3) {
  //     cy.get(chip_title).contains('Tue May').parents('div[class *= "chip_root"]').find('button[class *= "chip_button"]').first().click({ force: true });
  //     cy.get(dialog_actions).find(getButtonText).contains('Удалить').click();
  //     cy.get(dialog_actions).find(getButtonText).contains('Да').click();
  //     cy.get(successNotification).should('contain','Удалено успешно'); 
  //     cy.wait(110);
  //     // cy.get(successNotification).contains('Удалено успешно').click();
  //     i++;
    // }
    
  // });
});