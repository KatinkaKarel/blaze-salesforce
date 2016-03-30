/**
 * Created by kkarel on 23-12-2015.
 */


/* password : 'Platinum2016'
 BE 1e lijn rstegenhuis@unamic.com.dev
 NL 1e lijn abarbu@unamic.com.dev
 NL 2e lijn eschoenman@unamic.com.dev
 NL HR		dlodewijk@unamic.com.dev
 NL MAN		greetje.hanekamp@xerox.com.dev
 */

describe('Authenticatie > ', function () {


    it('Open sf login and logout', function () {

    var usernaam = "kkarel@wehkamp.nl.dev";
    var pasword = "Femke2810";

    browser.get("/");

    element(by.id('username')).clear();
    element(by.id('username')).sendKeys(usernaam);
    element(by.id('password')).clear();
    element(by.id('password')).sendKeys(pasword);
    element(by.id('Login')).click();

    //expect($('#sdHeaderContent').waitReady()).toBeTruthy();
        element(by.id('userNav')).click();
        //expect($('.mbrMenuItems').waitReady()).toBeTruthy();
        element(by.id('app_logout')).click();

        browser.sleep(3000);
});


    it('Open sf login logout and login again', function () {

        var usernaam1 = "kkarel@wehkamp.nl.dev";
        var pasword1 = "Femke2810";
        var usernaam2 = "greetje.hanekamp@xerox.com.dev";
        var pasword2 = "Platinum2016";
        browser.get("/");

        element(by.id('username')).clear();
        element(by.id('username')).sendKeys(usernaam1);
        element(by.id('password')).clear();
        element(by.id('password')).sendKeys(pasword1);
        element(by.id('Login')).click();

       // expect($('#sdHeaderContent').waitReady()).toBeTruthy();
        element(by.id('userNav')).click();
       // expect($('.mbrMenuItems').waitReady()).toBeTruthy();
        element(by.id('app_logout')).click();

        element(by.id('username')).clear();
        element(by.id('username')).sendKeys(usernaam2);
        element(by.id('password')).clear();
        element(by.id('password')).sendKeys(pasword2);
        element(by.id('Login')).click();
    });

});



