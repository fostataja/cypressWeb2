import { 
  createAssignmnetButton, titleInput, tradepointInput, submit, successNotification, descriptionInput, webRoleInput, spanErrorSelector
} from "../constants/persAssConst";

describe('Создание поручений', () => {
  beforeEach(() => {
    cy.login2();
  });

  it('Создать поручение', () => {
    cy.get(createAssignmnetButton).click();
    cy.get(titleInput).type('Cypress Assignment');
    cy.get(tradepointInput).click();
    cy.get('div[class*="dropdown-list_root"] > div:nth-child(2)').click();
    cy.get('div[class*="left-menu_root"]').click();
    cy.get(submit).click();
    cy.get(successNotification).should('to.be.visible');
    cy.get(successNotification).should(($div) => expect($div).contains('Поручение успешно созданно'));
  });

  it('Создать поручение со всеми полями', () => {
    cy.get(createAssignmnetButton).click();
    cy.get(titleInput).type('Cypress Assignment');
    cy.get(descriptionInput).type('Cypress Description');
    cy.get(tradepointInput).click();
    cy.get('div[class*="dropdown-list_root"] > div:nth-child(2)').click();
    cy.get('div[class*="left-menu_root"]').click();
    cy.get(webRoleInput).click();
    cy.get('div[class*="dropdown-list_root"] > div:nth-child(2)').click();
    cy.get('div[class*="left-menu_root"]').click();
    cy.get(submit).click();
    cy.get(successNotification).should('to.be.visible');
    cy.get(successNotification).should(($div) => expect($div).contains('Поручение успешно созданно'));
  });
  it('Поручение без заполнения полей', () => {
    cy.get(createAssignmnetButton).click();
    cy.get(submit).click();
    cy.get(spanErrorSelector(titleInput)).contains('Поле обязательно для заполнения');
    cy.get(spanErrorSelector(tradepointInput)).contains('Поле обязательно для заполнения');

  });

});
