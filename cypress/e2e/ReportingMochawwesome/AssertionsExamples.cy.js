import 'cypress-iframe'

describe('Assertion Test suite 1', () => {
  it('Login with correct credintials Test 1', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('input[name=username]').type("Admin");
    cy.get('input[name=password]').type("admin123");
    cy.get('button[type=submit]').click();
    cy.log("Checking profile picture");
    cy.get('.oxd-userdropdown-img').should("be.visible");
    //verifying the user name
    cy.log("Verifying the user name");
    cy.get('.orangehrm-dashboard-widget-name').eq(1).then((element)=>{
      expect(element.text()).to.equal("My Actions");
    })
    
  })

  it('login with invalid credintials',()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('input[name=username]').type("admin123");
    cy.get('input[name=password]').type("Admin");
    cy.get('button[type=submit]').click();
    cy.log("Checking profile picture");
    cy.get('.oxd-userdropdown-img').should("be.visible");

    



  })


})