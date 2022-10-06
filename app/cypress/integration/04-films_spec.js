/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('Teste da página film', () => {
  it('Verifica se existe um card na Página Films', () => {
    cy.visit('http://localhost:3000/search');
    cy.get('[data-testid="film-card"]');
  });
  it('Verifica se no card possui um título', () => {
    cy.visit('http://localhost:3000/search');
    cy.get('[data-testid="film-card-title"]');
  });
  it('Verifica se no card possui uma badge com o nome do diretor', () => {
    cy.visit('http://localhost:3000/search');
    cy.get('[data-testid="card-director"]');
  });
  it('Verifica se no card possui com o ano do lançamento do filme', () => {
    cy.visit('http://localhost:3000/search');
    cy.get('[data-testid="card-date"]');
  });
  it('Verifica se no card possui uma badge com o nome do produtor', () => {
    cy.visit('http://localhost:3000/search');
    cy.get('[data-testid="card-producer"]');
  });
  it('Verifica se existe um campo do tipo input', () => {
    cy.visit('http://localhost:3000/search');
    cy.get('[data-testid="film-input"]');
  });

  it('Verifica se a pessoa usuária consegue digitar no input', () => {
    cy.visit('http://localhost:3000/search');
    cy.get('[data-testid="film-input"]').click();
    cy.get('[data-testid="film-input"]').type('castle');
  });
});
