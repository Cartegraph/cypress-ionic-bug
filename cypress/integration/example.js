context("ion-content, spacer, scroll events", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  addTests();
});

context("no ion-content, spacer", () => {
  beforeEach(() => {
    cy.visit("/no-content");
  });

  addTests();
});

context("ion-content, no spacer, scroll events", () => {
  beforeEach(() => {
    cy.visit("/content");
  });

  addTests();
});

context("ion-content, spacer, no scroll events", () => {
  beforeEach(() => {
    cy.visit("/no-event");
  });

  addTests();
});


function addTests() {
  it("Clicks on a button", () => {
    cy.get("button").click();
    cy.contains("It worked!").should("be.visible");
  });

  it("Clicks on a button with scrollIntoView", () => {
    cy.get("button").scrollIntoView().click();
    cy.contains("It worked!").should("be.visible");
  });

  it("Clicks on a button with double", () => {
    cy.get("button").click().click();
    cy.contains("It worked!").should("be.visible");
  });

  it("Clicks on a button with the force", () => {
    cy.get("button").click({ force: true });
    cy.contains("It worked!").should("be.visible");
  });

  it("Clicks on a button with scrollIntoView and the force", () => {
    cy.get("button").scrollIntoView().click({ force: true });
    cy.contains("It worked!").should("be.visible");
  });

  it("Clicks on a button with scrollIntoView and wait", () => {
    cy.get("button").scrollIntoView().wait(500).click();
    cy.contains("It worked!").should("be.visible");
  });  

};
