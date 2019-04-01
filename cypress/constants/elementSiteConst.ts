export const inputRight  = 'div[class*="input_rightSide"]'; 
export const getDialogActions  = `div[class*="dialog_actions"]`; 
export const inputRoot  = 'div[class*="input_root"]'; 
export const getInputName = (inputName: string) => `input[name="${inputName}"]`;
export const getButtonText  = `span[class*="button_text"]`; 
export const routesItemName  = `div[class*="routesItem_name"]`;
// export const headerTitle = `div[class*="header_title"]` - лучше использовать     cy.title().should('eq','Действия: маршруты');
export const triTochki = `button[class *="gridMenu_icon"]`
export const triTochkiTwo = `button[class *="menu_icon"]`
export const getDropdownList = `div[class *="dropdownList_root"]`
export const secondInList = `div[class *="dropdownList_root"] > div:nth-child(2)`
export const successNotification = 'div[class*="notification_title"]';
export const closeNotofic = 'button[class *="Toastify__close-button"]';
export const elementMenu = `button[class *="menu_menuItem"]`



export const randomName = Date(); 
export const randomNameTwo = Date(); 




// Оргструктура:
// export const elementOrg  = `span[class*="org-page-struct_plateText__392vS"]`
export const elementOrg  = `div[class*="rstcustom__row"]`
export const createOrgButton  = `div[class*="rstcustom__toolbarButton"]`

// Торговые Точки
export const addNewTT = `button[class *="gridMenu_icon"]`
export const editTt = `button[class *="buttonIconWrap_root"]`

// export const inputName = `button[class *="gridMenu_icon"]`

//  Грид
export const gridFilter = 'span[class *= "ag-icon ag-icon-menu"]' 
export const filterColumn = 'span[class *= "ag-icon ag-icon-filter"]' 
export const chekAll = 'label[id *= "selectAllContainer"]'
export const search = 'input[class *= "ag-filter-filter"]'  
export const checkValue = 'div[class *= "ag-virtual-list"]'
