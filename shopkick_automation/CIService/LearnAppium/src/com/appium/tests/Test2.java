package com.appium.tests;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.testng.Assert;
import org.testng.Reporter;
import org.testng.annotations.Test;

import com.appium.generic.BaseTest;
import com.appium.generic.GenericUtility;
import com.thoughtworks.selenium.condition.ConditionRunner.Context;

import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDeviceActionShortcuts;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.android.AndroidKeyCode;
import io.appium.java_client.android.AndroidKeyMetastate;

public class Test2 extends BaseTest
{
	@Test(enabled = false)
	public void test_webview_for_hello_user()
	{
		driver.findElementByAccessibilityId("buttonStartWebviewCD").click();
		GenericUtility.sleep(4000);
		WebElement element=driver.findElementByAccessibilityId("Enter your name here!");
		String el=driver.findElementByAccessibilityId("Enter your name here!").getText();
		element.click();
		
		((AndroidDeviceActionShortcuts) driver).pressKeyCode(AndroidKeyCode.ACTION_DOWN,AndroidKeyMetastate.META_SHIFT_ON);
		for(int i=0;i<25;i++)
		{
		((AndroidDeviceActionShortcuts) driver).pressKeyCode(AndroidKeyCode.BACKSPACE,AndroidKeyMetastate.META_SHIFT_ON);
		}
		
		((AndroidDeviceActionShortcuts) driver).pressKeyCode(AndroidKeyCode.ACTION_UP,AndroidKeyMetastate.META_SHIFT_ON);
		
		
		driver.getKeyboard().sendKeys("Snehashish");
		GenericUtility.sleep(6000);
		driver.findElementByAccessibilityId("Volvo").click();
		List<MobileElement> elements=driver.findElementsByXPath("//android.widget.CheckedTextView[@resource-id='android:id/text1']");
		for(MobileElement ele:elements)
		{
			String carNames=ele.getText();
			if(carNames.contains("Audi"))
			{
				ele.click();
			}
					
		}
		driver.findElementByXPath("//android.widget.Button[@content-desc='Send me your name!']").click();
		GenericUtility.sleep(5000);
		Set<String> context = driver.getContextHandles();
		for(String con:context)
		{
			System.out.println("CurrentContext: "+con);
		}
		driver.context("WEBVIEW_io.selendroid.testapp");
		String body = driver.findElementByXPath("//body[contains(.,'Sne')]").getText();
		System.out.println(body);
		driver.context("NATIVE_APP");
		
		
		
		/*List<MobileElement>details = driver.findElementsByClassName("android.view.View");
		for(MobileElement detail:details)
		{
			System.out.println(detail.getText());
			if(detail.getText().contains("Snehashish") && detail.getText().equalsIgnoreCase("audi"))
			{
				Reporter.log("Test Case Passed");
			}
			else
			{
				Assert.fail();
			}
		}
		GenericUtility.sleep(5000);*/
	}
	
	@Test(enabled = false)
	public void test_webview_for_html()
	{
		System.out.println("Context: "+driver.getContext());
		driver.findElementByAccessibilityId("buttonStartWebviewCD").click();
		GenericUtility.sleep(4000);
		
		driver.findElementById("io.selendroid.testapp:id/spinner_webdriver_test_data").click();
		System.out.println("Context: "+driver.getContext());
		List<MobileElement> list = driver.findElementsByXPath("//android.widget.TextView[@resource-id='android:id/text1']");
		
		for(MobileElement action:list)
		{
			String elementAction= action.getText();
			System.out.println(elementAction);
			if(elementAction.equalsIgnoreCase("formPage"))
			{
				action.click();
			}
		}
		
	}
	
	@Test(enabled = true)
	public void test_user_registration()
	{
		driver.findElementByAccessibilityId("startUserRegistrationCD").click();
		GenericUtility.sleep(2000);
		driver.findElementById("io.selendroid.testapp:id/inputUsername").sendKeys("Snehashish");
		GenericUtility.sleep(2000);
		driver.findElementByXPath("//android.widget.EditText[@content-desc='email of the customer']").sendKeys("Snehashish.chakraborty@goodworklabs.com");
		GenericUtility.sleep(2000);
		driver.findElementById("io.selendroid.testapp:id/inputPassword").sendKeys("1234567890");
		GenericUtility.sleep(2000);
		if(!driver.findElementById("io.selendroid.testapp:id/inputName").isDisplayed())
		{	
		GenericUtility.manual_vertical_swipe(619, 890, 630, -590);
		GenericUtility.sleep(2000);
		}
		else
		{
		GenericUtility.manual_vertical_swipe(503, 1018, 0, -534);
		GenericUtility.sleep(2000);
		driver.findElementById("io.selendroid.testapp:id/inputName").clear();
		driver.findElementById("io.selendroid.testapp:id/inputName").sendKeys("Snehashish Chakraborty");
		GenericUtility.sleep(2000);
		}
		driver.findElementById("io.selendroid.testapp:id/input_preferedProgrammingLanguage").click();
		List<MobileElement> list_of_languages = driver.findElementsByXPath("//android.widget.CheckedTextView[@resource-id='android:id/text1']");
		for(MobileElement language:list_of_languages)
		{
			String lang= language.getText();
			if(lang.contains("PHP"))
			{
				language.click();
				break;
			}
		}
		
		GenericUtility.sleep(8000);
		driver.findElementByXPath("//android.widget.CheckBox[@resource-id='io.selendroid.testapp:id/input_adds']").click();
		driver.findElementByXPath("//android.widget.CheckBox[@resource-id='io.selendroid.testapp:id/input_adds']").tap(1, 2);
		GenericUtility.sleep(2000);
		driver.findElementByXPath("//android.widget.Button[@text='Register User (verify)']").click();
		GenericUtility.sleep(2000);
		

		
	}
}



