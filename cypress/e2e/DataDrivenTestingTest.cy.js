describe('Data Driven Testing Test Suite',()=>{

    let testData;

    before('DDT Details',()=>{
        cy.fixture('DatadrivenTestingDetails.json').then((jsonData)=>{
            testData = jsonData;
        })
    })

it('DataDrivenTesting Test1',()=>{

    cy.visit(testData.website)
    cy.xpath('//*[@id="loginPanel"]/p[2]/a').click();
    cy.xpath('//*[@id="customer.firstName"]').type(testData.firstName)
    cy.xpath('//*[@id="customer.address.street"]').type(testData.address)
    cy.xpath('//*[@id="customer.lastName"]').type(testData.lastName)
    cy.xpath('//*[@id="customer.address.zipCode"]').type(testData.Zipcode)
    cy.xpath('//*[@id="customer.phoneNumber"]').type(testData.phoneNo)
    cy.xpath('//*[@id="customer.username"]').type(testData.UserName)
    cy.xpath('//*[@id="customer.password"]').type(testData.PassWord)
    cy.xpath('//*[@id="repeatedPassword"]').type(testData.ConfirmPassWord)
    cy.xpath('//*[@id="customer.address.city"]').type(testData.City)
    cy.xpath('//*[@id="customer.address.state"]').type(testData.State)
    cy.xpath('//*[@id="customer.ssn"]').type(testData.SSNNo)
    cy.xpath('//*[@id="customerForm"]/table/tbody/tr[13]/td[2]/input').click();
    cy.contains('Welcome').should("be.visible")


})

})