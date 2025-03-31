const jsonData = require('../fixtures/DataDrivenTest2Data.json')


describe('Data Driven Testing Test Suite',()=>{

    jsonData.forEach((testData1)=>{

        it('DataDrivenTesting Test1',()=>{

            cy.visit(testData1.website)
            cy.xpath('//*[@id="loginPanel"]/p[2]/a').click();
            cy.xpath('//*[@id="customer.firstName"]').type(testData1.firstName)
            cy.xpath('//*[@id="customer.address.street"]').type(testData1.address)
            cy.xpath('//*[@id="customer.lastName"]').type(testData1.lastName)
            cy.xpath('//*[@id="customer.address.zipCode"]').type(testData1.Zipcode)
            cy.xpath('//*[@id="customer.phoneNumber"]').type(testData1.phoneNo)
            cy.xpath('//*[@id="customer.username"]').type(testData1.UserName)
            cy.xpath('//*[@id="customer.password"]').type(testData1.PassWord)
            cy.xpath('//*[@id="repeatedPassword"]').type(testData1.ConfirmPassWord)
            cy.xpath('//*[@id="customer.address.city"]').type(testData1.City)
            cy.xpath('//*[@id="customer.address.state"]').type(testData1.State)
            cy.xpath('//*[@id="customer.ssn"]').type(testData1.SSNNo)
            cy.xpath('//*[@id="customerForm"]/table/tbody/tr[13]/td[2]/input').click();
            cy.contains('Welcome').should("be.visible")
        
        
        })
        

    })
    

})