describe('Authenticatie > ', function () {

	var authenticationPage = require(process.cwd() + '/page_objects/authentication-page.js');
	var configurationPage = require(process.cwd() + '/page_objects/configuration-page.js');
	var signupPage = require(process.cwd() + '/page_objects/signup-page.js');
	
	var EC = protractor.ExpectedConditions;
	
	
/*
		password : 'Platinum2016!'
		password acc : 'Platina2016!'

 BE 1e lijn bart.belgie.eerste.lijn@unamic.com.tst
 BE 2e lijn bernadette.belgie.tweede.lijn@unamic.com.tst
 NL 1e lijn niek.nederland.eerste.lijn@unamic.com.tst
 NL 2e lijn nadine.nederland.tweede.lijn@unamic.com.tst
 NL HR		henriette.hr@unamic.com.tst
 NL MAN		marina.manager@xerox.com.tst
 BE MAN		mark.manager@xerox.com.tst
*/

	/*
	it('Open sf and login', function () {

	var usernaam = "niek.nederland.eerste.lijn@unamic.com.tst";
	var pasword = "Platinum2016!";

	browser.get("/");

	element(by.id('username')).clear();
	element(by.id('username')).sendKeys(usernaam);
	element(by.id('password')).clear();
	element(by.id('password')).sendKeys(pasword);
	element(by.id('Login')).click();

	});

 */



		it('Inloggen 2e lijn, 1e lijn en manager', function () {

			authenticationPage.login("nadine.nederland.tweede.lijn@unamic.com.tst", "Platinum2016!");

			authenticationPage.login("niek.nederland.eerste.lijn@unamic.com.tst", "Platinum2016!");

			authenticationPage.login("niek.nederland.eerste.lijn@unamic.com.tst", "Platinum2016!");

		});


	it('Open sf login and logout', function () {


		authenticationPage.login ("nadine.nederland.tweede.lijn@unamic.com.tst", "Platinum2016!");

		authenticationPage.logout ();

	});


});

