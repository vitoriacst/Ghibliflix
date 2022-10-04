/// <reference types="cypress" />

describe('Teste do Header', () => {
  it('Verifica se existe um componente Header', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-testid="component-header"]');
  });
  it('Verifica se no componente Header possui um título', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[ data-testid="component-header-title"]');
  });
  it('Verifica se no componente Header possui uma Logo', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-testid="header-image"]');
  });
});
