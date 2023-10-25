
declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to  `signOut` using clerk provider.
     * @xample cy.signOut()
     */
    signOut(): Chainable<void>;
    signIn(): Chainable<void>
  }

  interface Window {
    Clerk: any;
  }
}