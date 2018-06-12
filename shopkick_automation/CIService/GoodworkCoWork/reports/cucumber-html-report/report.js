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
formatter.step({
  "line": 23,
  "name": "The user clicks on logout",
  "keyword": "When "
});
formatter.examples({
  "line": 26,
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
      "line": 27,
      "id": "co-work-application;login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "8892518970",
        "2132346",
        "GoodWorkCoWorks"
      ],
      "line": 28,
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
  "duration": 556187354,
  "status": "passed"
});
formatter.match({
  "location": "LoginTests.he_clicks_on_sign_in_button()"
});
formatter.result({
  "duration": 305310702,
  "status": "passed"
});
formatter.match({
  "location": "LoginTests.he_should_be_able_to_view_username_field()"
});
formatter.result({
  "duration": 58347874,
  "status": "passed"
});
formatter.match({
  "location": "LoginTests.he_should_be_able_to_view_the_password_field()"
});
formatter.result({
  "duration": 43759735,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
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
formatter.step({
  "line": 23,
  "name": "The user clicks on logout",
  "keyword": "When "
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
  "duration": 411274135,
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
  "duration": 132287056,
  "status": "passed"
});
formatter.match({
  "location": "LoginTests.click_on_sign_in()"
});
formatter.result({
  "duration": 152400784,
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
  "duration": 7027315121,
  "status": "passed"
});
formatter.match({
  "location": "LoginTests.the_user_clicks_on_logout()"
});
formatter.result({
  "duration": 4763325346,
  "error_message": "Element not found {By.xpath: //a[@title\u003d\u0027Logout\u0027]}\nExpected: visible\nScreenshot: file:/Users/snehashish/shopkick_automation/CIService/GoodworkCoWork/build/reports/tests/1528715927631.0.png\nPage source: file:/Users/snehashish/shopkick_automation/CIService/GoodworkCoWork/build/reports/tests/1528715927631.0.html\nTimeout: 4 s.\nCaused by: NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[@title\u003d\u0027Logout\u0027]\"}\n\tat com.codeborne.selenide.impl.WebElementSource.createElementNotFoundError(WebElementSource.java:31)\n\tat com.codeborne.selenide.impl.ElementFinder.createElementNotFoundError(ElementFinder.java:82)\n\tat com.codeborne.selenide.impl.WebElementSource.checkCondition(WebElementSource.java:59)\n\tat com.codeborne.selenide.impl.WebElementSource.findAndAssertElementIsVisible(WebElementSource.java:72)\n\tat com.codeborne.selenide.commands.Click.execute(Click.java:16)\n\tat com.codeborne.selenide.commands.Click.execute(Click.java:12)\n\tat com.codeborne.selenide.commands.Commands.execute(Commands.java:144)\n\tat com.codeborne.selenide.impl.SelenideElementProxy.dispatchAndRetry(SelenideElementProxy.java:90)\n\tat com.codeborne.selenide.impl.SelenideElementProxy.invoke(SelenideElementProxy.java:65)\n\tat com.sun.proxy.$Proxy22.click(Unknown Source)\n\tat com.cowork.pages.CoWorkPage.click_on_logout_button(CoWorkPage.java:20)\n\tat com.cowork.stepdefinations.LoginTests.the_user_clicks_on_logout(LoginTests.java:83)\n\tat ✽.When The user clicks on logout(login.feature:23)\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[@title\u003d\u0027Logout\u0027]\"}\n  (Session info: chrome\u003d66.0.3359.181)\n  (Driver info: chromedriver\u003d2.40.565386 (45a059dc425e08165f9a10324bd1380cc13ca363),platform\u003dMac OS X 10.13.4 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027GW-DK-031.local\u0027, ip: \u0027192.168.1.184\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.4\u0027, java.version: \u00279.0.4\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.40.565386 (45a059dc425e08..., userDataDir: /var/folders/l_/xzq6rfl10f9...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 66.0.3359.181, webStorageEnabled: true}\nSession ID: fa45ec9fa9108b9fd3599b34c439e102\n*** Element info: {Using\u003dxpath, value\u003d//a[@title\u003d\u0027Logout\u0027]}\n\tat jdk.internal.reflect.GeneratedConstructorAccessor9.newInstance(Unknown Source)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:488)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\n\tat com.codeborne.selenide.impl.WebElementSelector.findElement(WebElementSelector.java:29)\n\tat com.codeborne.selenide.impl.ElementFinder.getWebElement(ElementFinder.java:56)\n\tat com.codeborne.selenide.impl.WebElementSource.checkCondition(WebElementSource.java:44)\n\tat com.codeborne.selenide.impl.WebElementSource.findAndAssertElementIsVisible(WebElementSource.java:72)\n\tat com.codeborne.selenide.commands.Click.execute(Click.java:16)\n\tat com.codeborne.selenide.commands.Click.execute(Click.java:12)\n\tat com.codeborne.selenide.commands.Commands.execute(Commands.java:144)\n\tat com.codeborne.selenide.impl.SelenideElementProxy.dispatchAndRetry(SelenideElementProxy.java:90)\n\tat com.codeborne.selenide.impl.SelenideElementProxy.invoke(SelenideElementProxy.java:65)\n\tat com.sun.proxy.$Proxy22.click(Unknown Source)\n\tat com.cowork.pages.CoWorkPage.click_on_logout_button(CoWorkPage.java:20)\n\tat com.cowork.stepdefinations.LoginTests.the_user_clicks_on_logout(LoginTests.java:83)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:104)\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:645)\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:851)\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1177)\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\n\tat org.testng.TestRunner.privateRun(TestRunner.java:756)\n\tat org.testng.TestRunner.run(TestRunner.java:610)\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:387)\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:382)\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:340)\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:289)\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1293)\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1218)\n\tat org.testng.TestNG.runSuites(TestNG.java:1133)\n\tat org.testng.TestNG.run(TestNG.java:1104)\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:283)\n\tat org.apache.maven.surefire.testng.TestNGXmlTestSuite.execute(TestNGXmlTestSuite.java:75)\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:120)\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:379)\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:340)\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:125)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:413)\n",
  "status": "failed"
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
  "duration": 4335469364,
  "error_message": "Element not found {By.xpath: //p[contains(.,\u0027SIGN\u0027)]}\nExpected: visible\nScreenshot: file:/Users/snehashish/shopkick_automation/CIService/GoodworkCoWork/build/reports/tests/1528715932396.1.png\nPage source: file:/Users/snehashish/shopkick_automation/CIService/GoodworkCoWork/build/reports/tests/1528715932396.1.html\nTimeout: 4 s.\nCaused by: NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//p[contains(.,\u0027SIGN\u0027)]\"}\n\tat com.codeborne.selenide.impl.WebElementSource.createElementNotFoundError(WebElementSource.java:31)\n\tat com.codeborne.selenide.impl.ElementFinder.createElementNotFoundError(ElementFinder.java:82)\n\tat com.codeborne.selenide.impl.WebElementSource.checkCondition(WebElementSource.java:59)\n\tat com.codeborne.selenide.commands.Should.should(Should.java:35)\n\tat com.codeborne.selenide.commands.Should.execute(Should.java:29)\n\tat com.codeborne.selenide.commands.Should.execute(Should.java:12)\n\tat com.codeborne.selenide.commands.Commands.execute(Commands.java:144)\n\tat com.codeborne.selenide.impl.SelenideElementProxy.dispatchAndRetry(SelenideElementProxy.java:90)\n\tat com.codeborne.selenide.impl.SelenideElementProxy.invoke(SelenideElementProxy.java:65)\n\tat com.sun.proxy.$Proxy22.shouldBe(Unknown Source)\n\tat com.cowork.pages.SignInPage.verify_the_presence_of_sign_in_option(SignInPage.java:84)\n\tat com.cowork.stepdefinations.LoginTests.user_is_in_login_screen(LoginTests.java:32)\n\tat ✽.Given User is in login screen(login.feature:13)\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//p[contains(.,\u0027SIGN\u0027)]\"}\n  (Session info: chrome\u003d66.0.3359.181)\n  (Driver info: chromedriver\u003d2.40.565386 (45a059dc425e08165f9a10324bd1380cc13ca363),platform\u003dMac OS X 10.13.4 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027GW-DK-031.local\u0027, ip: \u0027192.168.1.184\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.4\u0027, java.version: \u00279.0.4\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.40.565386 (45a059dc425e08..., userDataDir: /var/folders/l_/xzq6rfl10f9...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 66.0.3359.181, webStorageEnabled: true}\nSession ID: fa45ec9fa9108b9fd3599b34c439e102\n*** Element info: {Using\u003dxpath, value\u003d//p[contains(.,\u0027SIGN\u0027)]}\n\tat jdk.internal.reflect.GeneratedConstructorAccessor9.newInstance(Unknown Source)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:488)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\n\tat com.codeborne.selenide.impl.WebElementSelector.findElement(WebElementSelector.java:29)\n\tat com.codeborne.selenide.impl.ElementFinder.getWebElement(ElementFinder.java:56)\n\tat com.codeborne.selenide.impl.WebElementSource.checkCondition(WebElementSource.java:44)\n\tat com.codeborne.selenide.commands.Should.should(Should.java:35)\n\tat com.codeborne.selenide.commands.Should.execute(Should.java:29)\n\tat com.codeborne.selenide.commands.Should.execute(Should.java:12)\n\tat com.codeborne.selenide.commands.Commands.execute(Commands.java:144)\n\tat com.codeborne.selenide.impl.SelenideElementProxy.dispatchAndRetry(SelenideElementProxy.java:90)\n\tat com.codeborne.selenide.impl.SelenideElementProxy.invoke(SelenideElementProxy.java:65)\n\tat com.sun.proxy.$Proxy22.shouldBe(Unknown Source)\n\tat com.cowork.pages.SignInPage.verify_the_presence_of_sign_in_option(SignInPage.java:84)\n\tat com.cowork.stepdefinations.LoginTests.user_is_in_login_screen(LoginTests.java:32)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.runBackground(CucumberScenario.java:59)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:42)\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:104)\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:645)\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:851)\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1177)\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\n\tat org.testng.TestRunner.privateRun(TestRunner.java:756)\n\tat org.testng.TestRunner.run(TestRunner.java:610)\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:387)\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:382)\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:340)\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:289)\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1293)\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1218)\n\tat org.testng.TestNG.runSuites(TestNG.java:1133)\n\tat org.testng.TestNG.run(TestNG.java:1104)\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:283)\n\tat org.apache.maven.surefire.testng.TestNGXmlTestSuite.execute(TestNGXmlTestSuite.java:75)\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:120)\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:379)\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:340)\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:125)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:413)\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginTests.he_clicks_on_sign_in_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginTests.he_should_be_able_to_view_username_field()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginTests.he_should_be_able_to_view_the_password_field()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 32,
  "name": "Login with invalid credentials",
  "description": "",
  "id": "co-work-application;login-with-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 33,
  "name": "The user enters an un-registered phone_number",
  "rows": [
    {
      "cells": [
        "phone_number"
      ],
      "line": 34
    },
    {
      "cells": [
        "1241242342344"
      ],
      "line": 35
    },
    {
      "cells": [
        "1231423554441"
      ],
      "line": 36
    },
    {
      "cells": [
        "1233344441"
      ],
      "line": 37
    },
    {
      "cells": [
        "12323444441"
      ],
      "line": 38
    },
    {
      "cells": [
        "12345444441"
      ],
      "line": 39
    },
    {
      "cells": [
        "12541444441"
      ],
      "line": 40
    },
    {
      "cells": [
        "1441444441"
      ],
      "line": 41
    },
    {
      "cells": [
        "14431444441"
      ],
      "line": 42
    },
    {
      "cells": [
        "1431444441"
      ],
      "line": 43
    },
    {
      "cells": [
        "1331444441"
      ],
      "line": 44
    },
    {
      "cells": [
        "1131444441"
      ],
      "line": 45
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "He enters a valid password",
  "rows": [
    {
      "cells": [
        "password"
      ],
      "line": 49
    },
    {
      "cells": [
        "2124551222"
      ],
      "line": 50
    },
    {
      "cells": [
        "2124551212"
      ],
      "line": 51
    },
    {
      "cells": [
        "2124551211"
      ],
      "line": 52
    },
    {
      "cells": [
        "212455121asd"
      ],
      "line": 53
    },
    {
      "cells": [
        "2124551qweqw"
      ],
      "line": 54
    },
    {
      "cells": [
        "21245512qweee"
      ],
      "line": 55
    },
    {
      "cells": [
        "212455112212"
      ],
      "line": 56
    },
    {
      "cells": [
        "12334444"
      ],
      "line": 57
    },
    {
      "cells": [
        "21212212"
      ],
      "line": 58
    },
    {
      "cells": [
        "21212441212"
      ],
      "line": 59
    },
    {
      "cells": [
        "21244124212"
      ],
      "line": 60
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "He click on login in",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "The user should be prompted with error_message",
  "rows": [
    {
      "cells": [
        "error_message"
      ],
      "line": 63
    },
    {
      "cells": [
        "Invalid mobile number or password"
      ],
      "line": 64
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTests.the_user_enters_an_un_registered_phone_number(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginTests.he_enters_a_valid_password(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginTests.he_click_on_login_in()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginTests.the_user_should_be_prompted_with_error_message(DataTable)"
});
formatter.result({
  "status": "skipped"
});
});