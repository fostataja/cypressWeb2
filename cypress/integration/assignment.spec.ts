import { 
  createAssignmnetButton, titleInput, tradepointInput, submit, descriptionInput, webRoleInput, spanErrorSelector
} from "../constants/persAssConst";
import {
  successNotification, secondInList, closeNotofic
} from "../constants/elementSiteConst";

describe('Создание поручений', () => {
  beforeEach(() => {
    // before(() => {
    cy.login2();
    cy.visit("");

  });
  beforeEach(() => {
    Cypress.Cookies.preserveOnce('UserId.Token')
  });

  it('Создать поручение', () => {
    cy.get(createAssignmnetButton).click();
    cy.get(titleInput).type('Cypress Assignment');
    cy.get(tradepointInput).click();
    cy.get(secondInList).click();
    cy.get(submit).click();
    cy.get(successNotification).should('contain','Поручение успешно созданно');

    // cy.get(closeNotofic).click();
  });

  it('Создать поручение со всеми полями', () => {
    cy.get(createAssignmnetButton).click();
    cy.get(titleInput).type('Cypress Assignment');
    cy.get(descriptionInput).type('Cypress Description');
    cy.get(webRoleInput).click({ force: true });
    cy.get(secondInList).click();
    cy.get(tradepointInput).click();
    cy.get(secondInList).click();
    cy.get(submit).click();
    cy.get(successNotification).should('contain','Поручение успешно созданно');
    cy.get(closeNotofic).click();
    });
  it('Поручение без заполнения полей', () => {
    cy.get(createAssignmnetButton).click().wait(200);;
    cy.get(submit).click();
    cy.get(spanErrorSelector(titleInput)).should('contain','Поле обязательно для заполнения');
    cy.get(spanErrorSelector(tradepointInput)).should('contain','Поле обязательно для заполнения');

  });

});
