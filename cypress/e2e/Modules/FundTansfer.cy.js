require('cypress-xpath')

class FundTransfer {

    FundTransferDetails ={

        OpenNewAcc          : ()=> cy.get('#leftPanel > ul >li >a').eq(2),
        TransferAmt         : ()=> cy.get('#transferForm >p>input').first().type('1000'),
        clickTransferBtn    : ()=> cy.get('#transferForm >div>input').click(),
        transferComplete    : ()=> cy.get('div>h1').eq(1).should("be.visible","Transfer Complete!")

    }

    FundTransferAction (){
        this.FundTransferDetails.OpenNewAcc().click(),
        this.FundTransferDetails.TransferAmt(),
        this.FundTransferDetails.clickTransferBtn(),
        this.FundTransferDetails.transferComplete()

    }


}
module.exports = new FundTransfer();