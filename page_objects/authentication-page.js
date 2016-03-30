var authenticationPage = function () {
	var signupPage = require(process.cwd() + '/page_objects/signup-page.js');
	var deferred = protractor.promise.defer();
	/**
	 * Logs in to the website
	 */
	this.loginWebsite = function (usernaam, pasword) {

		function login(url, usernaam, pasword) {

			var deferred = protractor.promise.defer();

			browser.get(url).then(function () {

				var g = element(by.id('username'));

				g.click();
				g.clear();
				g.sendKeys(usernaam);

				var p = element(by.id('password'));

				p.click();
				p.clear();
				p.sendKeys(pasword);

				element(by.id('Login')).click();
				/*
				 element(by.css("p.error-box")).getText().then(function onSucces(text) {
				 // Als er een error-box verschijnt, is het inloggen fout gegaan
				 deferred.reject('Fout bij inloggen: ' + text + ').');
				 }, function () {
				 deferred.fulfill(true)
				 });
				 */
			});

			return deferred.promise
		};

	};

	/**
	 * Logs out the current user
	 */


	this.logout = function () {
		return _logout();
	};

	function _logout() {

		// expect($('#sdHeaderContent').waitReady()).toBeTruthy();
		element(by.id('userNav')).click();
		// expect($('.mbrMenuItems').waitReady()).toBeTruthy();
		element(by.id('app_logout')).click();


				return;
	};




	this.checkLogin = function (gebruikersnaam, createLoginAccount) {

		var username = gebruikersnaam;
		var password = "test1234";
		var address = signupPage.getRandomAddress();

		browser.get('/W3/Inloggen/Identificatie/Login/Index');

		element(by.id('Gebruikersnaam')).clear();
		element(by.id('Gebruikersnaam')).sendKeys(username);
		element(by.id('Wachtwoord')).clear();
		element(by.id('Wachtwoord')).sendKeys(password);
		element(by.id('submitButton')).click();

		element.all(by.css("p.error-box")).count().then(function (count) {

			if (count == 0) {
				deferred.fulfill(false); // Wordt niet getoond
			} else {
				deferred.fulfill(true); // Wordt wel getoond

				if (createLoginAccount) {

					browser.get('/W3/AccountAanmaken/Identificatie/Login/Index');
					element(by.id('doesNotHasAccount')).click();
					
					element(by.id('Gebruikersnaam')).sendKeys(username);
					element(by.id('submitButton')).click();

					element(by.id('Voornaam')).sendKeys('Pieter');
					element(by.id('Achternaam')).sendKeys('de Jong');
					element.all(by.css('div.formfield.formfield-radio label')).get(1).click();
					element(by.id('Geboortedatum_Day')).sendKeys('9');
					element(by.id('Geboortedatum_Month')).sendKeys('Oktober');
					element(by.id('Geboortedatum_Year')).sendKeys('1981');
					element(by.id('Adres_Postcode')).sendKeys(address.postcode);
					element(by.id('Adres_Huisnummer')).sendKeys(address.huisnummer);
					element(by.id('Telefoonnummer')).sendKeys('0612348765');
					element(by.id('Wachtwoord')).sendKeys(password);
					element(by.id('BevestigWachtwoord')).sendKeys(password);
					element(by.id('volgendestap')).click();
				}

			}

		});
		return deferred.promise;
	};


};

		
	
module.exports = new authenticationPage();
