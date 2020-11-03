/* eslint-disable no-undef */
describe('Routes', () => {
  it('visits the app', () => {
    cy.visit('/');
  });

  it('has an option to go to about seccion ', () => {
    cy.get('.navbar-start')
      .contains('About').click();
    cy.url().should('include', '/about');
  });

  it('has an option to go to catalog seccion ', () => {
    cy.get('.navbar-start')
      .contains('Catalog').click();
    cy.url().should('include', '/books');
  });

  it('has a route to see the book info', () => {
    cy.get('.card-content .content a')
      .first()
      .click();
    cy.url().should('include', '/book');
  });
});
