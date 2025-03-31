

describe('Selectors Test Suite1',()=>{

before('Welcome ',()=>{
    cy.log("Opening Test Suites")
})

after('Thank you',()=>{
    cy.log("Ending of Test Suites")
})

beforeEach('Welcome ',()=>{
    cy.log("Opening Test Suites")
})

afterEach('Thank you',()=>{
    cy.log("Ending of Test Suites")
})

    it('Test 1',()=>{

        cy.log("First Test Starting")
        cy.log("Visiting Practice Test Automation Website")
        cy.visit('https://practicetestautomation.com/practice-test-login/')
        cy.log("Entering the login credentials")
        cy.get('#username').first().type("student")
        cy.get('#password').eq(0).type("Password123")
        cy.log("Clicking Submit Button")
        cy.contains('Submit').click();
        cy.log("Verifying Log Out is visible")
        cy.contains('Log out').should("be.visible")
        cy.log('Clicking on Log Out Button')
        cy.contains('Log out').click();
        cy.log("First test Ending ")
    })

    it('Test 2',()=>{

        cy.log("Second Test Starting")
        cy.log("Visiting Drop Down Practice website")
        cy.visit('https://practice.expandtesting.com/dropdown')
        cy.get('#dropdown').select(1).then((element)=>{
            cy.log("Text that selected is :"+element.text());
        })

        //cy.get('#elementsPerPageSelect>option').select('50');
        //cy.get('#elementsPerPageSelect').select('50');

        cy.get('#country').select('IN').then((element)=>{
            cy.log("Selected Value is :"+element.text());
        })
        
        

    })

    it('Test 3',{retries:2},()=>{

        cy.log("ScrollIntoView Test")
        cy.visit('https://www.w3schools.com/cssref/css_selectors.php')
        cy.contains('CSS Nesting Selector').scrollIntoView().should("be.visible")
        cy.contains('element').scrollIntoView().should("be.visible")
    })

    


})