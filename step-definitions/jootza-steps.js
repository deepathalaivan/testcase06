const { Driver } = require("selenium-webdriver/chrome");
const { DriverService } = require("selenium-webdriver/remote");

module.exports = function() {
  this.Given(/^I am on the jootza page$/, async function() {
    return await helpers.loadPage(page.jootza.url);
  });
  this.Then(/^I should see the approver name as "([^"]*)"$/, function (obj) {
    return page.jootza.verifyApprover(obj);
  });

  this.Given(
    /^I am logged on into jootza website as "([^"]*)" with "([^""]*)"$/,
    async function (username, password) {
      await helpers.loadPage(page.jootza.url);
      await page.commonObjects.inputUserName(username);
      await page.commonObjects.inputPassword(password);
      await page.commonObjects.clickElement("jootzaLogin");
      await driver.sleep(2000);
    }
  );

  this.When(
    /^I enter multiple inputs for the form fields$/,
    async function (table) {
      const myrows = table.rows();
      for (var i = 0; i < myrows.length; i++) {
        await page.commonObjects.inputNameAndValue(myrows[i][0],myrows[i][1]);
      }
    }
  );
  this.Given(
    /^I am logged  into jootza website with inputfields$/,
    async function (table) {
      await helpers.loadPage(page.jootza.url);
      const myrows = table.rows();
      for (var i = 0; i < myrows.length; i++) {
        await page.commonObjects.inputNameAndValue(myrows[i][0], myrows[i][1]);
      }
      await page.commonObjects.clickElement("jootzaLogin");
      await driver.sleep(2000);
    }
  );
};
