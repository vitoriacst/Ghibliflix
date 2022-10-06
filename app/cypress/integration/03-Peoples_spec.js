/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('Teste da página People', () => {
  it('Verifica se existe um card na Página peoples', () => {
    cy.visit('http://localhost:3000/peoples');
    cy.get('[data-testid="people-card"]');
  });
  it('Verifica se no card possui um título', () => {
    cy.visit('http://localhost:3000/peoples');
    cy.get('[data-testid="people-card-title"]');
  });
  it('Verifica se no card possui uma badge com o valor da idade', () => {
    cy.visit('http://localhost:3000/peoples');
    cy.get('[data-testid="people-card-badge-age"]');
  });
  it('Verifica se no card possui uma badge com o valor do gênero da pessoa', () => {
    cy.visit('http://localhost:3000/peoples');
    cy.get('[data-testid="people-card-badge-gender"]');
  });
  it('Verifica se no card possui uma badge com o valor da cor do olho da pessoa', () => {
    cy.visit('http://localhost:3000/peoples');
    cy.get('[data-testid="people-card-badge-eyes"]');
  });
  it('Verifica se existe um campo do tipo input', () => {
    cy.visit('http://localhost:3000/peoples');
    cy.get('[data-testid="people-input"]');
  });

  it('Verifica se a pessoa usuária consegue digitar no input', () => {
    cy.visit('http://localhost:3000/peoples');
    cy.get('[data-testid="people-input"]').click();
    cy.get('[data-testid="people-input"]').type('haku');
    // cy.get('[data-testid="people-card-title"]').contains('haku');
  });
});
