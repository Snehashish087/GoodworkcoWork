package com.cowork.pages;
import static com.codeborne.selenide.Selenide.$;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.testng.Reporter;

import com.codeborne.selenide.SelenideElement;
import com.cowork.generic.BasePage;

import static com.codeborne.selenide.Condition.*;


public class LoginPage extends BasePage
{
	public LoginPage(WebDriver driver) 
	{
		super(driver);
	}
	SelenideElement phoneNo = $("input[placeholder='Phone']");
	SelenideElement password = $("input[type='password']");
	SelenideElement rememberMeCheckBox = $(By.xpath("//input[@type='checkbox']"));
	SelenideElement rememberMeLabel = $(".checkbox>label");
	SelenideElement signInButton = $(By.xpath("//button[contains(.,'Sign')]"));
	SelenideElement errorMessage = $(".MessageAlert__msg___2vb1l.fLeft");
	
	
	
	public void verify_the_visibility_of_phone_field()
	{
		try
		{
		phoneNo.shouldBe(visible);
		Reporter.log("Phone no. field is visible",true);
		}
		catch(Exception exp)
		{
			Reporter.log("Phone field is not visible");
		}
		
	}
	public void verify_the_visibility_of_password_field()
	{
		try
		{
		password.shouldBe(visible);
		Reporter.log("Password field is visible",true);
		}
		catch(Exception exp)
		{
			Reporter.log("Password field is not visible");
		}
		
	}
	public void enter_phone_number(String user_phone)
	{
		phoneNo.setValue(user_phone);
	}
	public void enter_password(String user_password)
	{
		password.setValue(user_password);
	}
	public void verify_check_box_visibility()
	{
		BasePage.verifyElement(rememberMeCheckBox);
	}
	public void verify_remember_me_label_visibility()
	{
		BasePage.verifyElement(rememberMeLabel);
	}
	public void verify_checkbox_clickability()
	{
		BasePage.verify_check_box_clickability(rememberMeCheckBox);
	}
	public void click_on_sign_in()
	{
		signInButton.shouldBe(visible).click();
	}
	public void verify_error_message(String error_message)
	{
		
		try
		{
			String alertMsg=driver.switchTo().alert().getText();
			Reporter.log("Alert Message: "+alertMsg,true);
		}
		
		
		catch(Exception exp)
		{
			Reporter.log("Error message cound not be detected",true);
		}
		
	}
	
	
	
	
	
			
		
}
