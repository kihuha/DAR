describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000");

    cy.contains("Page Load").should("be.visible");
  });
});
