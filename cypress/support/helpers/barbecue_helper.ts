interface AnswerFormInput {
  title: string;
  date: string;
  hour: string;
  maxCapacity: number;
  minContribution: number;
  totalPrice: number;
}

export class BarbecueHelper {
  constructor(private cy: Cypress.cy & CyEventEmitter) {
    this.cy = cy;
  }

  /**
   * @description click at the dialog trigger to open the add barbecue dialog
   */
  openAddBarbecueDialog() {
    return cy.get("button").contains("Churrasco").click({ timeout: 6000 });
  }

  /**
   *
   * @description Click at the submit button in the add new barbecue dialog
   */
  submitDialog() {
    return cy.get("button[type='submit']").contains("Criar Churrasco",  {timeout: 6000}).click();
  }

  /**
   * @description fill the inputs at the create barbecue dialog
   * @param input
   */
  answerForm(input: AnswerFormInput) {
    const { date, hour, maxCapacity, minContribution, title, totalPrice } =
      this.getInputs();

    hour.type(input.hour);
    title.type(input.title);
    totalPrice.type(String(input.totalPrice));
    maxCapacity.type(String(input.maxCapacity));
    minContribution.type(String(input.minContribution));
    date.type(input.date);
  }

  /**
   * @description get the success toast after api return 200 when a new barbecue is created.
   */
  getSuccessToast() {
    return cy.get("div").contains("Churrasco criado com sucesso.");
  }

  private getInputs() {
    return {
      title: cy.get("label").contains("Título"),
      date: cy.get("input[type='date']"),
      hour: cy.get("input[type='time']"),
      minContribution: cy.get("label").contains("Contribuição mínima"),
      maxCapacity: cy.get("label").contains("Capacidade máxima"),
      totalPrice: cy.get("label").contains("Arrecadação total"),
    };
  }
}
