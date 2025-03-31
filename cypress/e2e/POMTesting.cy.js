import openAccount from "./Modules/OpenAccount.cy"
import FundTansfer from "./Modules/FundTansfer.cy";

describe('POM Testing suite 1',()=>{

it('POM Test 1', ()=>{

        //open webpage
        openAccount.visit();
});
it('POM Test 2', ()=>{

        openAccount.visit();
        // openAccount.registerData();
        openAccount.registerDataDetails();

        //fund transfer
       FundTansfer.FundTransferAction();
        //validating


})
})