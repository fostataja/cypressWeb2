export const inputRight  = 'div[class*="input_rightSide"]'; 
export const inputRoot  = 'div[class*="input_root"]'; 
export const getInputName = (inputName: string) => `input[name="${inputName}"]`;
export const getButtonText  = `span[class*="button_text"]`; 
export const routesItemName  = `div[class*="routesItem_name"]`;
// export const headerTitle = `div[class*="header_title"]` - лучше использовать     cy.title().should('eq','Действия: управление анкетами');
export const triTochki = `button[class *="gridMenu_icon"]`
export const triTochkiTwo = `button[class *="menu_icon"]`
export const getDropdownList = `div[class *="dropdownList_root"]`
export const secondInList = `div[class *="dropdownList_root"] > div:nth-child(2)`
export const successNotification = 'div[class*="notification_title"]';
export const closeNotofic = 'button[class *="Toastify__close-button"]';
export const elementMenu = `button[class *="menu_menuItem"]`
export const buttonIconWrap = `button[class *="buttonIconWrap_root"]`
export const getDropdownListName = `button[class *="dropdownList_name"]`
export const input_description = `div[class *="input_description"]`
export const input_clearButton = `div[class *="input_clearButton"]`
// Таблица:
export const body_viewport ='div[class *= "ag-body-viewport ag-layout-normal ag-row-animation"]'
// Даилоговые окна
export const dialog_actions  = `div[class*="dialog_actions"]`; 
// Работа с Панельками (чипсы)
export const chip_title = 'div[class *= "chip_title"]';
// Рек ответы форматов вопросов
export const switcherItem = `button[class *="switcher_item"]`











export const randomName = Date(); 
export const randomNameTwo = 'new_123'; 




// Оргструктура:
export const elementOrg  = `div[class *= "rstcustom__node"]`
export const orgPlateText = 'span[class *= "orgPageStruct_plateText"]'
export const createOrgButton  = `div[class*="rstcustom__toolbarButton"]`

// Торговые Точки
export const addNewTT = `button[class *="gridMenu_icon"]`

// export const inputName = `button[class *="gridMenu_icon"]`

//  Грид
export const gridFilter = 'span[class *= "ag-icon ag-icon-menu"]' 
export const filterColumn = 'span[class *= "ag-icon ag-icon-filter"]' 
export const chekAll = 'label[id *= "selectAllContainer"]'
export const search = 'input[class *= "ag-filter-filter"]'  
export const checkValue = 'div[class *= "ag-virtual-list"]'
