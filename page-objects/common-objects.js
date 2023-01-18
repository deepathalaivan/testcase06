module.exports = {
  elements: {
    username: By.name("username"),
    password: By.name("password"),
    // username: By.xpath('//*[@id="login-username relate-pos"]'),
    // password: By.xpath('//*[@id="login-password relate-pos"]'),
    jootzaLogin: '//*[@id="btn-login"]/button',
    jootzaAccount:
      "/html/body/mdb-root/app-navigation/header/mdb-navbar/nav/ul/li[1]/a/span",
    jootzaWelcomeMessage:
      "/html/body/mdb-root/app-navigation/header/mdb-navbar/nav/div[2]/p/strong",
    targetsigninbutton:'//*[@id="headerPrimary"]/a[4]/div/img',
    targetsiginbutton1: '//*[@id="listaccountNav-signIn"]/a/span',
    targetLogin:'//*[@id="login"]',
    thetargetpage:'//*[@id="__next"]/div[2]/div[2]/div/div[1]/div[1]/div[1]/h1',
    amazonsignin: '//*[@id="nav-link-accountList-nav-line-1"]',
    amazoncontinue: '//*[@id="continue"]',
    amazonsigninSubmit: '//*[@id="signInSubmit"]',
    amazonstarthere:'//*[@id="nav-flyout-ya-newCust"]/a',
    email: By.name("email"),
    theamazonmessage: '//*[@id="nav-logo-sprites"]',
    amazonsignin1:'//*[@id="nav-signin-tooltip"]/a/span',

    amazoncreateaccount:'//*[@id="createAccountSubmit"]',
    customerName: By.name("customerName"),
    passwordCheck: By.name("passwordCheck"),
    amazoncontinuebutton:'//*[@id="continue"]',
    amazonerrormsg:'//*[@id="authportal-main-section"]/div[2]/div/div[1]/div/div/h4',       
     
    amazoncontinuebutton:'//*[@id="continue"]',
    amazonerrormsg:'//*[@id="authportal-main-section"]/div[2]/div/div[1]/div/div/div/p',
    jootzaDepartment: By.xpath('//*[@id="form31"]'),
    jootzaOrganization: By.xpath('//*[@id="form321"]'),
    jootzaCompanyAddress: By.xpath('//*[@id="form32"]'),
    jootzaCity: By.xpath('//*[@id="form33"]'),
    jootzaState: By.xpath('//*[@id="form34"]'),
    jootzaZip: By.xpath('//*[@id="form35"]'),
    SAVE: "/html/body/mdb-root/main/div/app-profile/div/mdb-tabset/div/div/div[2]/div/mdb-tab[1]/form/div[6]/button",
    "msg updated successfully": '//*[@id="toast-container"]',
  },

  clickElement: async function (objectkey) {
    var selector = page.commonObjects.elements[objectkey];
    await driver.sleep(4000);
    return driver.findElement(By.xpath(selector)).click();
  },
  elementExists: async function (obj) {
    await driver.sleep(2000);
    var selector = page.commonObjects.elements[obj];
    await driver.sleep(4000);
    return driver.findElement(By.xpath(selector));
  },
  inputUserName: async function (val) {
    var selector = page.commonObjects.elements["username"];
    await driver.sleep(2000);
    return driver.findElement(selector).sendKeys(val);
  },
  inputPassword: async function (val) {
    var selector = page.commonObjects.elements["password"];
    await driver.sleep(2000);
    return driver.findElement(selector).sendKeys(val);
  },
  inputNameAndValue: async function (fieldname, fieldvalue) {
    var selector = page.commonObjects.elements[fieldname];
    await driver.sleep(2000);
    return driver.findElement(selector).sendKeys(fieldvalue);
  },

};
