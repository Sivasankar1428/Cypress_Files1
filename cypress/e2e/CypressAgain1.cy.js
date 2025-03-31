

describe('Test Suite 1',()=>{

    it.skip('Test 1: Verify the Url ',()=>{
        cy.visit('https://testautomationpractice.blogspot.com/');
        cy.title().should('exist','testautomationpractice');
        cy.url().should('include','testautomationpractice').and('eq','https://testautomationpractice.blogspot.com/');
        cy.url().should('not.include','Demo')
        })

    it.skip('Test 2 : Verify the elements',()=>{
        cy.visit('https://testautomationpractice.blogspot.com/');
        cy.get("h1[class='title']").should('exist').and('contain','Automation Testing Practice');
        cy.get('a').should('have.length','28');
    })

    it.skip('Test 3 : Form', ()=>{
        cy.visit('https://testautomationpractice.blogspot.com/');
        cy.get('#name').type('Sivasankar');
        cy.get('#name').should('have.value','Sivasankar');
        cy.get('#email').type('sivasankar2902@gmail.com');
        cy.get('#email').should('have.value','sivasankar2902@gmail.com');
        cy.get('#phone').type('9087612534');
        cy.get('#phone').should('have.value','9087612534');
        cy.get('#textarea').type('Chennai-600044');

    })

    it.skip('Test 4 : Radio Button',()=>{
        cy.visit('https://testautomationpractice.blogspot.com/');
        cy.get('#male').check().should('be.checked');
        cy.get('#female').should('not.be.checked');
        cy.get('#female').check().should('be.checked');
        cy.get('#male').should('not.be.checked');
    })

    it.skip('Test 5 : CheckBox',()=>{
        cy.visit('https://testautomationpractice.blogspot.com/');
        cy.get(".form-check-input[type='checkbox']").should('have.length','7');
        cy.get(".form-check-input[type='checkbox']").check().should('be.checked');
        cy.get(".form-check-input[type='checkbox']").uncheck().should('not.be.checked');
        cy.get(".form-check-input[type='checkbox']").first().check().should('be.checked');
        cy.get(".form-check-input[type='checkbox']").last().check().should('be.checked');
        cy.get(".form-check-input[type='checkbox']").first().uncheck().should('not.be.checked');
        cy.get(".form-check-input[type='checkbox']").last().uncheck().should('not.be.checked');
        cy.get(".form-check-input[type='checkbox']").eq(2).check().should('be.checked');
        cy.get(".form-check-input[type='checkbox']").eq(3).check().should('be.checked');

    })

    it.skip ('Test 6 : Dropdown',()=>{
        cy.visit('https://testautomationpractice.blogspot.com/');
        cy.get('#country').select('india').should('have.value','india');
        cy.get('#country').select('japan').should('have.value','japan');
        cy.get('#colors').select('green').should('be.visible');
        cy.get('#colors').select('red').should('be.visible');
        cy.get('#animals').select('lion').should('be.visible');
    })

    it.skip('Test 7 : DatePicker',()=>{
        cy.visit('https://testautomationpractice.blogspot.com/');
        cy.get('#datepicker').type('07/02/1999{enter}').should('have.value','07/02/1999')
        cy.get('#txtDate').click();
        cy.get('.ui-datepicker-year').select('2035');
        cy.get('.ui-datepicker-month').select('3');
        cy.get('.ui-state-default').contains('15').click();
        cy.get('.ui-state-default').should('be.visible','15/04/2035');
    })

    it('Test 8 : Bootstrap Dropdown',()=>{
        cy.visit('https://testautomationpractice.blogspot.com/');
        cy.get('#Wikipedia1_wikipedia-search-input').type('Tirunelveli{enter}');
        cy.get('#wikipedia-search-result-link').should('have.text','Tirunelveli');
        //cy.get('#wikipedia-search-result-link').should('have.value','Tirunelveli Assembly constituency').click();

    })


})
    


