function menuContentVerification (browser){
  //This function is used to verify that on all relevant pages menu options are the same
  browser
    .click('#nav-toggle')
    .assert.containsText('nav > ul > li:nth-child(1) > a', 'WORK')
    .assert.containsText('nav > ul > li:nth-child(2) > a', 'ABOUT')
    .assert.containsText('nav > ul > li:nth-child(3) > a', 'CAREERS')
    .assert.containsText('nav > ul > li:nth-child(4) > a', 'LOCATIONS')
    .assert.containsText('nav > ul > li:nth-child(5) > a', 'CONTACT')
    .assert.containsText('nav > ul > li:nth-child(6) > a', 'NEWS')
}

describe('Menu', function() {

  test('menuVerification', function(browser) {
    browser
      .url('https://www.designory.com')
    menuContentVerification(browser);
    browser.end();
  });

  test('workNav', function(browser) {
    browser
      .url('https://www.designory.com')
      .click('#nav-toggle')
      .pause(5000)
      .click('nav > ul > li:nth-child(1) > a')
      .assert.title('Designory Work & Case Studies')
      .assert.urlContains('/work')
    menuContentVerification(browser);
    browser.end();
  });

  test('aboutNav', function(browser) {
    browser
      .url('https://www.designory.com')
      .click('#nav-toggle')
      .pause(5000)
      .click('nav > ul > li:nth-child(2) > a')
      .assert.title('Print & Digital Agency | Designory')
      .assert.urlContains('/about')
    menuContentVerification(browser);
    browser.end();
  });

  test('careersNav', function(browser) {
    browser
      .url('https://www.designory.com')
      .click('#nav-toggle')
      .pause(5000)
      .click('nav > ul > li:nth-child(3) > a')
      .assert.title('Careers | Designory')
      .assert.urlContains('/careers')
    menuContentVerification(browser);
    browser.end();
  });

//Since this locationsNav test is just a verification of the locations in the menu, I didn't add the menuContentVerification function as it would be redundant as the first test covered that portion of the menu.
  test('locationsNav', function(browser) {
    browser
      .url('https://www.designory.com')
      .click('#nav-toggle')
      .pause(5000)
      .click('nav > ul  > li:nth-child(4) > a')
      .assert.containsText('.subnav > li:nth-child(1) > a', 'LONG BEACH')
      .assert.containsText('.subnav > li:nth-child(2) > a', 'CHICAGO')
      .assert.containsText('.subnav > li:nth-child(3) > a', 'NASHVILLE')
      .assert.containsText('.subnav > li:nth-child(4) > a', 'TOKYO')
      .assert.containsText('.subnav > li:nth-child(5) > a', 'LONDON')
      .assert.containsText('.subnav > li:nth-child(6) > a', 'HONG KONG')
      .assert.containsText('.subnav > li:nth-child(7) > a', 'PARIS')
      .assert.containsText('.subnav > li:nth-child(8) > a', 'NEW YORK')
      .assert.containsText('.subnav > li:nth-child(9) > a', 'NEW JERSEY')
      .assert.containsText('.subnav > li:nth-child(10) > a', 'PORTLAND')
      .assert.containsText('.subnav > li:nth-child(11) > a', 'PHILADELPHIA')
      .end();
  });

  test('contactNav', function(browser) {
    browser
      .url('https://www.designory.com')
      .click('.cookie-notice__close')
      .click('#nav-toggle')
      .pause(5000)
      .click('nav > ul > li:nth-child(5) > a')
      .assert.title('Contact | Designory')
      .assert.urlContains('/contact')
    menuContentVerification(browser);
    browser.end();
  });

  test('newsNav', function(browser) {
    browser
      .url('https://www.designory.com')
      .click('#nav-toggle')
      .pause(5000)
      .click('nav > ul > li:nth-child(6) > a')
      .assert.title('Designory News & Awards | Designory')
      .assert.urlContains('/news')
    menuContentVerification(browser);
    browser.end();
  });
});
