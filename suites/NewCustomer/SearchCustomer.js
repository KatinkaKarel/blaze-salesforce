/**
 * Created by wehkampbv on 3/15/16.
 */

/**
 * Created by kkarel on 23-12-2015.
 */

var EC = protractor.ExpectedConditions;


describe('NewCustomer > ', function () {

    /*
     BE 1e lijn  rstegenhuis@unamic.com.dev
     NL 1e lijn 	abarbu@unamic.com.dev
     NL 2e lijn 	eschoenman@unamic.com.dev
     NL HR		dlodewijk@unamic.com.dev
     NL MAN		greetje.hanekamp@xerox.com.dev
     */

    var usernaam = "kkarel@wehkamp.nl.tst";
    var pasword = "Femke2110";

    var zipcode = element(by.xpath("//html/body/form/div[1]/span[2]/div/div/div/div/div[2]/div[1]/div[2]/table/tbody/tr[2]/td[2]"));

    it('Search customer', function () {

        browser.get("/");

        element(by.id('username')).clear();
        element(by.id('username')).sendKeys(usernaam);
        element(by.id('password')).clear();
        element(by.id('password')).sendKeys(pasword);
        element(by.id('Login')).click();

        element(by.xpath("//table[@id='scc_widget_TRC_Search_button']/tbody/tr[2]/td[2]/em/button")).click();


        browser.switchTo().frame(('scc_widget_TRC_Search'));

        browser.driver.findElement(by.xpath("//input[@id='postal_zone']")).click();

        element(by.xpath("//input[@id='postal_zone']")).sendKeys("6717TA");

        element(by.xpath("//input[@id='building_number']")).sendKeys("39");

        element(by.xpath("//input[@value='Zoeken']")).click();

        browser.driver.sleep(3000);

        //expect(element(by.xpath("//html/body/form/div[1]/span[2]/div/div/div/div/div[2]/table/tbody/tr[2]/td[2]"))).toContain("6717TA");

        EC.textToBePresentInElement(element(by.xpath("//html/body/form/div[1]/span[2]/div/div/div/div/div[2]/table/tbody/tr[2]/td[2]")), "6517TA");


        //expect(element(by.xpath("//html/body/form/div[1]/span[2]/div/div/div/div/div[2]/table/tbody/tr[2]/td[2]"))).toContain("6717TA");

        // expect(zipcode.getText()).toEqual("6717TA");


        browser.driver.switchTo().defaultContent();

        element(by.xpath('//*[@id="phSearchInput"]')).click();

        element(by.xpath('//*[@id="phSearchInput"]')).sendKeys('Karel');

        browser.driver.sleep(3000);

    });


});
