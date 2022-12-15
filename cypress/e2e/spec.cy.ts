import { screen, render, cleanup } from '../../src/utils/MagicWrapper';

describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io');
  });
});

export {};
