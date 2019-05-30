import {
  inputRight, 
  getInputName, 
  getButtonText, 
  dialog_actions, 

  randomName,
  getDropdownList,
  getDropdownListName,
  chip_title
} from "../constants/elementSiteConst";

describe('Создание маршрута', () => {
beforeEach(() => {
 cy.login2();
 cy.visit("/actions/routes");
});

it('Создание маршрута', () => {
 cy.get(inputRight).click();
 cy.get(getDropdownList).contains('AuotestsOrgStruct').click();
 cy.get(getButtonText).contains('Создать маршрут').click();
 cy.get(getInputName('routeName')).type(randomName);
 cy.get(getInputName('employeeId')).click()
 cy.get(getDropdownListName).contains('Евгений Владимирович').click();

 cy.get(chip_title).first()
 .trigger('mousedown', { which: 1 })
 .trigger('dragstart', {})
 .trigger('drag', {});

 cy.get(chip_title).first()
 .trigger('mousedown', { which: 2, force: true, view: window }) // <-- here
 .trigger('mousemove', { position: 'right', view: window })   

 cy.get(chip_title).first()
  .trigger('mousedown', { which: 1, pageX: 600, pageY: 10000 })
  .trigger('mousemove', { clientX: 200, clientY: 300 })


 cy.get('#applyToday').click();
 cy.get(dialog_actions).find(getButtonText).contains('Создать').click();

 cy.get(chip_title).first()
 .trigger("mousedown", { which: 1 })
 .trigger("mousemove", {clientX: 500, clientY: 0})
 .trigger("mouseup")


 cy.get('div[class *= "chip_root__1h2ZV routeDialogTtItem_chip"').first()
 .trigger("mousedown", { which: 1 })
 .trigger("mousemove", {clientX: 800, clientY: 800})
 .trigger('mouseup', {force: true})
});
it.only('Создание маршрута2', () => {
  cy.get(inputRight).click();
  cy.get(getDropdownList).contains('AuotestsOrgStruct').click();
  cy.get(getButtonText).contains('Создать маршрут').click();
 

  cy.get('div[class *= "chip_root__1h2ZV routeDialogTtItem_chip"]').first()
  .trigger('dragstart')
cy.get('div[class *= "routeDialogDayList_list"]').first()
  .trigger('drop')
 });
 
});