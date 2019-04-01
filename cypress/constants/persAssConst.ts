export const panel = 'div[class*="assignmentPanel_root"]';
export const createAssignmnetButton = 'div[class*=header_rightSection] > div[title="Создать поручение"]';
export const titleInput = `${panel} input[name="assignmentTitle"]`;
export const descriptionInput = `${panel} input[name="assignmentDescription"]`;
export const webRoleInput = `${panel} input[name="webRoleId"]`;
export const tradepointInput = `${panel} input[name="tradePointId"]`;
export const submit = `${panel} button[type="submit"]`;
export const spanErrorSelector = (sel: string) => `${sel} ~ div[class*="input_description"] span`;
export const toHaveText = (text: string) => (el: any) => expect(el).to.have.text(text);