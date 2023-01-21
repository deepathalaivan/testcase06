const { Driver } = require("selenium-webdriver/chrome");

module.exports = function(){
    this.When(/^I enter Inputs for the form fields$/, async function (tab) {
        const myrows = tab.rows();
        await page.commonObjects.inputUserName(myrows[0][1]);
        await page.commonObjects.inputPassword(myrows[1][1]);
      });
      this.When(/^I enter inputs for login$/,async function(tab){
        const myrows=tab.rows();
        await page.commonObjects.inputNameAndValue(myrows[0][0],myrows[0][1]);
        await page.commonObjects.inputNameAndValue(myrows[1][0],myrows[1][1]);
        await page.commonObjects.inputNameAndValue(myrows[2][0],myrows[2][1]);
        await page.commonObjects.inputNameAndValue(myrows[3][0],myrows[3][1]);

      });
      this.When(
        /^I enter multiple inputs for the form fields$/,
        async function (table) {
          const myrows = table.rows();
          for (var i = 0; i < myrows.length; i++) {
            await page.commonObjects.inputNameAndValue(myrows[i][0],myrows[i][1]);
          }
        }
      );
      this.When(/^I enter single fieldvalue$/, async function (tab) {
        const myrows = tab.rows();
        return await page.commonObjects.inputNameAndValue(myrows[0][0], myrows[0][1]);
      });
      this.When(/^I enter username "([^"]*)"$/, function (object) {
        return page.commonObjects.inputUserName(object);
      });
      this.When(/^I enter password "([^"]*)"$/, function (object1) {
        return page.commonObjects.inputPassword(object1);
      });
      this.When(/^I click on "([^"]*)"$/, function (objectkey) {

         page.commonObjects.clickElement(objectkey);
         return driver.sleep(2000);
      });
      this.Then(/^I should see "([^"]*)"$/, function (obj) {
         page.commonObjects.elementExists(obj);
         return driver.sleep(2000);
      });      
}