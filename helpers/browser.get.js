browser.checkBelgieLayer = function (closeLayer) {

	var deferred = protractor.promise.defer();

	element.all(by.css("#body > div.fancybox-wrap.fancybox-desktop.fancybox-type-html.fancybox-opened > div > div.fancybox-outer > div > div > h1")).count().then(function (count) {
		if (count == 0) {
			deferred.fulfill(false); // Wordt niet getoond
		} else {
			deferred.fulfill(true); // Wordt wel getoond

			if (closeLayer) {
				// Close the Belgie layer
				//
				element(by.css("#body > div.fancybox-wrap.fancybox-desktop.fancybox-type-html.fancybox-opened > div > a")).click();
				browser.driver.sleep(1500);
			}
		}
	});

	return deferred.promise;
}
