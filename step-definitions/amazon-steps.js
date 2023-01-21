
module.exports = function()
{
   this.Given(/^I am on amazon page$/,async function(){
     await helpers.loadPage(page.amazon.url);
     return await driver.sleep(4000);
   });
   
}