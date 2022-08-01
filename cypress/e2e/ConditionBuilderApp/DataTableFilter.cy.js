describe('DataTable Filter', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  const addConditionGroupBtn = 'button[data-test-id^="add-condition-group"]';
  const dataTableAllCellsId = '.MuiDataGrid-cell[data-field="id"]';
  const addConditionRuleBtn = 'button[data-test-id^="add-condition-rule"]';
  const removeConditionRuleBtn = 'button[data-test-id^="remove-condition-rule"]';
  const selectOperator = 'div[data-test-id^="select-operator"]';
  const selectCondition = 'div[data-test-id^="select-left-condition"]';
  const inputOperand = 'div[data-test-id^="input-operand"]';

  const referDropDownName = (name) => {
    return `ul > li[data-value="${name}"]`;
  };

  it('should load all rows initially', () => {
    cy.get(dataTableAllCellsId)
      .should('have.length', 5)
      .should('contain.text', 1)
      .should('contain.text', 2)
      .should('contain.text', 6)
      .should('contain.text', 10)
      .should('contain.text', 370);
  });

  it('should work for case: recclass Contain l or L', () => {
    cy.get(`${selectCondition}`).click().get(referDropDownName('recclass')).click();
    cy.get(`${selectCondition}`).should('contain.text', 'recclass');

    cy.get(`${selectOperator}`).click().get(referDropDownName('Contain')).click();
    cy.get(`${selectOperator}`).should('contain.text', 'Contain');

    cy.get(`${inputOperand}`).type('l');
    cy.get(`${inputOperand} input`).should('have.value', 'l');

    cy.get(dataTableAllCellsId)
      .should('have.length', 3)
      .should('contain.text', 1)
      .should('contain.text', 10)
      .should('contain.text', 370);

    cy.get(`${inputOperand}`).clear().type('L');
    cy.get(`${inputOperand} input`).should('have.value', 'L');

    cy.get(dataTableAllCellsId)
      .should('have.length', 3)
      .should('contain.text', 1)
      .should('contain.text', 10)
      .should('contain.text', 370);
  });

  it('should work for case: reclat LessThan 50', () => {
    cy.get(`${selectCondition}`).click().get(referDropDownName('reclat')).click();
    cy.get(`${selectCondition}`).should('contain.text', 'reclat');

    cy.get(`${selectOperator}`).click().get(referDropDownName('LessThan')).click();
    cy.get(`${selectOperator}`).should('contain.text', 'LessThan');

    cy.get(`${inputOperand}`).type('50');
    cy.get(`${inputOperand} input`).should('have.value', '50');

    cy.get(dataTableAllCellsId)
      .should('have.length', 2)
      .should('contain.text', 10)
      .should('contain.text', 370);
  });

  it('should work for case: name Contain aa with new empty rule, then with populated rule, then with no rules', () => {
    // name Contain aa
    cy.get(`${selectCondition}`).click().get(referDropDownName('name')).click();
    cy.get(`${selectCondition}`).should('contain.text', 'name');

    cy.get(`${selectOperator}`).click().get(referDropDownName('Contain')).click();
    cy.get(`${selectOperator}`).should('contain.text', 'Contain');

    cy.get(`${inputOperand}`).type('aa');
    cy.get(`${inputOperand} input`).should('have.value', 'aa');

    cy.get(dataTableAllCellsId).should('have.length', 2).should('contain.text', 1).should('contain.text', 2);

    // add new empty rule
    cy.get(addConditionRuleBtn).click();
    cy.get(dataTableAllCellsId).should('have.length', 2).should('contain.text', 1).should('contain.text', 2);

    // Add new (2) OR condition: id Equals 6
    cy.get(`${selectCondition}`).last().click().get(referDropDownName('id')).click();
    cy.get(`${selectCondition}`).last().should('contain.text', 'id');

    cy.get(`${selectOperator}`).last().click().get(referDropDownName('Equals')).click();
    cy.get(`${selectOperator}`).last().should('contain.text', 'Equals');

    cy.get(`${inputOperand}`).last().type('6');
    cy.get(`${inputOperand} input`).last().should('have.value', '6');

    cy.get(dataTableAllCellsId)
      .should('have.length', 3)
      .should('contain.text', 1)
      .should('contain.text', 2)
      .should('contain.text', 6);

    // REMOVE new rule
    cy.get(removeConditionRuleBtn).last().click();
    cy.get(dataTableAllCellsId).should('have.length', 2).should('contain.text', 1).should('contain.text', 2);

    // Remove all rules
    cy.get(removeConditionRuleBtn).click();
    cy.get(dataTableAllCellsId)
      .should('have.length', 5)
      .should('contain.text', 1)
      .should('contain.text', 2)
      .should('contain.text', 6)
      .should('contain.text', 10)
      .should('contain.text', 370);
  });

  it('should work for case: add new empty rule', () => {
    cy.get(addConditionRuleBtn).click();
    cy.get(dataTableAllCellsId)
      .should('have.length', 5)
      .should('contain.text', 1)
      .should('contain.text', 2)
      .should('contain.text', 6)
      .should('contain.text', 10)
      .should('contain.text', 370);
  });

  it('should work for case: year Not Contain 1880', () => {
    cy.get(`${selectCondition}`).click().get(referDropDownName('year')).click();
    cy.get(`${selectCondition}`).should('contain.text', 'year');

    cy.get(`${selectOperator}`).click().get(referDropDownName('Not Contain')).click();
    cy.get(`${selectOperator}`).should('contain.text', 'Not Contain');

    cy.get(`${inputOperand}`).type('1880');
    cy.get(`${inputOperand} input`).should('have.value', '1880');

    cy.get(dataTableAllCellsId)
      .should('have.length', 4)
      .should('contain.text', 2)
      .should('contain.text', 6)
      .should('contain.text', 10)
      .should('contain.text', 370);
  });

  it('should work for case: name Regexp aa', () => {
    cy.get(`${selectCondition}`).click().get(referDropDownName('name')).click();
    cy.get(`${selectCondition}`).should('contain.text', 'name');

    cy.get(`${selectOperator}`).click().get(referDropDownName('Regex')).click();
    cy.get(`${selectOperator}`).should('contain.text', 'Regex');

    cy.get(`${inputOperand}`).type('aa');
    cy.get(`${inputOperand} input`).should('have.value', 'aa');

    cy.get(dataTableAllCellsId).should('have.length', 2).should('contain.text', 1).should('contain.text', 2);
  });

  it('should work for case: id Regexp [1|2]', () => {
    cy.get(`${selectCondition}`).click().get(referDropDownName('id')).click();
    cy.get(`${selectCondition}`).should('contain.text', 'id');

    cy.get(`${selectOperator}`).click().get(referDropDownName('Regex')).click();
    cy.get(`${selectOperator}`).should('contain.text', 'Regex');

    cy.get(`${inputOperand}`).type('[1|2]');
    cy.get(`${inputOperand} input`).should('have.value', '[1|2]');

    cy.get(dataTableAllCellsId)
      .should('have.length', 3)
      .should('contain.text', 1)
      .should('contain.text', 2)
      .should('contain.text', 10);
  });

  it('should work for case: id Regexp \\d', () => {
    cy.get(`${selectCondition}`).click().get(referDropDownName('id')).click();
    cy.get(`${selectCondition}`).should('contain.text', 'id');

    cy.get(`${selectOperator}`).click().get(referDropDownName('Regex')).click();
    cy.get(`${selectOperator}`).should('contain.text', 'Regex');

    cy.get(`${inputOperand}`).type('\\d');
    cy.get(`${inputOperand} input`).should('have.value', '\\d');

    cy.get(dataTableAllCellsId)
      .should('have.length', 5)
      .should('contain.text', 1)
      .should('contain.text', 2)
      .should('contain.text', 6)
      .should('contain.text', 10)
      .should('contain.text', 370);
  });

  it('should work for simple case with OR + AND ', () => {
    cy.get(`${selectCondition}`).click().get(referDropDownName('mass')).click();
    cy.get(`${selectCondition}`).should('contain.text', 'mass');

    cy.get(`${selectOperator}`).click().get(referDropDownName('GreaterThan')).click();
    cy.get(`${selectOperator}`).should('contain.text', 'GreaterThan');

    cy.get(`${inputOperand}`).type('20');
    cy.get(`${inputOperand} input`).should('have.value', '20');

    cy.get(dataTableAllCellsId).should('have.length', 5);

    cy.get(addConditionGroupBtn).click();
    cy.get(dataTableAllCellsId).should('have.length', 5);

    // Add OR to second AND
    cy.get(`${selectCondition}`).last().click().get(referDropDownName('id')).click();
    cy.get(`${selectCondition}`).last().should('contain.text', 'id');

    cy.get(`${selectOperator}`).last().click().get(referDropDownName('GreaterThan')).click();
    cy.get(`${selectOperator}`).last().should('contain.text', 'GreaterThan');

    cy.get(`${inputOperand}`).last().type('6');
    cy.get(`${inputOperand} input`).last().should('have.value', '6');

    cy.get(dataTableAllCellsId)
      .should('have.length', 2)
      .should('contain.text', 10)
      .should('contain.text', 370);
  });

  it('should work for complex case with OR + AND ', () => {
    cy.get(`${selectCondition}`).click().get(referDropDownName('mass')).click();
    cy.get(`${selectCondition}`).should('contain.text', 'mass');

    cy.get(`${selectOperator}`).click().get(referDropDownName('GreaterThan')).click();
    cy.get(`${selectOperator}`).should('contain.text', 'GreaterThan');

    cy.get(`${inputOperand}`).type('1000');
    cy.get(`${inputOperand} input`).should('have.value', '1000');

    cy.get(dataTableAllCellsId).should('have.length', 2);

    cy.get(addConditionRuleBtn).click();
    cy.get(dataTableAllCellsId).should('have.length', 2);

    // Add second OR condition to 1st group: id Equals 1
    cy.get(`${selectCondition}`).last().click().get(referDropDownName('id')).click();
    cy.get(`${selectCondition}`).last().should('contain.text', 'id');

    cy.get(`${selectOperator}`).last().click().get(referDropDownName('Equals')).click();
    cy.get(`${selectOperator}`).last().should('contain.text', 'Equals');

    cy.get(`${inputOperand}`).last().type('1');
    cy.get(`${inputOperand} input`).last().should('have.value', '1');

    cy.get(dataTableAllCellsId).should('have.length', 3);

    cy.get(addConditionGroupBtn).click();
    cy.get(dataTableAllCellsId).should('have.length', 3);

    // Add OR to second AND
    cy.get(`${selectCondition}`).last().click().get(referDropDownName('name')).click();
    cy.get(`${selectCondition}`).last().should('contain.text', 'name');

    cy.get(`${selectOperator}`).last().click().get(referDropDownName('Contain')).click();
    cy.get(`${selectOperator}`).last().should('contain.text', 'Contain');

    cy.get(`${inputOperand}`).last().type('a');
    cy.get(`${inputOperand} input`).last().should('have.value', 'a');
    cy.get(dataTableAllCellsId).should('have.length', 3);

    // Add second OR to second AND
    cy.get(addConditionRuleBtn).last().click();
    cy.get(dataTableAllCellsId).should('have.length', 3);

    cy.get(`${selectCondition}`).last().click().get(referDropDownName('recclass')).click();
    cy.get(`${selectCondition}`).last().should('contain.text', 'recclass');

    cy.get(`${selectOperator}`).last().click().get(referDropDownName('Contain')).click();
    cy.get(`${selectOperator}`).last().should('contain.text', 'Contain');

    cy.get(`${inputOperand}`).last().type('H');
    cy.get(`${inputOperand} input`).last().should('have.value', 'H');
    cy.get(dataTableAllCellsId).should('have.length', 3);
  });
});
