package com.cowork.generic;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import static com.codeborne.selenide.Condition.*;
import org.apache.log4j.Logger;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;
import org.testng.Reporter;
import static com.codeborne.selenide.Selenide.$;
import static com.codeborne.selenide.Condition.*;

import com.codeborne.selenide.SelenideElement;
public class BasePage 
{
	
public static WebDriver driver;
	
	public BasePage(WebDriver driver) 
	{
		this.driver=driver;
	}
	
	public static void waitTillVisibilityOfElement(WebElement element)
	{
		WebDriverWait wait = new WebDriverWait(driver, 30);
		wait.until(ExpectedConditions.visibilityOf(element));
		
	}
	//To verify the title of the web pages
	public static void verifyTitle(String expectedTitle)  
	{
		
		try
		{
		$("title").shouldHave(attribute("text", expectedTitle));
		Reporter.log("Actual title matches our expected title.",true);
		}
		catch(Exception exp)
		{
			Reporter.log("Acual title is not matching our expected title",true);
		}
	}
	
	//To verify the element's presence in the webpage
	public static void verifyElement(SelenideElement element)
	{
		try
		{
		element.shouldBe(visible);
		Reporter.log("Element is visible",true);
		}
		catch(NoSuchElementException exp)
		{
			Reporter.log("Element not present",true);
		}
	}
	public static void verify_check_box_clickability(SelenideElement element)
	{
		try
		{
			element.shouldBe(enabled).click();
			Reporter.log("Element is clickable",true);
		}
		catch(Exception exp)
		{
			Reporter.log("Element is not clickable",true);
		}
	}
	
	//Check for the equality of two elements
	public static void verifyTwoElements(String expected,String actual)
	{
		if(actual.contains(expected))
		{
			Reporter.log("The actual output which is "+actual+" matches our expected output which is "+expected,true);
		}
		else
		{
			Reporter.log("The actual and expected are not matching with actual output as "+actual+" and expected as "+expected,true);
			Assert.fail();
		}
	}
	
	
		

}
