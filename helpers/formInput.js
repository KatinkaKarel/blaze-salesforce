var formInputHelper = function () {

	/*
	Helper functions for forms
	 */

	this.setInputValueById = function (elementId, elementValue) {
		var inputElement = element(by.id(elementId));
		inputElement.click();
		inputElement.clear();
		inputElement.sendKeys(elementValue);
	};	 
	 
	this.setSelectValueByIdAndText = function (elementId, optionText) {
		element(by.id(elementId)).element(by.cssContainingText('option', optionText)).click();
	};
	
	this.selectRadioOptionById = function (elementId) {
		element(by.id(elementId)).click();
	};

	this.clickButtonById = function (elementId) {
		var submitButton = element(by.id(elementId));
		submitButton.click();
	};
	 
};

module.exports = new formInputHelper();
