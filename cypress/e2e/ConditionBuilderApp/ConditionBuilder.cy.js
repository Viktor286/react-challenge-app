import { defaultDataUrl } from '../../../src/Features/defaultSettings';

describe('Condition Builder', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.intercept('GET', defaultDataUrl, { fixture: 'y77d-th95.json' }).as('getTableData');
    cy.wait('@getTableData').its('response.body').should('have.length', 5);
  });

  const conditionGroup = 'div[data-test-id^="condition-group-"]';
  const addConditionGroupBtn = 'button[data-test-id^="add-condition-group"]';

  const conditionRule = 'div[data-test-id^="condition-rule-"]';
  const selectOperator = 'div[data-test-id^="select-operator"]';
  const selectCondition = 'div[data-test-id^="select-left-condition"]';
  const inputOperand = 'div[data-test-id^="input-operand"]';
  const removeConditionRuleBtn = 'button[data-test-id^="remove-condition-rule"]';
  const addConditionRuleBtn = 'button[data-test-id^="add-condition-rule"]';

  it('should load one initial condition rule in one condition group', () => {
    cy.get(conditionRule)
      .should('have.length', 1)
      .should('contain.text', 'name')
      .should('contain.text', 'Equals');
  });

  it('should change condition, operator, operand after change corresponding form', () => {
    cy.get(`${selectCondition}`).click().get('ul > li[data-value="id"]').click();
    cy.get(`${selectCondition}`).should('contain.text', 'id');

    cy.get(`${selectOperator}`).click().get('ul > li[data-value="LessThan"]').click();
    cy.get(`${selectOperator}`).should('contain.text', 'LessThan');

    cy.get(`${inputOperand}`).type('12345');
    cy.get(`${inputOperand} input`).should('have.value', '12345');
  });

  it('should add/remove condition rule in condition group', () => {
    // Add new ConditionRule
    cy.get(addConditionRuleBtn).click();

    // Check functionality
    cy.get(conditionRule)
      .should('have.length', 2)
      .last()
      .invoke('data', 'test-id')
      .then((testId) => {
        const lastConditionRule = `div[data-test-id^="${testId}"]`;

        cy.get(`${lastConditionRule} ${selectCondition}`).click().get('ul > li[data-value="id"]').click();
        cy.get(`${lastConditionRule} ${selectCondition}`).should('contain.text', 'id');

        cy.get(`${lastConditionRule} ${selectOperator}`)
          .click()
          .get('ul > li[data-value="LessThan"]')
          .click();
        cy.get(`${lastConditionRule} ${selectOperator}`).should('contain.text', 'LessThan');

        cy.get(`${lastConditionRule} ${inputOperand}`).type('12345');
        cy.get(`${lastConditionRule} ${inputOperand} input`).should('have.value', '12345');
      });

    // Remove
    cy.get(removeConditionRuleBtn).last().click();
    cy.get(conditionRule).should('have.length', 1);
  });

  it('should add/remove condition group', () => {
    cy.get(conditionGroup).should('have.length', 1);

    // Add new ConditionRule
    cy.get(addConditionGroupBtn).click();

    // Check existence
    cy.get(conditionGroup)
      .should('have.length', 2)
      .last()
      .invoke('data', 'test-id')
      .then((testId) => {
        const innerConditionRule = `div[data-test-id^="${testId}"] ${conditionRule}`;

        cy.get(`${innerConditionRule} ${selectCondition}`).click().get('ul > li[data-value="id"]').click();
        cy.get(`${innerConditionRule} ${selectCondition}`).should('contain.text', 'id');

        cy.get(`${innerConditionRule} ${selectOperator}`)
          .click()
          .get('ul > li[data-value="LessThan"]')
          .click();
        cy.get(`${innerConditionRule} ${selectOperator}`).should('contain.text', 'LessThan');

        cy.get(`${innerConditionRule} ${inputOperand}`).type('12345');
        cy.get(`${innerConditionRule} ${inputOperand} input`).should('have.value', '12345');
      });

    // Remove
    cy.get(removeConditionRuleBtn).last().click();
    cy.get(conditionGroup).should('have.length', 1);
  });
});
