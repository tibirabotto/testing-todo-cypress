describe("task spec", () => {
  it("home", () => {
    cy.visit("http://localhost:5173");
    cy.get("#contanier");
  });

  it("should be create one task", () => {
    cy.visit("http://localhost:5173");
    cy.get("input").type("task 1");
    cy.get("button").click();
    cy.get("span").should("have.text", "task 1");
  });

  it("should be delete task", () => {
    cy.visit("http://localhost:5173");
    cy.get(".delete").click();
    cy.get(".delete").should("not.exist");
  });
});
