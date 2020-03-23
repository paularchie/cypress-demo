it('navigates to test component 1 on page load', () => {
  cy.visit('/');
  cy.get('h1').contains('Test Component 1');
});

it('navigates between components using links', () => {
  cy.visit('/');

  cy.get('[data-testid="component_2_link"]').click();
  cy.get('h1').contains('Test Component 2');

  cy.get('[data-testid="component_1_link"]').click();
  cy.get('h1').contains('Test Component 1');
});
