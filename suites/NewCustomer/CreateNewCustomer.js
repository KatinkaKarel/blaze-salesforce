/**
 * Created by kkarel on 23-12-2015.
 */

var authenticationPage = require(process.cwd() + '/page_objects/authentication-page.js');
var configurationPage = require(process.cwd() + '/page_objects/configuration-page.js');
var signupPage = require(process.cwd() + '/page_objects/signup-page.js');

var EC = protractor.ExpectedConditions;


describe('NewCustomer > ', function () {

    var a = "scc_widget_TRC_Search_button";
    var zipcode = element(by.xpath("//html/body/form/div[1]/span[2]/div/div/div/div/div[2]/div[1]/div[2]/table/tbody/tr[2]/td[2]"));

    it('New customer', function () {

        authenticationPage.login("nadine.nederland.tweede.lijn@unamic.com.tst", "Platinum2016!");

        configurationPage.closetabs();

        /*
        browser.driver.sleep(3000);

       element.all(by.xpath('//div[@class="x-tab-tabmenu-right"]')).get(0).click();

       browser.driver.sleep(3000);


        element(by.xpath('//span[contains(text(),"sluiten")]')).click();
         */

        EC.presenceOf(element(by.xpath("//table[@id='scc_widget_TRC_Search_button']/tbody/tr[2]/td[2]/em/button")));

    element(by.xpath("//table[@id='scc_widget_TRC_Search_button']/tbody/tr[2]/td[2]/em/button")).click();


    browser.driver.switchTo().frame('scc_widget_TRC_Search');


    browser.driver.findElement(by.xpath("//input[@id='customer_number']")).click();

    element(by.xpath("//input[@id='customer_number']")).sendKeys("00090009");

    element(by.xpath("//input[@value='Zoeken']")).click();

        browser.driver.sleep(3000);



        browser.driver.switchTo().defaultContent();
      element(by.xpath("//table[@id='scc_widget_TRC_Search_button']/tbody/tr[2]/td[2]/em/button")).click();

        browser.driver.sleep(3000);

        browser.driver.switchTo().frame(1);

        EC.presenceOf(element(by.xpath('//*[@id="j_id0:form:j_id37:j_id50:new_customer"]')));


        element(by.xpath('//*[@id="j_id0:form:j_id37:j_id50:new_customer"]')).click();

        browser.driver.switchTo().defaultContent();

        browser.driver.switchTo().frame(2);

        EC.presenceOf(element(by.xpath('//*[@id="j_id0:form:newCustomerDetails:j_id53:j_id54"]')));

        element(by.xpath('//*[@id="j_id0:form:newCustomerDetails:j_id148:submitButton"]')).click();

        browser.driver.sleep(3000);

        element(by.xpath('//*[@id="j_id0:form:newCustomerDetails:j_id53:j_id54"]')).sendKeys('J');
        element(by.xpath('//*[@id="j_id0:form:newCustomerDetails:j_id53:j_id60"]')).sendKeys('Jan');
        element(by.xpath('//*[@id="j_id0:form:newCustomerDetails:j_id53:j_id66"]')).sendKeys('Jansen');
        element(by.xpath('//*[@id="j_id0:form:newCustomerDetails:j_id53:j_id72"]')).sendKeys('Klein Jansen');
        element(by.xpath('//*[@id="j_id0:form:newCustomerDetails:j_id53:j_id78"]')).sendKeys('21-08-1973');
        element(by.xpath('//*[@id="j_id0:form:newCustomerDetails:j_id53:j_id84"]')).sendKeys('M');
        element(by.xpath('//*[@id="j_id0:form:newCustomerDetails:j_id53:j_id89"]')).sendKeys('wehkamp@wehkamp.nl');

        element(by.xpath('//*[@id="j_id0:form:newCustomerDetails:j_id53:j_id55:postalZone"]')).sendKeys('6531CK');
      // element(by.xpath('//*[@id="j_id0:form:newCustomerDetails:j_id53:j_id61:streetName"]')).sendKeys();
        element(by.xpath('//*[@id="j_id0:form:newCustomerDetails:j_id53:j_id67:buildingNumber"]')).sendKeys('24');
        //element(by.xpath('//*[@id="j_id0:form:newCustomerDetails:j_id53:j_id73:inhouseMail"]')).sendKeys('a');
        element(by.xpath('//*[@id="j_id0:form:newCustomerDetails:j_id53:j_id79:cityName"]')).sendKeys('Nijmegen');

        EC.presenceOf(element(by.xpath('//*[@id="j_id0:form:newCustomerDetails:j_id53:j_id85"]')));


       element(by.xpath('//*[@id="btnSearchAddress"]')).click();

        element(by.xpath('//table[@class="slds-table slds-table--bordered"]/tbody/tr[3]/td[1]/div/label/span')).click();

        element(by.css('#btnAddressOk')).click();


       EC.presenceOf(element(by.xpath('//*[@id="j_id0:form:newCustomerDetails:j_id148:submitButton"]')));

        browser.driver.sleep(5000);

        element(by.xpath('//*[@id="j_id0:form:newCustomerDetails:j_id148:submitButton"]')).click();

       EC.presenceOf(element(by.xpath('//*[@id="btnEmailSentOk"]')));
        browser.driver.sleep(5000);
      element(by.xpath('//*[@id="btnEmailSentOk"]')).click();


    browser.driver.sleep(5000);


});


//    describe('NewCustomer > check error message', function () {


});







