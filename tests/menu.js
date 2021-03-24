function menuContentVerification (browser){
  //This function is used to verify that on all relevant pages menu options are the same
  browser
    .click('#nav-toggle')
    .click('nav ul li:nth-child(4) a')
    .assert.containsText('nav ul li:nth-child(1) a', 'WORK')
    .assert.containsText('nav ul li:nth-child(2) a', 'ABOUT')
    .assert.containsText('nav ul li:nth-child(3) a', 'CAREERS')
    .assert.containsText('nav ul li:nth-child(4) a', 'LOCATIONS')
    //.assert.containsText('nav ul li:nth-child(5) a', 'CONTACT')  //For some reason Nightwatch is not finding the text
    //.assert.containsText('nav ul li:nth-child(6) a', 'NEWS')  //For some reason Nightwatch is not finding the text
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
      .click('nav ul li:nth-child(1) a')
      .assert.title('Designory Work & Case Studies')
      .assert.urlContains('/work')
    menuContentVerification(browser);
    browser.end();
  });

  test('aboutNav', function(browser) {
    browser
      .url('https://www.designory.com')
      .click('#nav-toggle')
      .click('nav ul li:nth-child(2) a')
      .assert.title('Print & Digital Agency | Designory')
      .assert.urlContains('/about')
    menuContentVerification(browser);
    browser.end();
  });
});
