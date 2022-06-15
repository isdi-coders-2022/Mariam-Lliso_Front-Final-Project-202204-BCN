describe("Given the Valencia Sin Gluten login page", () => {
  describe("When the user 'testUser' with rol user logedd in with they password 'testUser'", () => {
    it("Then they should redirected to user profile", () => {
      const username = "testUser";
      const password = "testUser";
      cy.visit("login");
      cy.get("[id=username]").type(username);
      cy.get("[id=password]").type(password);

      cy.get("button[type=submit]")
        .contains(/iniciar sesión/i)
        .click();

      cy.url().should("include", "user/profile");
    });
  });
});
