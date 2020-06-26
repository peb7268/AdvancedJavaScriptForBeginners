/// <reference types="cypress" />

context('Actions', () => {
    beforeEach(() => {
      cy.visit('http://racingapp.com')
    })
  
    describe('Track should have cars', () => {
      it('should have a track', () => {
        cy.get('#track').should('exist')
      });
  
      it('should have cars on the page', () => {
        cy.get('.car').should('exist')
      });

      it('should have exactly 2 cars', () => {
        cy.get('.car').should('have.length', 2);
      });
    });
});