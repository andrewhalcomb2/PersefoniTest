//imported cypress commands
/// <reference types="Cypress" />

//Describe is a test suite/set of tests
describe("Set of Tests on the Persefoni carbon offsets page" , () => {

    //Before each test I have Cypress visiting the baseUrl which is set to the Carbon Offset page
    beforeEach(() => {
        cy.visit('/')
        cy.get('.cjZaNl > .sc-iCoGMd').contains('Carbon Offset Calculator')
    });

    //Asserting we are on the correct page with the Calculator
    // it('Assert test has landed on correct page', () => {
    //     //grabbing the calculator header class and asserting the text
    //     cy.get('.cjZaNl > .sc-iCoGMd').contains('Carbon Offset Calculator')
    // });
    

    it("Selecting happy path with the first inputs in each drop down", () => {
        cy.get('input[name="sector"]').click({force: true})
        //cy.get("///div[@innertext='Accommodation and Food Services']").click({force: true})
        cy.get('[data-index="0"] > .sc-eXuyPJ > .sc-hKFxyN > .sc-dlMDgC > .sc-hHEiqL > .sc-iemWCZ').click()
    });

   //Select Login button and do negative test case
   it("Negative Login attempt with invalid email, not @ symbol", () => {
       //clicking login
       cy.get('.jsx-2316c9ce36cfe5c5.jsx-3828334030.jsx-4292166569.jsx-bff51b3b0f247c8.jsx-f556eb74f27657da').click()
      // cy.get('/html//input[@id="1-email"]').type("TestUser")
      //input email 
      cy.get('[type="email"]').type("User1")
      //input password
      cy.get('[type="password"]').type("User1")
      //hit submit
      cy.get('[type="submit"]').click()
      //checking for error
      cy.get('.auth0-lock-error-invalid-hint').contains('Invalid')
   })

   it("Negative Login attempt with valid email but no user", () => {
    //clicking login
    cy.get('.jsx-2316c9ce36cfe5c5.jsx-3828334030.jsx-4292166569.jsx-bff51b3b0f247c8.jsx-f556eb74f27657da').click()
   // cy.get('/html//input[@id="1-email"]').type("TestUser")
   //input email 
   cy.get('[type="email"]').type("User1@gmail.com")
   //input password
   cy.get('[type="password"]').type("User1")
   //hit submit
   cy.get('[type="submit"]').click()
   //checking for error
   cy.get('.animated.fadeInUp > span').contains('Wrong email or password.')
})

});
