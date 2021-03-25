describe('Cookie', function() {

  //Tests the Confirmation Button
  test('cookieAccept', function(browser) {
    browser
      .url('https://www.designory.com')
      .click('div.cookie-notice div p:nth-child(2) button')
      //This verifies that the cookie window closes
      .assert.attributeContains('.cookie-notice__buffer', 'style', 'display: none;')
      .assert.attributeContains('.cookie-notice', 'style', 'display: none;')
      //The refresh is so that we can verify that the cooike window remains closed afterwards
      .refresh()
      .assert.attributeContains('.cookie-notice__buffer', 'style', 'display: none;', 'Verifying <.cookie-notice__buffer> after refresh')
      .assert.attributeContains('.cookie-notice', 'style', 'display: none;', 'Verifying <.cookie-notice> after refresh')
      .end();
  });

  //Tests the X Button
  test('cookieClose', function(browser) {
    browser
      .url('https://www.designory.com')
      .click('.cookie-notice__close')
      //This verifies that the cookie notice closes
      .assert.attributeContains('.cookie-notice__buffer', 'style', 'display: none;')
      .assert.attributeContains('.cookie-notice', 'style', 'display: none;')
      //The refresh is so that we can verify that the cooike window remains closed afterwards
      .refresh()
      .assert.attributeContains('.cookie-notice__buffer', 'style', 'display: none;', 'Verifying <.cookie-notice__buffer> after refresh')
      .assert.attributeContains('.cookie-notice', 'style', 'display: none;', 'Verifying <.cookie-notice> after refresh')
      .end();
  });

  //Tests Cookie deletion
  test('cookieDelete', function(browser) {
    browser
      .url('https://www.designory.com')
      .click('div.cookie-notice div p:nth-child(2) button')
      .refresh()
      //Verification that the cookie notice is closed
      .assert.attributeContains('.cookie-notice__buffer', 'style', 'display: none;')
      .assert.attributeContains('.cookie-notice', 'style', 'display: none;')
      .deleteCookies()
      .refresh()
      //Verification that the cookie notice re-appeared
      .assert.attributeContains('.cookie-notice__buffer', 'style', 'display: block;')
      .assert.attributeContains('.cookie-notice', 'style', 'display: block;')
      .end();
  });

});
