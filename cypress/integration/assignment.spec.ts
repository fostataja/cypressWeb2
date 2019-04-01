import { 
  createAssignmnetButton, titleInput, tradepointInput, submit, descriptionInput, webRoleInput, spanErrorSelector
} from "../constants/persAssConst";
import {
  successNotification, secondInList
} from "../constants/elementSiteConst";

describe('Создание поручений', () => {
  beforeEach(() => {
    cy.login2();
  });

  it('Создать поручение', () => {
    cy.get(createAssignmnetButton).click();
    cy.get(titleInput).type('Cypress Assignment');
    cy.get(tradepointInput).click();
    cy.get(secondInList).click();
    cy.get(submit).click();
    cy.get(successNotification).contains('Поручение успешно созданно');
  });

  it('Создать поручение со всеми полями', () => {
    cy.get(createAssignmnetButton).click();
    cy.get(titleInput).type('Cypress Assignment');
    cy.get(descriptionInput).type('Cypress Description');
    cy.get(webRoleInput).click();
    cy.get(secondInList).click();
    cy.get(tradepointInput).click();
    cy.get(secondInList).click();
    cy.get(submit).click();
    cy.get(successNotification).contains('Поручение успешно созданно');
    });
  it('Поручение без заполнения полей', () => {
    cy.get(createAssignmnetButton).click();
    cy.get(submit).click();
    cy.get(spanErrorSelector(titleInput)).contains('Поле обязательно для заполнения');
    cy.get(spanErrorSelector(tradepointInput)).contains('Поле обязательно для заполнения');

  });

});
