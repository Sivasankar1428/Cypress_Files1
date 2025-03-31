
 
class OpenAccount {

    visit() {
   
            cy.visit('https://parabank.parasoft.com/parabank/index.htm')
    
    }   

    registerData = {
        registerNewData     : ()=> cy.xpath('//*[@id="loginPanel"]/p[2]/a'),
        customerFirstName   : ()=> cy.xpath('//*[@id="customer.firstName"]'),
        customerLasttName   : ()=> cy.xpath('//*[@id="customer.lastName"]'),
        addressDetils       : ()=> cy.xpath('//*[@id="customer.address.street"]'),
        ZipcodeDetails      : ()=> cy.xpath('//*[@id="customer.address.zipCode"]'),
        phoneNumber         : ()=> cy.xpath('//*[@id="customer.phoneNumber"]'),
        userName            : ()=> cy.xpath('//*[@id="customer.username"]'),
        PassWord            : ()=> cy.xpath('//*[@id="customer.password"]'),
        ConfirmPassWord     : ()=> cy.xpath('//*[@id="repeatedPassword"]'),
        cityDetails         : ()=> cy.xpath('//*[@id="customer.address.city"]'),
        stateDetails        : ()=> cy.xpath('//*[@id="customer.address.state"]'),
        SSNNo               : ()=> cy.xpath('//*[@id="customer.ssn"]'),
        SubmitBtn           : ()=> cy.xpath('//*[@id="customerForm"]/table/tbody/tr[13]/td[2]/input')

    }

    registerDataDetails() {
        
        this.registerData.registerNewData().click(),
        this.registerData.customerFirstName().type('Sivasankar'),
        this.registerData.addressDetils().type("Chennai"),
        this.registerData.customerLasttName().type("Sankarapandian"),
        this.registerData.ZipcodeDetails().type("600044"),
        this.registerData.phoneNumber().type("9087654321"),
        this.registerData.userName().type("Siva@12318"),
        this.registerData.PassWord().type("Siva@123"),
        this.registerData.ConfirmPassWord().type("Siva@123"),
        this.registerData.cityDetails().type("Chennai"),
        this.registerData.stateDetails().type("TamilNadu"),
        this.registerData.SSNNo().type("12321456789"),
        this.registerData.SubmitBtn().click()
        
    }

}

module.exports = new OpenAccount();