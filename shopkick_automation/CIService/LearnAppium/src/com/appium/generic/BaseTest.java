package com.appium.generic;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;

import io.appium.java_client.AppiumDriver;
import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.android.AndroidKeyCode;
import io.appium.java_client.service.local.AppiumDriverLocalService;

public class BaseTest implements AutoConst
{
	
	public static AppiumDriver<MobileElement> driver;
	@BeforeMethod
	public void setup() throws MalformedURLException
	{
		System.out.println("Session is creating");
		System.out.println("Service got started.");
		
		
		DesiredCapabilities cap = new DesiredCapabilities();
		cap.setCapability("platformName", platformName);
		cap.setCapability("deviceName", deviceName);
		cap.setCapability("app", appPath);
		
		//cap.setCapability("browserName", "Chrome");
		driver = new AndroidDriver<MobileElement>(new URL("http://127.0.0.1:4723/wd/hub"), cap);
		WebDriverWait wait=new WebDriverWait(driver,40);
	
	}
	
	@AfterMethod
	public void tearDown()
	{
		driver.quit();
		
	}

}
