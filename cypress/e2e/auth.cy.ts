describe("template spec", () => {
  beforeEach(() => {
    cy.signIn();
    cy.location("pathname", { timeout: 60000 }).should("include", "/home");
  });
  it("should be able to authenticate", () => {
    openPopoverBtn();
    findAuthenticatedUserEmail();
  }),
    it(" should be able to signout", () => {
      openPopoverBtn();
      signoutBtn();
      cy.get("h1").contains("Bem-vindo à Trinca Churras!");
    });
});

const openPopoverBtn = () =>
  cy.get("button[aria-label='Open user button']").click();

const findAuthenticatedUserEmail = () =>
  cy.get("span").contains(Cypress.env("test_email"));

const signoutBtn = () => cy.get("span").contains("Sign out").click();
