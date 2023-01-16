module.exports = function () {
    this.Given(/^I am on the Target page$/, async function() {
        return await helpers.loadPage(page.target.url);
      });   
};
