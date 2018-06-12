$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Co-work Application",
  "description": "As a user I should be able to open the application\nand view the contents. The application should accept\nphone number as username and password. \nOn the home page the application needs to have different tabs\nsuch as home, about us, terms and condition and contact us.\nThese should be links and while clicking should open up the contents.\nThe login page should also consist of remember me option and that\nshould be clickable like a check box.",
  "id": "co-work-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 18,
  "name": "Login with valid credentials",
  "description": "",
  "id": "co-work-application;login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "The user enters a registered \u003cphone number\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "He enters a \u003cpassword\u003e related to the phone number",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Click on sign in",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "He should be able to view the Home page of the application with title \u003ctitle of home page\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "co-work-application;login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "phone number",
        "password",
        "title of home page"
      ],
      "line": 25,
      "id": "co-work-application;login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "8892518970",
        "2132346",
        "GoodWorkCoWorks"
      ],
      "line": 26,
      "id": "co-work-application;login-with-valid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 12,
  "name": "User opens the browser",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 13,
  "name": "User is in login screen",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "He clicks on sign in button",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "He should be able to view username field",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "He should be able to view the password field",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTests.user_is_in_login_screen()"
});
formatter.result({
  "duration": 501407536,
  "status": "passed"
});
formatter.match({
  "location": "LoginTests.he_clicks_on_sign_in_button()"
});
formatter.result({
  "duration": 193354545,
  "status": "passed"
});
formatter.match({
  "location": "LoginTests.he_should_be_able_to_view_username_field()"
});
formatter.result({
  "duration": 58721151,
  "status": "passed"
});
formatter.match({
  "location": "LoginTests.he_should_be_able_to_view_the_password_field()"
});
formatter.result({
  "duration": 49240165,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Login with valid credentials",
  "description": "",
  "id": "co-work-application;login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "The user enters a registered 8892518970",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "He enters a 2132346 related to the phone number",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Click on sign in",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "He should be able to view the Home page of the application with title GoodWorkCoWorks",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "8892518970",
      "offset": 29
    }
  ],
  "location": "LoginTests.the_user_enters_a_registered_phone_number(String)"
});
formatter.result({
  "duration": 241124052,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2132346",
      "offset": 12
    }
  ],
  "location": "LoginTests.he_enters_a_password_related_to_the_phone_number(String)"
});
formatter.result({
  "duration": 158768780,
  "status": "passed"
});
formatter.match({
  "location": "LoginTests.click_on_sign_in()"
});
formatter.result({
  "duration": 150230700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GoodWorkCoWorks",
      "offset": 70
    }
  ],
  "location": "LoginTests.he_should_be_able_to_view_the_Home_page_of_the_application(String)"
});
formatter.result({
  "duration": 7035494340,
  "status": "passed"
});
});