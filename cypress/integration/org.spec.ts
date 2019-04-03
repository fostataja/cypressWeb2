import {
   getInputName, randomName, getButtonText, triTochkiTwo, elementMenu, randomNameTwo, orgPlateText, elementOrg, buttonIconWrap} from "../constants/elementSiteConst";

describe('Кейсы: Оргструктура', () => {
beforeEach(() => {
 cy.login2();
 cy.visit("/directories/org");
});

it('CRUD оргструктуры', () => {
   cy.get(triTochkiTwo).click();
   cy.get(elementMenu).contains("Cкрыть сотрудников").click();
   cy.get(elementOrg).first().find(buttonIconWrap).eq(2).click({ force: true });
 cy.get(getInputName('orgStructFolderName')).type(randomName);
 cy.get(getButtonText).contains('Создать').click();
 cy.get(getButtonText).contains('Сохранить').click();
 cy.get('input[class *= "input_input"]').type(randomName);
cy.get(orgPlateText).contains(randomName).parents(elementOrg).find(buttonIconWrap).eq(1).click({ force: true });
 cy.get(getInputName('orgStructFolderName')).clear().type(randomName + randomNameTwo);
 cy.get('div[class *= "dialog_actions"]').find(getButtonText).contains('Сохранить').click();
 cy.get(getButtonText).contains('Сохранить').click();
 cy.get(orgPlateText).contains(randomName + randomNameTwo).parents(elementOrg).find(buttonIconWrap).eq(3).click({ force: true });
 cy.get(getButtonText).contains('Да').click();
 cy.get(getButtonText).contains('Сохранить').click();
 expect(orgPlateText).not.contains(randomName + randomNameTwo);

//  cy.get(elementOrg).find(orgPlateText).contains(randomName + randomNameTwo).should('not.exist');





});

});