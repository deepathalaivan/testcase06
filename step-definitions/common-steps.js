module.exports = function(){
    this.When(/^I enter Inputs for the form fields$/, async function (tab) {
        const myrows = tab.rows();
        await page.commonObjects.inputUserName(myrows[0][1]);
        await page.commonObjects.inputPassword(myrows[1][1]);
      });
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
        return page.commonObjects.clickElement(objectkey);
      });
      this.Then(/^I should see "([^"]*)"$/, function (obj) {
        return page.commonObjects.elementExists(obj);
      });      
}