const { assert } = require("chai");
const { addImplicitHelpCommand } = require("commander");
const { By } = require("selenium-webdriver");
const { logging } = require("selenium-webdriver");
const { Driver } = require("selenium-webdriver/edge");

module.exports = {
  url: "http://www.jootza.com/login",
  elements: {
    Approver: '//*[@id="info"]/div[1]/div[3]/div/input'   
  },
  content: {
    "Shan Approver": "Adams, Jimmy",
    "kavitha Approver": "ADMIN1, CLT",
    "deepa Approver": "ADMIN21, CLT",
  },
  verifyApprover: async function (val) {
    var selector = page.jootza.elements["Approver"];
    await driver.sleep(2000);
    var result = await driver
      .findElement(By.xpath(selector))
      .getAttribute("value");
    assert.equal(page.jootza.content[val], result);
  }
};
