describe('Location', function() {

  //Test to Verify that the Chicago location is present in the footer and that info is correctly displayed
  //title is "Chicago"
  //Phone number "+1 312 729 4500"
  test('chicagoVerification', function(browser) {
    browser
      .url('https://www.designory.com')
      .click('.cookie-notice__close')
      .getLocationInView('footer')
      .pause(5000)
      .useXpath()
      .assert.containsText('//*[@id="body"]/footer/div[1]/div/div/div[2]/div/h3/a', 'CHICAGO')
      //Looks like assert was returning an rgba code.  The rgba code for #808084 is rgba(128, 128, 132, 1)
      .assert.cssProperty('//*[@id="body"]/footer/div[1]/div/div/div[2]/div/h3/a', 'color', 'rgba(128, 128, 132, 1)', 'Testing if element <//*[@id="body"]/footer/div[1]/div/div/div[2]/div/h3/a> has an inactive font color of <#808084>')
      .moveToElement('//*[@id="body"]/footer/div[1]/div/div/div[2]/div/h3/a', 5, 5, function(){
        browser.pause(10000)
        // #fff is shorthand for #ffffff which is rgba(255, 255, 255, 1)
        browser.assert.cssProperty('//*[@id="body"]/footer/div[1]/div/div/div[2]/div/h3/a', 'color', 'rgba(255, 255, 255, 1)', 'Testing if element <//*[@id="body"]/footer/div[1]/div/div/div[2]/div/h3/a> has an active font color of <#fff>')
      })
      .end();
  });
});
