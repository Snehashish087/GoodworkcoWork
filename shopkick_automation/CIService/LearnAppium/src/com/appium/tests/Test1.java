package com.appium.tests;
import org.openqa.selenium.Keys;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;
import org.testng.Reporter;
import org.testng.annotations.Test;
import com.appium.generic.BaseTest;
import com.appium.generic.GenericUtility;

import io.appium.java_client.MobileElement;
import io.appium.java_client.TouchAction;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.android.AndroidKeyCode;
import io.appium.java_client.remote.MobileCapabilityType;


public class Test1 extends BaseTest 
{
	@Test(enabled = true)
	public void test_mobile()
	{
	driver.findElementByAccessibilityId("Accessibility").click();
	String text = driver.findElementByAccessibilityId("Accessibility Node Provider").getText();
	if(text.equalsIgnoreCase("Accessibility Node Provider"))
	{
		Reporter.log("Test Case Passed",true);
	}
	else
	{
		Reporter.log("Test Case failed",true);
	}
	
	}
	@Test (enabled = true)
	public void test_swipe_horizontal() throws InterruptedException
	{
		int count=1;
		driver.findElementByAccessibilityId("Views").click();
		Thread.sleep(2000);
		GenericUtility.manual_vertical_swipe(450,1500,450,-500);
		Thread.sleep(3000);
		driver.findElementByAccessibilityId("Tabs").click();
		String text = driver.findElementByAccessibilityId("1. Content By Id").getText();
		if(text.equalsIgnoreCase("1. Content By Id"))
		{
			System.out.println("Passed");
		}
		else
		{
			System.out.println("Failed");
		}
		
	}
	@Test(enabled = true)
	public void test_swipe_vertical() throws InterruptedException
	{
		driver.findElementByAccessibilityId("Views").click();
		Thread.sleep(2000);
		GenericUtility.manual_vertical_swipe(450,1500,450,-500);
		Thread.sleep(3000);
		driver.findElementByAccessibilityId("Tabs").click();
		driver.findElementByAccessibilityId("5. Scrollable").click();
		Thread.sleep(3000);
		boolean flag=false;
		
		for(int i=1;i<=10;i++)
		{
			try 
				{
					boolean result=driver.findElementByXPath("//*[@text='TAB 28']").isDisplayed();
					result = true;
					break;
				}
			catch(Exception e)
				{
					GenericUtility.manual_vertical_swipe(975, 337, -743, 4);
				}
		}
		
		
		driver.findElementByXPath("//*[@text='TAB 28']").click();
		String text = driver.findElementByXPath("//*[@text='Content for tab with tag Tab 28']").getText();
		if(text.equalsIgnoreCase("Content for tab with tag Tab 28"))
		{
			System.out.println("TC Passed");
		}
		else
		{
			System.out.println("TC Failed");
		}
	}
	
	@Test(enabled = false)
	public void test_web_view() throws InterruptedException
	{
		driver.findElementByAccessibilityId("Views").click();
		Thread.sleep(2000);
		GenericUtility.manual_vertical_swipe(450,1500,450,-500);
		Thread.sleep(3000);
		driver.findElementByAccessibilityId("WebView").click();
		GenericUtility.switchContext("WebView");
		String webViewText = driver.findElementByXPath("//a[text()='Hello World! - 1']").getText();
		System.out.println(webViewText);
		
		
	}
	
	@Test(enabled = true)
	public void test_auto_text()
	{
		
		driver.findElementByAccessibilityId("Views").click();
		driver.findElementByAccessibilityId("Auto Complete").click();
		driver.findElementByAccessibilityId("1. Screen Top").click();
		GenericUtility.sleep(4000);
		MobileElement element = driver.findElementById("io.appium.android.apis:id/edit");
		element.sendKeys("India");
		int x_axis=element.getLocation().getX();
		int y_axis=element.getLocation().getY();
	
		TouchAction action = new TouchAction(driver).tap(x_axis+60, y_axis+400).release();
		action.perform();
		GenericUtility.screenRotationLandScape();
		GenericUtility.sleep(5000);
	}
}


	

