import {
   getInputName, randomName, getButtonText, randomNameTwo, triTochkiTwo, elementMenu} from "../constants/elementSiteConst";

describe('Создание Оргструктуры', () => {
beforeEach(() => {
 cy.login2();
 cy.visit("/directories/org");
});

it('CRUD оргструктуры', () => {
   cy.get(triTochkiTwo).click();
   cy.get(elementMenu).contains("Cкрыть сотрудников").click();
   cy.get('div[class *= "rstcustom__node"]').first().find('button[class *="buttonIconWrap_root"]').eq(2).click({ force: true });
 cy.get(getInputName('orgStructFolderName')).type(randomName);
 cy.get(getButtonText).contains('Создать').click();
 cy.get(getButtonText).contains('Сохранить').click();
cy.get('span[class *= "orgPageStruct_plateText"]').contains(randomName).parents('.rstcustom__node').find('button[class *="buttonIconWrap_root"]').eq(1).click({ force: true });
 cy.get(getInputName('orgStructFolderName')).clear().type(randomNameTwo);
 cy.get('div[class *= "dialog_actions"]').find(getButtonText).contains('Сохранить').click();
 cy.get(getButtonText).contains('Сохранить').click();
 cy.get('span[class *= "orgPageStruct_plateText"]').contains(randomNameTwo).parents('.rstcustom__node').find('button[class *="buttonIconWrap_root"]').eq(3).click({ force: true });
 cy.get(getButtonText).contains('Да').click();
 cy.get(getButtonText).contains('Сохранить').click();
 cy.get('.rstcustom__node').find('span[class *= "orgPageStruct_plateText"]').contains(randomNameTwo).should('not.exist');





});

});