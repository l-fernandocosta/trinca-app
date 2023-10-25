import { addDays, format } from 'date-fns';
import { BarbecueHelper } from "../support/helpers/barbecue_helper";

describe("create bbq flow", () => {
  const helper: BarbecueHelper = new BarbecueHelper(cy);

  beforeEach(() => {
    cy.signIn();
  });

  it("should display error message when submit with invalid input form", () => {
    helper.openAddBarbecueDialog();
    helper.submitDialog();
    cy.get("p").contains("Campo obrigatório");
  });

  it("should display success message when a new bbq is added", () => {
    const input = {
      date: format(addDays(new Date(), 5), "yyyy-MM-dd"),
      hour: "21:55",
      maxCapacity: 50,
      minContribution: 5,
      title: "asdsad",
      totalPrice: 80,
    };
    
    helper.openAddBarbecueDialog();
    helper.answerForm(input);
    helper.submitDialog();

    cy.intercept("POST", "/barbecue", {
      statusCode: 201,
      body: {
        ...input,         
        userId: Cypress.env("user_id"),
      },
    });

    helper.getSuccessToast();
  });
});
