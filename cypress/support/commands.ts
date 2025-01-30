/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

export {};

declare global {
    namespace Cypress {
        interface Chainable {
            // Cypress getters
            getBySel(
                selector: string,
                ...options: []
            ): Chainable<JQuery<HTMLElement>>;
        }
    }
}

Cypress.Commands.add('getBySel', (selector, ...args) => {
    return cy.get(`[data-test=${selector}]`, ...args);
});
