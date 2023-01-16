module.exports = function()
{
   this.Given(/^I am on amazon page$/,async function(){
    return await helpers.loadPage(page.amazon.url)
   });
}