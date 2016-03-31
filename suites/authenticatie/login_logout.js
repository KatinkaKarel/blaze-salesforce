/**
 * Created by kkarel on 23-12-2015.
 */

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


describe('Authenticatie > ', function () {


    var authenticationPage=require(process.cwd() + '/page_objects/authentication-page.js');

    it('Open sf login and logout', function () {

        it('Inloggen 2e lijn', function () {
            authenticationPage.login ("nadine.nederland.tweede.lijn@unamic.com.tst", "Platinum2016!");
        });


        /*
         it('Uitloggen', function () {
         authenticationPage.logout ();
         });

         //expect($('#sdHeaderContent').waitReady()).toBeTruthy();
         element(by.id('userNav')).click();
         //expect($('.mbrMenuItems').waitReady()).toBeTruthy();
         element(by.id('app_logout')).click();


         });

         /*
         it('Open sf login logout and login again', function () {


         it('Inloggen eerste keer', function () {
         authenticationPage.login ("niek.nederland.eerste.lijn@unamic.com.tst", "Platinum2016!");
         });


         it('Uitloggen', function () {
         authenticationPage.logout ();
         });


         // expect($('#sdHeaderContent').waitReady()).toBeTruthy();
         element(by.id('userNav')).click();
         // expect($('.mbrMenuItems').waitReady()).toBeTruthy();
         element(by.id('app_logout')).click();

         it('Inloggen tweede keer', function () {
         authenticationPage.login ("henriette.hr@unamic.com.tst", "Platinum2016!");
         });
         */

    });
});




