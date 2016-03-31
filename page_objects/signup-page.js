var signupPage = function () {


	var authenticationPage = require(process.cwd() + '/page_objects/authentication-page.js');
	var configurationPage = require(process.cwd() + '/page_objects/configuration-page.js');

	var EC = protractor.ExpectedConditions;

	
	this.getRandomAddress = function () {
		return customerData.getRandomAddress();
	};
	
	this.getRandomUsername = function () {
		return customerData.getRandomUsername();
	};
	
	/**
	 * Creates a random customer via salesforce.
	*/
	this.createCustomer = function (username, password, address) {
	
		if (configurationPage.isLeadingContent()) {
			throw Error("***** Je bevindt je op LC. Op deze omgeving mogen we niet geautomatiseerd gebruikers aanmaken. *****");
		}
		
		var deferred = protractor.promise.defer();

		browser.baseUrl = configurationPage.getWebsiteUrl();
		browser.get('/W3/AccountAanmaken/Identificatie/Login/Index?ha=False').then(function() {

			// Klant aanmaken
			//
			element(by.id('Gebruikersnaam')).clear();

			element(by.id('Gebruikersnaam')).sendKeys(username)
			element(by.id('submitButton')).click();

			element(by.css("p.error-box")).getText().then(function onSucces(text) {
				// Als er een error-box verschijnt, is het inloggen fout gegaan
				//
				deferred.reject('Fout bij aanmaken klant: ' + text + ').');
			}, function () {
				return true;
			});

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

			element(by.id('volgendestap')).click().then(function() {
				browser.checkBelgieLayer(true);
			});
			
			element(by.css("p.error-box")).getText().then(function onSucces(text) {
				// Als er een error-box verschijnt, is het inloggen fout gegaan
				//
				deferred.reject('Fout bij aanmaken klant: ' + text + ').');
			}, function () {
				console.log("Gebruikersnaam: " + username);
				return true;
			});
		});
		
		return deferred.promise;
	};

};

module.exports = new signupPage();
