Feature: Co-work Application
As a user I should be able to open the application
and view the contents. The application should accept
phone number as username and password. 
On the home page the application needs to have different tabs
such as home, about us, terms and condition and contact us.
These should be links and while clicking should open up the contents.
The login page should also consist of remember me option and that
should be clickable like a check box. 


Background: User opens the browser
Given User is in login screen
When He clicks on sign in button
Then He should be able to view username field
And He should be able to view the password field

Scenario Outline: Login with valid credentials
When The user enters a registered <phone number>
And He enters a <password> related to the phone number
And Click on sign in
Then He should be able to view the Home page of the application with title <title of home page>
When The user clicks on logout


Examples:
|phone number|password|title of home page|
|8892518970|2132346|GoodWorkCoWorks|



Scenario: Login with invalid credentials
When The user enters an un-registered phone_number
|phone_number|
|1241242342344|
|1231423554441|
|1233344441|
|12323444441|
|12345444441|
|12541444441|
|1441444441|
|14431444441|
|1431444441|
|1331444441|
|1131444441|


And He enters a valid password
|password|
|2124551222|
|2124551212|
|2124551211|
|212455121asd|
|2124551qweqw|
|21245512qweee|
|212455112212|
|12334444|
|21212212|
|21212441212|
|21244124212|
And He click on login in
Then The user should be prompted with error_message
|error_message|
|Invalid mobile number or password|

