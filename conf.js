exports.config = {

	onPrepare : function () {
		var HtmlReporter = require('protractor-html-screenshot-reporter');
		var reporter = new HtmlReporter({
			/* NOTE: onderstaand pad wordt ook gebruikt door Octopus, na afloop van het draaien van automatische tests; dus niet zomaar ff veranderen */
			baseDirectory : './report/screenshot', // a location to store screen shots.
			docTitle : 'Protractor Reporter',
			docName : 'report.html',
			//takeScreenShotsForSkippedSpecs : true
		});

		jasmine.getEnv().addReporter(reporter);

		// If chromeOnly is true, we dont need to stand the selenium server.
		// If you want to test with firefox, then set this to false and change the browserName
		chromeOnly : false

		browser.ignoreSynchronization = true;
		browser.driver.manage().window().maximize();

		//browser.manage().timeouts().pageLoadTimeout(4000);
		browser.manage().timeouts().implicitlyWait(5000);

		//jasmine.getEnv().addReporter(new jasmine.JUnitXmlReporter('report/log', true, true));

		restartBrowserBetweenTests : true;

		// Dit is de vervanger van de default implementatie van baseUrl. Op deze wijze wordt ie uit onderstaande config gehaald.
		//
		browser.baseUrl = browser.params.environments[browser.params.environment].website_url;

		// Contains a wait function so we don't need to sleep anymore
		//
		require('./helpers/waitReady.js');

		// De volgende include voegt aan browser object een methode checkBelgieLayer toe, die ervoor dat (als ie wordt getoond). de
		// belgie layer voor de betreffende sessie wordt gekilled.
		//
		require('./helpers/browser.get.js');
	},

	// Capabilities to be passed to the webdriver instance.
	capabilities : {
		browserName : 'chrome',
		/* FF config
		 prefs : {
		 'config.http.use-cache' : false
		 },
		 browserName : 'firefox',*/
		acceptSslCerts : true,
		trustAllSSLCertificates : true,
		chromeOptions : {
			args : ['incognito', 'disable-extensions', 'start-maximized', 'enable-crash-reporter-for-testing']
			//args: ['incognito', 'disable-extensions', 'start-maximized', 'enable-crash-reporter-for-testing', 'user-agent="Mozilla/5.0 (iPhone; U; CPU iPhone OS 5_1_1 like Mac OS X; en) AppleWebKit/534.46.0 (KHTML, like Gecko) CriOS/19.0.1084.60 Mobile/9B206 Safari/7534.48.3"']
		},
		loggingPrefs : {
			browser : 'ALL'
		}
	},

	// This can be changed via the command line as:
	// --params.login.user 'ngrocks'
	params : {
		environment : 'sf-dev', // Default omgeving, override door command-line params.environment op een andere waarde te zetten.
		environments : {
		'sf-dev' : {
				website_url : 'https://test.salesforce.com',
					}
	},
		login : {
			user : 'niek.nederland.eerste.lijn@unamic.com.tst',
			password : 'Platina2016'
		}

	},

	// ----- The test framework -----
	framework : 'jasmine',

	jasmineNodeOpts : {
		showColors : true,
		defaultTimeoutInterval : 240000
	},
	// Spec patterns are relative to the location of the spec file. They may
	// include glob patterns.
	suites : {
			'authenticatie' : 'suites/authenticatie/**/*.js',
			'newcustomer' : 'suites/NewCustomer/**/*.js',
			'search' : 'suites/Search/**/*.js'
	}
}
