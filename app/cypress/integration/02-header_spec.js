/* eslint-disable no-undef */
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
  it('Verifica se ao clicar no link de navegação peoples ele redireciona para a página de pessoas /people', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-testid="header-route-people"]');
    cy.get('[data-testid="header-route-people"]').click();
    cy.location().should((loc) => expect(loc.pathname).to.eq('/peoples'));
  });

  it('Verifica se ao clicar no link de navegação Locations ele redireciona para a página de pessoas /locations', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-testid="header-route-locations"]');
    cy.get('[data-testid="header-route-locations"]').click();
    cy.location().should((loc) => expect(loc.pathname).to.eq('/locations'));
  });

  it('Verifica se ao clicar no link de navegação Search ele redireciona para a página de busca por filmes /search', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-testid="header-route-search"]');
    cy.get('[data-testid="header-route-search"]').click();
    cy.location().should((loc) => expect(loc.pathname).to.eq('/search'));
  });
});
