describe("When a user navigates to the landing page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should display the header", () => {
    cy.get('[data-testid="Header"]').should("be.visible");
  });
});
