/**
 * Created by wehkampbv on 3/15/16.
 */

/**
 * Created by kkarel on 23-12-2015.
 */


var authenticationPage = require(process.cwd() + '/page_objects/authentication-page.js');
var configurationPage = require(process.cwd() + '/page_objects/configuration-page.js');
var signupPage = require(process.cwd() + '/page_objects/signup-page.js');

var EC = protractor.ExpectedConditions;

describe('Search > ', function () {
    

    var zipcode = element(by.xpath("//html/body/form/div[1]/span[2]/div/div/div/div/div[2]/div[1]/div[2]/table/tbody/tr[2]/td[2]"));

    it('Search customer', function () {

        authenticationPage.login("nadine.nederland.tweede.lijn@unamic.com.tst", "Platinum2016!");

        configurationPage.closetabs();

        element(by.xpath("//table[@id='scc_widget_TRC_Search_button']/tbody/tr[2]/td[2]/em/button")).click();


        browser.switchTo().frame(('scc_widget_TRC_Search'));

        browser.driver.findElement(by.xpath("//input[@id='postal_zone']")).click();

        element(by.xpath("//input[@id='postal_zone']")).sendKeys("6717TA");

        element(by.xpath("//input[@id='building_number']")).sendKeys("39");

        element(by.xpath("//input[@value='Zoeken']")).click();

        browser.driver.sleep(3000);


        browser.switchTo().frame(0);

        
        EC.textToBePresentInElement(element(by.xpath("/html/body/form/div[1]/span[2]/div/div/div/div/div[2]/div[1]/div[2]/table/tbody/tr[2]/td[2]")), "6417TA");


        expect(element(by.xpath('//*[@id="j_id0:form:consoleAccountDetails:j_id139"]/div[2]/table/tbody/tr[2]/td[2][contains(text,"6717TA")]')).toBeTruthy);

        browser.driver.sleep(3000);

    });


});
