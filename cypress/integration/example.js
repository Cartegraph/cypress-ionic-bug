context("ion-content, no spacer", () => {
    it("Clicks on a button with scrollIntoView and the force", () => {
      cy.visit("/content");
      cy.get("button").scrollIntoView().click({ force: true });
      cy.contains("It worked!").should("be.visible");
    });
  
    it("Clicks on a button with scrollIntoView", () => {
      cy.visit("/");
      cy.get("button").scrollIntoView().click();
      cy.contains("It worked!").should("be.visible");
    });
  
    it("Clicks on a button with the force", () => {
      cy.visit("/");
      cy.get("button").click({ force: true });
      cy.contains("It worked!").should("be.visible");
    });
  
    it("Clicks on a button with double", () => {
      cy.visit("/");
      cy.get("button").click().click();
      cy.contains("It worked!").should("be.visible");
    });
  
    it("Clicks on a button", () => {
      cy.visit("/");
      cy.get("button").click();
      cy.contains("It worked!").should("be.visible");
    });
  });
  
  context("spacer, no ion-content", () => {
    it("Clicks on a button with scrollIntoView and the force", () => {
      cy.visit("/spacer");
      cy.get("button").scrollIntoView().click({ force: true });
      cy.contains("It worked!").should("be.visible");
    });
  
    it("Clicks on a button with scrollIntoView", () => {
      cy.visit("/");
      cy.get("button").scrollIntoView().click();
      cy.contains("It worked!").should("be.visible");
    });
  
    it("Clicks on a button with the force", () => {
      cy.visit("/");
      cy.get("button").click({ force: true });
      cy.contains("It worked!").should("be.visible");
    });
  
    it("Clicks on a button with double", () => {
      cy.visit("/");
      cy.get("button").click().click();
      cy.contains("It worked!").should("be.visible");
    });
  
    it("Clicks on a button", () => {
      cy.visit("/");
      cy.get("button").click();
      cy.contains("It worked!").should("be.visible");
    });
  });
  
  context("ion-content and spacer", () => {
    it("Clicks on a button with scrollIntoView and the force", () => {
      cy.visit("/");
      cy.get("button").scrollIntoView().click({ force: true });
      cy.contains("It worked!").should("be.visible");
    });
  
    it("Clicks on a button with scrollIntoView", () => {
      cy.visit("/");
      cy.get("button").scrollIntoView().click();
      cy.contains("It worked!").should("be.visible");
    });
  
    it("Clicks on a button with the force", () => {
      cy.visit("/");
      cy.get("button").click({ force: true });
      cy.contains("It worked!").should("be.visible");
    });
  
    it("Clicks on a button with double", () => {
      cy.visit("/");
      cy.get("button").click().click();
      cy.contains("It worked!").should("be.visible");
    });
  
    it("Clicks on a button", () => {
      cy.visit("/");
      cy.get("button").click();
      cy.contains("It worked!").should("be.visible");
    });
  });
  