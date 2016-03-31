var authenticationPage = function () {
	
	var configurationPage = require(process.cwd() + '/page_objects/configuration-page.js');
	var signupPage = require(process.cwd() + '/page_objects/signup-page.js');

	var EC = protractor.ExpectedConditions;

	/**
	 * Logs in to the website
	 */

	/*
	 password tst : 'Platinum2016!'
	 password acc : 'Platina2016!'

	 BE 1e lijn bart.belgie.eerste.lijn@unamic.com.tst
	 BE 2e lijn bernadette.belgie.tweede.lijn@unamic.com.tst
	 NL 1e lijn niek.nederland.eerste.lijn@unamic.com.tst
	 NL 2e lijn nadine.nederland.tweede.lijn@unamic.com.tst
	 NL HR		henriette.hr@unamic.com.tst
	 NL MAN		marina.manager@xerox.com.tst
	 BE MAN		mark.manager@xerox.com.tst
	 */
	
	
	this.login = function (username, password) {

		return _login ("/", username, password) ;
	};


	function _login(url, username, password) {

		var deferred=protractor.promise.defer();

		browser.get(url).then(function()
		{

			var g=element(by.id('username'));

			g.clear();
			g.sendKeys(username);

			var p=element(by.id('password'));

			p.clear();
			p.sendKeys(password);


			element(by.id('Login')).click();


		});

return deferred.promise

	};


	/**
	 * Logs out the current user
	 */


	this.logout = function () {
		return _logout();
	};

	function _logout() {


 element(by.id('userNav')).click();

 element(by.id('app_logout')).click();


				return;
	};







};



module.exports = new authenticationPage();
