/* eslint-disable no-undef */
describe('Selector', () => {
  it('visits the app', () => {
    cy.visit('/');
  });

  it('has a selector with 21 options', () => {
    cy.get('option')
      .should('have.length', 21);
  });
});
