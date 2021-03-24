# AE-Tech-Eval-Test

*Setup Instructions*
https://www.nightwatchjs.org/gettingstarted/installation
You will need Node.js installed.
1. Install Nightwatch - npm install Nightwatch
2. Install ChromeDriver - npm install chromedriver --save-dev

*Tech Eval Brief*
This technical evaluation requires creating three Automated Tests using Nightwatch(https://nightwatchjs.org). From the very beginning, use git, make regular commits to document all the project changes. Host completed work on gitlab.com in a public project. The test should be completed in three days (72 hours) upon receipt.

Test:
1. Menu
  a. On https://www.designory.com, verify that the menu contains six options: Work, About, Careers, Locations, Contact, News.
  b. Verify that all six options take the user to relevant pages.
  c. Verify that on those relevant pages menu options are the same.
2. Cookie
  a. Verify that after accepting the cookie notice, the user doesn't see the notice anymore.
  b. Verify that after close the cookie notice with the "X" button, the user doesn't see the notice anymore.
  c. Verify that after clearing cookies the "cookie notice" shows up again.
3. Location
  a. Verify that the Chicago location is present in the footer on https://www.designory.com and that the following information is correctly displayed:
    i.    The title is "Chicago"
    ii.   Phone number "+1 312 729 4500"
    iii.  Title inactive font color is "#808084"
    iv.   Title Hover color is "#fff"
  b. Verify that when a location is clicked, the user is taken to the relevant page.
  c. Verify that the same location in the footer now has an active state.
