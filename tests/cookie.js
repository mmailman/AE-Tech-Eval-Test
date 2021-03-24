describe('Cookie', function() {

  //Tests the Confirmation Button
  test('cookieAccept', function(browser) {
    browser
      .url('https://www.designory.com')
      .click('div.cookie-notice div p:nth-child(2) button')
      .pause(5000)
      //This verifies that the cookie window closes
      .assert.attributeContains('.cookie-notice__buffer', 'style', 'display: none;')
      .assert.attributeContains('.cookie-notice', 'style', 'display: none;')
      //The refresh is so that we can verify that the cooike window remains closed afterwards
      .refresh()
      .pause(5000)
      .assert.attributeContains('.cookie-notice__buffer', 'style', 'display: none;', 'Verifying <.cookie-notice__buffer> after refresh')
      .assert.attributeContains('.cookie-notice', 'style', 'display: none;', 'Verifying <.cookie-notice> after refresh')
      .end();
  });

  //Tests the X Button
  test('cookieClose', function(browser) {
    browser
      .url('https://www.designory.com')
      .click('.cookie-notice__close')
      .pause(5000)
      //This verifies that the cookie notice closes
      .assert.attributeContains('.cookie-notice__buffer', 'style', 'display: none;')
      .assert.attributeContains('.cookie-notice', 'style', 'display: none;')
      //The refresh is so that we can verify that the cooike window remains closed afterwards
      .refresh()
      .pause(5000)
      .assert.attributeContains('.cookie-notice__buffer', 'style', 'display: none;', 'Verifying <.cookie-notice__buffer> after refresh')
      .assert.attributeContains('.cookie-notice', 'style', 'display: none;', 'Verifying <.cookie-notice> after refresh')
      .end();
  });

  //Tests Cookie deletion
  test('cookieDelete', function(browser) {
    browser
      .url('https://www.designory.com')
      .click('div.cookie-notice div p:nth-child(2) button')
      .pause(5000)
      .refresh()
      //Verification that the cookie notice is closed
      .assert.attributeContains('.cookie-notice__buffer', 'style', 'display: none;')
      .assert.attributeContains('.cookie-notice', 'style', 'display: none;')
      .deleteCookies()
      .refresh()
      .pause(5000)
      //Verification that the cookie notice re-appeared
      .assert.attributeContains('.cookie-notice__buffer', 'style', 'display: block;')
      .assert.attributeContains('.cookie-notice', 'style', 'display: block;')
      .end();
  });

});
