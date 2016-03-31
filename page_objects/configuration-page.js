var configurationPage = function () {


	var authenticationPage = require(process.cwd() + '/page_objects/authentication-page.js');
	var signupPage = require(process.cwd() + '/page_objects/signup-page.js');

	var EC = protractor.ExpectedConditions;


	this.closetabs = function () {
		return closetabs1();
	};

	function closetabs1() {
		
		browser.driver.sleep(3000);
		
		element.all(by.xpath('//div[@class="x-tab-tabmenu-right"]')).get(0).click();

		browser.driver.sleep(3000);


		element(by.xpath('//span[contains(text(),"sluiten")]')).click();

		
		return;
	};
};

module.exports = new configurationPage();
