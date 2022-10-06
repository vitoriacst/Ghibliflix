/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('Verifica se na tela de home os cards estão com todos os atributos', () => {
  it('O card possui o nome, imagem, data de lançamento, descrição , diretor e produtor  do filme ', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-testid="card-movie"]');
    cy.get('[data-testid="card-title"]');
    cy.get('[data-testid="card-image"]');
    cy.get('[data-testid="card-director"]');
    cy.get('[data-testid="card-description"]');
    cy.get('[data-testid="card-date"]');
    cy.get('[data-testid="card-producer"]');
  });
  it('Verifica que existe um componente Header sendo renderizado na Tela Home', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-testid="component-header"]');
    cy.get('[data-testid="component-header-title"]');
    cy.get('[data-testid="card-image"]');
  });
  it('Verifica que existe um componente Footer sendo renderizado na Tela Home', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-testid="component-footer"]');
  });
});
