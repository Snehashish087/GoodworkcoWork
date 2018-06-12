package com.cowork.stepdefinations;

import static com.codeborne.selenide.Condition.attribute;
import static com.codeborne.selenide.Selenide.$;
import static com.codeborne.selenide.Selenide.open;

import java.util.Map;

import org.testng.Reporter;

import com.cowork.generic.BasePage;
import com.cowork.generic.BaseTest;
import com.cowork.pages.CoWorkPage;
import com.cowork.pages.LoginPage;
import com.cowork.pages.SignInPage;

import com.relevantcodes.extentreports.LogStatus;

import cucumber.api.DataTable;
import cucumber.api.java.en.*;

public class LoginTests
{
	//Objects
	LoginPage login = new LoginPage(null);
	SignInPage signIn = new SignInPage(null);
	CoWorkPage coWorkHome = new CoWorkPage(null);

	@Given("^User is in login screen$")
	public void user_is_in_login_screen() throws Throwable 
	{
		signIn.verify_the_presence_of_sign_in_option();
		signIn.verify_the_presence_of_explore_as_guest_button();
	}

	@When("^He clicks on sign in button$")
	public void he_clicks_on_sign_in_button() throws Throwable 
	{
		signIn.click_on_sign_in_button();
	}

	@Then("^He should be able to view username field$")
	public void he_should_be_able_to_view_username_field() throws Throwable 
	{
		login.verify_the_visibility_of_phone_field();
	}

	@And("^He should be able to view the password field$")
	public void he_should_be_able_to_view_the_password_field() throws Throwable 
	{
		login.verify_the_visibility_of_password_field();
	}

	@When("^The user enters a registered (.*)$")
	public void the_user_enters_a_registered_phone_number(String phone_number) throws Throwable 
	{
		login.enter_phone_number(phone_number);
	
	}

	@And("^He enters a (.*) related to the phone number$")
	public void he_enters_a_password_related_to_the_phone_number(String user_password) throws Throwable 
	{
		login.enter_password(user_password);
	}

	@And("^Click on sign in$")
	public void click_on_sign_in() throws Throwable 
	{
		login.click_on_sign_in();
	}

	@Then("^He should be able to view the Home page of the application with title (.*)$")
	public void he_should_be_able_to_view_the_Home_page_of_the_application(String expectedTitle) throws Throwable 
	{
		Thread.sleep(7000);
		//BasePage.verifyTitle("GoodWorkCoWorks");
		BasePage.verifyTitle(expectedTitle);
	}
	@When("^The user clicks on logout$")
	public void the_user_clicks_on_logout() throws Throwable 
	{
		coWorkHome.click_on_logout_button();
	   
	}



	
	
	
	
	@When("^The user enters an un-registered phone_number$")
	public void the_user_enters_an_un_registered_phone_number(DataTable phoneNumber) throws Throwable {
	    for(Map<String, String> data:phoneNumber.asMaps(String.class, String.class))
	    {
	    login.enter_phone_number(data.get("phone_number"));
	    }
	    
	}

	@When("^He enters a valid password$")
	public void he_enters_a_valid_password(DataTable password) throws Throwable 
	{	
		for(Map<String,String>data:password.asMaps(String.class, String.class))
		{
			login.enter_password(data.get("password"));
		}
	}

	@When("^He click on login in$")
	public void he_click_on_login_in() throws Throwable 
	{
		login.click_on_sign_in();
	}

	@Then("^The user should be prompted with error_message$")
	public void the_user_should_be_prompted_with_error_message(DataTable error_msg) throws Throwable 
	{
		for(Map<String,String>data:error_msg.asMaps(String.class, String.class))
		{
			login.verify_error_message(data.get("error_message"));
		}
	    
	}
	
	
	
	
	
	
}
