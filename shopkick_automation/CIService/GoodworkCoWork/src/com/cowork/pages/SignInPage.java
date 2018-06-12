package com.cowork.pages;


import static com.codeborne.selenide.Selenide.$;
import static com.codeborne.selenide.Condition.*;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.testng.Reporter;

import com.codeborne.selenide.SelenideElement;
import com.cowork.generic.BasePage;
import com.cowork.generic.GenericUtility;
import com.relevantcodes.extentreports.LogStatus;

public class SignInPage extends BasePage
{
	public SignInPage(WebDriver driver) 
	{
		super(driver);
	}
	
	
	
	SelenideElement homeLink = $(By.xpath("//a[.='Home']"));
	SelenideElement aboutUsLink = $(By.xpath("//a[.='About Us']"));
	SelenideElement termsConditionLink = $(By.xpath("//a[contains(.,'Terms & Conditions')]"));
	SelenideElement contactUsLink = $(By.xpath("//a[.='Contact Us']"));
	SelenideElement exploreAsGuest = $(By.xpath("//a[contains(.,'EXPLORE')]"));
	SelenideElement signInButton = $(By.xpath("//p[contains(.,'SIGN')]"));
	
	
			
	public void click_on_sign_in_button()
	{
		signInButton.shouldBe(visible).click();
	}
	public void verify_the_presence_of_home_page_link()
	{
		BasePage.verifyElement(homeLink);
	}
	public void verify_the_presence_of_about_us_link()
	{
		BasePage.verifyElement(aboutUsLink);
	}
	public void verify_the_presence_of_terms_and_condition_link()
	{
		BasePage.verifyElement(termsConditionLink);
	}
	public void verify_the_presence_of_contact_us_link()
	{
		BasePage.verifyElement(contactUsLink);
	}
	public void verify_clicking_on_home_page_link()
	{
		homeLink.shouldBe(visible).click();
	}
	public void verify_clicking_on_about_us_link()
	{
		aboutUsLink.shouldBe(visible).click();
	}
	public void verify_clicking_on_terms_and_condition_link()
	{
		termsConditionLink.shouldBe(visible).click();
	}
	public void verify_clicking_on_contact_us_link()
	{
		contactUsLink.shouldBe(visible).click();
	}
	public void verify_the_presence_of_explore_as_guest_button()
	{
		try
		{
		exploreAsGuest.shouldBe(visible);
		}
		catch(Exception exp)
		{
			Reporter.log("Presence of Explore as a Guest Element not visible",true);
		}
	}
	public void verify_the_presence_of_sign_in_option()
	{
		try
		{
			signInButton.shouldBe(visible);
			Reporter.log("Sign in button is visible",true);
		}
		catch(Exception exp)
		{
			Reporter.log("Presence of sign in button not visible",true);
		}
	}
	
}
