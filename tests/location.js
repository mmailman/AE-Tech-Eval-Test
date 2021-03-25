describe('Location', function() {

  //Test to Verify that the Chicago location is present in the footer and that info is correctly displayed
  test('chicagoVerification', function(browser) {
    browser
      .url('https://www.designory.com')
      .click('.cookie-notice__close')
      .getLocationInView('footer')
      .pause(5000)
      //Decided to use Xpath here to show that I can and the css selectors were getting kind of complex
      .useXpath()
      .assert.containsText('//*[@id="body"]/footer/div[1]/div/div/div[2]/div/h3/a', 'CHICAGO')
      .assert.containsText('//*[@id="body"]/footer/div[1]/div/div/div[2]/div/span', '+1 312 729 4500')
      //Looks like assert was returning an rgba code.  The rgba code for #808084 is rgba(128, 128, 132, 1)
      .assert.cssProperty('//*[@id="body"]/footer/div[1]/div/div/div[2]/div/h3/a', 'color', 'rgba(128, 128, 132, 1)', 'Testing if element <//*[@id="body"]/footer/div[1]/div/div/div[2]/div/h3/a> has an inactive font color of <#808084>')
      .moveToElement('//*[@id="body"]/footer/div[1]/div/div/div[2]/div/h3/a', 5, 5, function(){
        browser.pause(5000)
        // #fff is shorthand for #ffffff which is rgba(255, 255, 255, 1)
        browser.assert.cssProperty('//*[@id="body"]/footer/div[1]/div/div/div[2]/div/h3/a', 'color', 'rgba(255, 255, 255, 1)', 'Testing if element <//*[@id="body"]/footer/div[1]/div/div/div[2]/div/h3/a> has an active font color of <#fff>')
      })
      .end();
  });

//The tests work when run individually, but break when the whole file is run on Long beach
//These tests are not ideal, a lot of copy paste code which could be refactored into something much smaller given that the points of reference used are consistent between each of the location pages.
//Along with that if there was an id system in place to make the website more QA friendly it would also simplify things.
//I found that the Title is not a consistent format between all location pages which is why everything is separate.
//I like to have at least 2 points of reference on a page before I call success which is why I used the title, url(for consistency between the Menu tests and these tests), and the active text color as requirements.
//Another way to aleviate some of the chances of breaking is to run them async, the reason why I didn't, is that would require system resouces that I don't have available.
//Another inconsistency I noticed while the tests were running is that the Square Logo for each location is not consistent between locations, some have additional details on where they are at, others do not.
  test('longbeachFooterNav', function(browser) {
    browser
      .url('https://www.designory.com')
      .click('.cookie-notice__close')
      .getLocationInView('footer')
      .pause(5000)
      .useXpath()
      .click('//*[@id="body"]/footer/div[1]/div/div/div[1]/div/h3/a')
      .assert.title('Long Beach Advertising Agency | Designory')
      .assert.urlContains('/locations/long-beach')

      //Section checking that the location in the footer is active
      .getLocationInView('//*[@id="body"]/footer')
      .pause(5000)
      .assert.cssProperty('//*[@id="body"]/footer/div[1]/div/div/div[1]/div/h3/a', 'color', 'rgba(255, 255, 255, 1)', 'Testing if location in footer has an active font color of <#fff>')
      .end();
  });

  test('chicagoFooterNav', function(browser) {
    browser
      .url('https://www.designory.com')
      .click('.cookie-notice__close')
      .getLocationInView('footer')
      .pause(5000)
      .useXpath()
      .click('//*[@id="body"]/footer/div[1]/div/div/div[2]/div/h3/a')
      .assert.title('Chicago Advertising Agency | The Designory')
      .assert.urlContains('/locations/chicago')

      //Section checking that the location in the footer is active
      .getLocationInView('//*[@id="body"]/footer')
      .pause(5000)
      .assert.cssProperty('//*[@id="body"]/footer/div[1]/div/div/div[2]/div/h3/a', 'color', 'rgba(255, 255, 255, 1)', 'Testing if location in footer has an active font color of <#fff>')
      .end();
  });

  test('newjerseyFooterNav', function(browser) {
    browser
      .url('https://www.designory.com')
      .click('.cookie-notice__close')
      .getLocationInView('footer')
      .pause(5000)
      .useXpath()
      .click('//*[@id="body"]/footer/div[1]/div/div/div[3]/div/h3/a')
      .assert.title('New Jersey Advertising Agency | The Designory')
      .assert.urlContains('/locations/new-jersey')

      //Section checking that the location in the footer is active
      .getLocationInView('//*[@id="body"]/footer')
      .pause(5000)
      .assert.cssProperty('//*[@id="body"]/footer/div[1]/div/div/div[3]/div/h3/a', 'color', 'rgba(255, 255, 255, 1)', 'Testing if location in footer has an active font color of <#fff>')
      .end();
  });

  test('newyorkFooterNav', function(browser) {
    browser
      .url('https://www.designory.com')
      .click('.cookie-notice__close')
      .getLocationInView('footer')
      .pause(5000)
      .useXpath()
      .click('//*[@id="body"]/footer/div[1]/div/div/div[4]/div/h3/a')
      .assert.title('New York Advertising Agency | The Designory')
      .assert.urlContains('/locations/new-york')

      //Section checking that the location in the footer is active
      .getLocationInView('//*[@id="body"]/footer')
      .pause(5000)
      .assert.cssProperty('//*[@id="body"]/footer/div[1]/div/div/div[4]/div/h3/a', 'color', 'rgba(255, 255, 255, 1)', 'Testing if location in footer has an active font color of <#fff>')
      .end();
  });

  test('nashvilleFooterNav', function(browser) {
    browser
      .url('https://www.designory.com')
      .click('.cookie-notice__close')
      .getLocationInView('footer')
      .pause(5000)
      .useXpath()
      .click('//*[@id="body"]/footer/div[1]/div/div/div[5]/div/h3/a')
      .assert.title('Nashville Advertising Agency | Designory')
      .assert.urlContains('/locations/nashville')

      //Section checking that the location in the footer is active
      .getLocationInView('//*[@id="body"]/footer')
      .pause(5000)
      .assert.cssProperty('//*[@id="body"]/footer/div[1]/div/div/div[5]/div/h3/a', 'color', 'rgba(255, 255, 255, 1)', 'Testing if location in footer has an active font color of <#fff>')
      .end();
  });

  test('tokyoFooterNav', function(browser) {
    browser
      .url('https://www.designory.com')
      .click('.cookie-notice__close')
      .getLocationInView('footer')
      .pause(5000)
      .useXpath()
      .click('//*[@id="body"]/footer/div[1]/div/div/div[6]/div/h3/a')
      .assert.title('Tokyo Advertising Agency | Designory')
      .assert.urlContains('/locations/tokyo')

      //Section checking that the location in the footer is active
      .getLocationInView('//*[@id="body"]/footer')
      .pause(5000)
      .assert.cssProperty('//*[@id="body"]/footer/div[1]/div/div/div[6]/div/h3/a', 'color', 'rgba(255, 255, 255, 1)', 'Testing if location in footer has an active font color of <#fff>')
      .end();
  });

  test('londonFooterNav', function(browser) {
    browser
      .url('https://www.designory.com')
      .click('.cookie-notice__close')
      .getLocationInView('footer')
      .pause(5000)
      .useXpath()
      .click('//*[@id="body"]/footer/div[1]/div/div/div[7]/div/h3/a')
      .assert.title('London Advertising Agency | Designory')
      .assert.urlContains('/locations/london')

      //Section checking that the location in the footer is active
      .getLocationInView('//*[@id="body"]/footer')
      .pause(5000)
      .assert.cssProperty('//*[@id="body"]/footer/div[1]/div/div/div[7]/div/h3/a', 'color', 'rgba(255, 255, 255, 1)', 'Testing if location in footer has an active font color of <#fff>')
      .end();
  });

  test('hongkongFooterNav', function(browser) {
    browser
      .url('https://www.designory.com')
      .click('.cookie-notice__close')
      .getLocationInView('footer')
      .pause(5000)
      .useXpath()
      .click('//*[@id="body"]/footer/div[1]/div/div/div[8]/div/h3/a')
      .assert.title('Hong Kong Advertising Agency | Designory')
      .assert.urlContains('/locations/hong-kong')

      //Section checking that the location in the footer is active
      .getLocationInView('//*[@id="body"]/footer')
      .pause(5000)
      .assert.cssProperty('//*[@id="body"]/footer/div[1]/div/div/div[8]/div/h3/a', 'color', 'rgba(255, 255, 255, 1)', 'Testing if location in footer has an active font color of <#fff>')
      .end();
  });

  test('parisFooterNav', function(browser) {
    browser
      .url('https://www.designory.com')
      .click('.cookie-notice__close')
      .getLocationInView('footer')
      .pause(5000)
      .useXpath()
      .click('//*[@id="body"]/footer/div[1]/div/div/div[9]/div/h3/a')
      .assert.title('Paris Advertising Agency | Designory')
      .assert.urlContains('/locations/paris')

      //Section checking that the location in the footer is active
      .getLocationInView('//*[@id="body"]/footer')
      .pause(5000)
      .assert.cssProperty('//*[@id="body"]/footer/div[1]/div/div/div[9]/div/h3/a', 'color', 'rgba(255, 255, 255, 1)', 'Testing if location in footer has an active font color of <#fff>')
      .end();
  });

  test('portlandFooterNav', function(browser) {
    browser
      .url('https://www.designory.com')
      .click('.cookie-notice__close')
      .getLocationInView('footer')
      .pause(5000)
      .useXpath()
      .click('//*[@id="body"]/footer/div[1]/div/div/div[10]/div/h3/a')
      .assert.title('Portland Advertising Agency | Designory')
      .assert.urlContains('/locations/portland')

      //Section checking that the location in the footer is active
      .getLocationInView('//*[@id="body"]/footer')
      .pause(5000)
      .assert.cssProperty('//*[@id="body"]/footer/div[1]/div/div/div[10]/div/h3/a', 'color', 'rgba(255, 255, 255, 1)', 'Testing if location in footer has an active font color of <#fff>')
      .end();
  });

  test('philadelphiaFooterNav', function(browser) {
    browser
      .url('https://www.designory.com')
      .click('.cookie-notice__close')
      .getLocationInView('footer')
      .pause(5000)
      .useXpath()
      .click('//*[@id="body"]/footer/div[1]/div/div/div[11]/div/h3/a')
      .assert.title('Philadelphia Advertising Agency | Designory')
      .assert.urlContains('/locations/philadelphia')

      //Section checking that the location in the footer is active
      .getLocationInView('//*[@id="body"]/footer')
      .pause(5000)
      .assert.cssProperty('//*[@id="body"]/footer/div[1]/div/div/div[11]/div/h3/a', 'color', 'rgba(255, 255, 255, 1)', 'Testing if location in footer has an active font color of <#fff>')
      .end();
  });

  test('singaporeFooterNav', function(browser) {
    browser
      .url('https://www.designory.com')
      .click('.cookie-notice__close')
      .getLocationInView('footer')
      .pause(5000)
      .useXpath()
      .click('//*[@id="body"]/footer/div[1]/div/div/div[12]/div/h3/a')
      .assert.title('Designory | Singapore')
      .assert.urlContains('/locations/singapore')

      //Section checking that the location in the footer is active
      .getLocationInView('//*[@id="body"]/footer')
      .pause(5000)
      .assert.cssProperty('//*[@id="body"]/footer/div[1]/div/div/div[12]/div/h3/a', 'color', 'rgba(255, 255, 255, 1)', 'Testing if location in footer has an active font color of <#fff>')
      .end();
  });

  test('sydneyFooterNav', function(browser) {
    browser
      .url('https://www.designory.com')
      .click('.cookie-notice__close')
      .getLocationInView('footer')
      .pause(5000)
      .useXpath()
      .click('//*[@id="body"]/footer/div[1]/div/div/div[13]/div/h3/a')
      .assert.title('Sydney | Designory')
      .assert.urlContains('/locations/sydney')

      //Section checking that the location in the footer is active
      .getLocationInView('//*[@id="body"]/footer')
      .pause(5000)
      .assert.cssProperty('//*[@id="body"]/footer/div[1]/div/div/div[13]/div/h3/a', 'color', 'rgba(255, 255, 255, 1)', 'Testing if location in footer has an active font color of <#fff>')
      .end();
  });

  test('melbourneFooterNav', function(browser) {
    browser
      .url('https://www.designory.com')
      .click('.cookie-notice__close')
      .getLocationInView('footer')
      .pause(5000)
      .useXpath()
      .click('//*[@id="body"]/footer/div[1]/div/div/div[14]/div/h3/a')
      .assert.title('Melbourne | Designory')
      .assert.urlContains('/locations/melbourne')

      //Section checking that the location in the footer is active
      .getLocationInView('//*[@id="body"]/footer')
      .pause(5000)
      .assert.cssProperty('//*[@id="body"]/footer/div[1]/div/div/div[14]/div/h3/a', 'color', 'rgba(255, 255, 255, 1)', 'Testing if location in footer has an active font color of <#fff>')
      .end();
  });

  test('abudhabiFooterNav', function(browser) {
    browser
      .url('https://www.designory.com')
      .click('.cookie-notice__close')
      .getLocationInView('footer')
      .pause(5000)
      .useXpath()
      .click('//*[@id="body"]/footer/div[1]/div/div/div[15]/div/h3/a')
      .assert.title('Designory | Abu Dhabi')
      .assert.urlContains('/locations/abu-dhabi')

      //Section checking that the location in the footer is active
      .getLocationInView('//*[@id="body"]/footer')
      .pause(5000)
      .assert.cssProperty('//*[@id="body"]/footer/div[1]/div/div/div[15]/div/h3/a', 'color', 'rgba(255, 255, 255, 1)', 'Testing if location in footer has an active font color of <#fff>')
      .end();
  });
});
