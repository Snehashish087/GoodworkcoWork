package com.cowork.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import com.codeborne.selenide.SelenideElement;
import com.cowork.generic.BasePage;

import static com.codeborne.selenide.Selenide.$;

public class CoWorkPage extends BasePage
{
	public CoWorkPage(WebDriver driver) 
	{
		super(driver);
	}
	SelenideElement logoutButton=$(By.xpath("//a[@title='Logout']"));
	public void click_on_logout_button()
	{
		logoutButton.click();
	}

}
