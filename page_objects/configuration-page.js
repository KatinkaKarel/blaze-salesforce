var configurationPage = function () {

	this.getWebsiteUrl = function() {
		return browser.params.environments[browser.params.environment].website_url;
	};

	this.getSalesforseLoginUsername = function () {
		return browser.params.environments[browser.params.environment].salesforse_login.username;
	};
	
	this.getSalesforseLoginPassword = function () {
		return browser.params.environments[browser.params.environment].salesforse_login.password;
	};

	this.getSalesforseLoginUrl = function() {
		return browser.params.environments[browser.params.environment].salesforse_login.url;
	};

	this.getCurrentEnvironment = function() {
		return browser.params.environment;
	};
	
};

module.exports = new configurationPage();
