context("Example", () => {

    it("Clicks on a button", () => {
        cy.visit("/");
        cy.get("button").click();
        cy.contains("It worked!").should("be.visible");
    });
});