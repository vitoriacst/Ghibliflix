/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('Teste da página location', () => {
  it('Verifica se existe um card na Página locations', () => {
    cy.visit('http://localhost:3000/locations');
    cy.get('[data-testid="location-card"]');
  });
  it('Verifica se no card possui um título', () => {
    cy.visit('http://localhost:3000/locations');
    cy.get('[data-testid="location-card-title"]');
  });
  it('Verifica se no card possui uma badge com a quantidade de habitantes', () => {
    cy.visit('http://localhost:3000/locations');
    cy.get('[data-testid="card-resident"]');
  });
  it('Verifica se no card possui com o tipo de terreno', () => {
    cy.visit('http://localhost:3000/locations');
    cy.get('[data-testid="card-terrain"]');
  });
  it('Verifica se no card possui uma badge com o clima', () => {
    cy.visit('http://localhost:3000/locations');
    cy.get('[data-testid="card-climate"]');
  });
  it('Verifica se no card possui uma badge com a quantidade de água na superfície', () => {
    cy.visit('http://localhost:3000/locations');
    cy.get('[data-testid="card-water"]');
  });
  it('Verifica se existe um campo do tipo input', () => {
    cy.visit('http://localhost:3000/locations');
    cy.get('[data-testid="location-input"]');
  });

  it('Verifica se a pessoa usuária consegue digitar no input', () => {
    cy.visit('http://localhost:3000/locations');
    cy.get('[data-testid="location-input"]').click();
    cy.get('[data-testid="location-input"]').type('The Cat Kingdom');
  });
});
