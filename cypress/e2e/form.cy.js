describe("Form Tests", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3003/"); // Replace with your application URL
    });
    it("sanity check", () => {
        expect(1 + 2).to.equal(3)
    })

    it("should type a name in the Name input", () => {
        cy.get("input[name='username']").type("John Doe");
      });
  
    it("should check if the Name input contains the provided name", () => {
      cy.get("input[name='username']").should("have.value", "");
    });
    it("should type an email address in the Email input", () => {
      cy.get("input[name='email']")
    });
    it("should type a password in the Password input", () => {
        cy.get("input[name='password']").type("");
      });
    it("should check if the Password input contains the provided password", () => {
        cy.get("input[name='password']").should("have.value", "YourPassword");
      });
    
    it("should check the Terms of Service checkbox", () => {
        cy.get("input[name='agreement']").check();
      });
    it("should uncheck the Terms of Service checkbox", () => {
        cy.get("input[name='agreement']").uncheck();
      });
    
      it("should submit the form", () => {
        cy.get("onSubmit").submit();
      });
    
      it("should check for form validation if an input is left empty", () => {
        // Assuming your form has required fields
        cy.get("onSubmit").submit();
    
        // Add assertions for error messages or visual indicators for validation
        cy.get(".validation").should("be.visible");
      });
  });