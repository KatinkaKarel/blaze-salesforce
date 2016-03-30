describe('Authenticatie > ', function () {

	var authenticationPage = require(process.cwd() + '/page_objects/authentication-page.js');
/*
		password : 'Platinum2016'

 BE 1e lijn rstegenhuis@unamic.com.dev
 NL 1e lijn abarbu@unamic.com.dev
 NL 2e lijn eschoenman@unamic.com.dev
 NL HR		dlodewijk@unamic.com.dev
 NL MAN		greetje.hanekamp@xerox.com.dev
*/
	it('Open sf and login', function () {

	var usernaam = "kkarel@wehkamp.nl.dev";
	var pasword = "Femke2810";

	browser.get("/");

	element(by.id('username')).clear();
	element(by.id('username')).sendKeys(usernaam);
	element(by.id('password')).clear();
	element(by.id('password')).sendKeys(pasword);
	element(by.id('Login')).click();

	});

	it('Open man and login', function () {

		var usernaam = "greetje.hanekamp@xerox.com.dev";
		var pasword = "Platinum2016";

		browser.get("/");
		element(by.id('username')).clear();
		element(by.id('username')).sendKeys(usernaam);
		element(by.id('password')).clear();
		element(by.id('password')).sendKeys(pasword);
		element(by.id('Login')).click();
	});



/*
	it('Inloggen', function ()

	{
	authenticationPage.loginWebsite("rstegenhuis@unamic.com.dev", "Platinum2016");
	});
*/
});

