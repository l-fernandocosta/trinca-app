/// <reference types="cypress" />

Cypress.Commands.add(`signOut`, () => {
  cy.log(`sign out by clearing all cookies.`);
  cy.clearCookies({ domain: undefined });
});

Cypress.Commands.add(`signIn`, () => {
  cy.log(`Signing in.`);
  cy.visit(`/sign-in`, {failOnStatusCode: false});

  cy.window()
    .should((window) => {
      expect(window).to.not.have.property(`Clerk`, undefined);
      expect(window.Clerk.isReady()).to.eq(true);
    })
    .then(async (window) => {
      cy.clearCookies({ domain: window.location.hostname });

      const res = await window.Clerk.client.signIn.create({
        identifier: Cypress.env(`test_email`),
        password: Cypress.env(`test_password`),
      });

      cy.log(res, "RESPONSE SIGNIN")
      cy.log(window.Clerk);
      await window.Clerk.setActive({
        session: res.createdSessionId,
      });


      cy.visit("/home",  {failOnStatusCode: false})
      cy.log(`Finished Signing in.`);
    });
});

