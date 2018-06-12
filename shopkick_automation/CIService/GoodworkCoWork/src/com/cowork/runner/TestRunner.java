package com.cowork.runner;

import static com.codeborne.selenide.Selenide.*;

import java.io.File;
import java.io.IOException;
import java.util.Properties;

import javax.activation.DataHandler;
import javax.activation.DataSource;
import javax.activation.FileDataSource;
import javax.mail.BodyPart;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Multipart;
import javax.mail.SendFailedException;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;

import org.apache.commons.io.FileUtils;
import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.testng.ITestResult;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.AfterSuite;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.BeforeSuite;

import com.cowork.generic.BaseTest;
import com.cucumber.listener.Reporter;
import com.relevantcodes.extentreports.ExtentReports;
import com.relevantcodes.extentreports.ExtentTest;
import com.relevantcodes.extentreports.LogStatus;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;
import cucumber.api.testng.TestNGCucumberRunner;


@CucumberOptions(features = "features-repository",
				 glue = "com.cowork.stepdefinations",
				 plugin = {"pretty","html:reports/cucumber-html-report",
						 "com.cucumber.listener.ExtentCucumberFormatter:/Users/snehashish/shopkick_automation/CIService/GoodworkCoWork/reports/cucumber-extent-report/cucumberExtentReport.html"},
				 dryRun=false,//dry run = maps the feature file with the implementation file
				 monochrome = true,
				 strict = false)
public class TestRunner extends AbstractTestNGCucumberTests
{
	public static ExtentReports extent;
	public static ExtentTest logger;
	public static WebDriver driver;
	
	private TestNGCucumberRunner testNGCucumberRunner;
	@BeforeClass
	public void precondition()
	{
		Logger logger = Logger.getLogger("Pre-Condition");
		PropertyConfigurator.configure("/Users/snehashish/shopkick_automation/CIService/GoodworkCoWork/log-config/CucumberLogger");
		this.testNGCucumberRunner = new TestNGCucumberRunner(this.getClass());
	}
	@AfterClass
	public static void reportSetup()
	{
		Reporter.loadXMLConfig(new File("/Users/snehashish/shopkick_automation/CIService/GoodworkCoWork/extent-config/extent-config.xml"));
		Reporter.setSystemInfo("Username",System.getProperty("user.name"));
		Reporter.setSystemInfo("Time Zone", System.getProperty("user.timezone"));
		Reporter.setSystemInfo("Host Name","Co-work");
		Reporter.setSystemInfo("Environment","UI Automation Testing using Cucumber");
		Reporter.setSystemInfo("User Name","Snehashish Chakraborty");
		
		/*Reporter.setTestRunnerOutput("Cucumber JUnit Test Runner");
		Reporter.setTestRunnerOutput("log 1");
		Reporter.setTestRunnerOutput("<pre>Log 2</pre>");
		Reporter.setTestRunnerOutput("<h2>heading 2 </h2>");
		Reporter.addStepLog("afafsa");
		*/
		
		try 
		{
			TestRunner.sendMail();
		} 
		catch (MessagingException e) 
		{
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
	}


	 public static void sendMail() throws MessagingException 
	 {
		 	Logger logger = Logger.getLogger("sendMail");
	        String host = "smtp.gmail.com";
	        String Password = "1ep10cs087";
	        String from = "snehashish.chakraborty@goodworklabs.com";
	     
	        
	  
	  
	        String cucumberExtentReport = "/Users/snehashish/shopkick_automation/CIService/GoodworkCoWork/reports/cucumber-extent-report/cucumberExtentReport.html";
	        String cucumberHtmlReport = "/Users/snehashish/shopkick_automation/CIService/GoodworkCoWork/reports/cucumber-extent-report/index.html";
	        String cucumberLoggerReport = "/Users/snehashish/shopkick_automation/CIService/GoodworkCoWork/log/UI/application.html";
	        
	        // Get system properties
	        Properties props = System.getProperties();
	        props.put("mail.smtp.host", host);
	        props.put("mail.smtps.auth", "true");
	        props.put("mail.smtp.starttls.enable", "true");
	        props.put("mail.smtp.port", "587");
	        Session session = Session.getInstance(props, null);

	        MimeMessage message = new MimeMessage(session);

	        message.setFrom(new InternetAddress(from));
	        message.addRecipients(Message.RecipientType.TO, "snehashish.chakraborty77@gmail.com");
	        
	        //***Use the below code to add the recepient and CC ***// 
	       
	         message.addRecipients(Message.RecipientType.TO, "kavya.anand@goodworklabs.com");
	        message.addRecipients(Message.RecipientType.TO, "ramesh.babu@goodworklabs.com ");
	        message.addRecipients(Message.RecipientType.TO, "aayushi.jain@goodworklabs.com");
	        message.addRecipients(Message.RecipientType.CC, "snehashish.chakraborty@goodworklabs.com");
	        //***----------------------------------------------***//

	        message.setSubject("RE: Test Report for the current run");

	        BodyPart messageBodyPart = new MimeBodyPart();

	        messageBodyPart.setText("Hi,"
	        		+"\n\n The current attachment contains the report for the current run for the User Interface script. Please have a look into the report for passed and failed test scripts / cases."
	        		+ "\n\n This is an auto-generated mail.");
	        Multipart multipart = new MimeMultipart();
	        multipart.addBodyPart(messageBodyPart);
	        messageBodyPart = new MimeBodyPart();
	        TestRunner.addAttachment(multipart, cucumberExtentReport);
		    TestRunner.addAttachment(multipart, cucumberLoggerReport);
		    TestRunner.addAttachment(multipart, cucumberHtmlReport);
		       
	        
	        
	        
	        
	        
	        
	        

	        message.setContent(multipart);

	        try {
	            Transport tr = session.getTransport("smtps");
	            tr.connect(host, from, Password);
	            tr.sendMessage(message, message.getAllRecipients());
	            logger.info("Mail sent successfully");
	           
	            
	            tr.close();

	        } catch (SendFailedException sfe) 
	        {
	        	logger.info("Mail could not be dispatched. Please check the mail trace or the recipients mail ID");
	        }
	    }
	 
	 public static void addAttachment(Multipart multipart, String filename)
	 {
		 	DataSource source = new FileDataSource(filename);
		    BodyPart messageBodyPart = new MimeBodyPart();        
		    try 
		    {
				messageBodyPart.setDataHandler(new DataHandler(source));
			} 
		    catch (MessagingException e) 
		    {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		    try 
		    {
				messageBodyPart.setFileName(filename);
			}
		    catch (MessagingException e) 
		    {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		    try
		    {
				multipart.addBodyPart(messageBodyPart);
			} 
		    catch (MessagingException e) 
		    {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
	 }
	 
	 

		


		public static String getScreenhot(WebDriver driver, String screenshotName) throws Exception {

			TakesScreenshot ts = (TakesScreenshot) driver;
			File source = ts.getScreenshotAs(OutputType.FILE);
			//after execution, you could see a folder "FailedTestsScreenshots" under src folder
			String destination = System.getProperty("user.dir")+screenshotName+".png";
			File finalDestination = new File(destination);
			FileUtils.copyFile(source, finalDestination);
			return destination;
		}
		@BeforeMethod
		public void preCondition()
		{	
			Logger logger = Logger.getLogger("Pre-Condition");
			PropertyConfigurator.configure("./log-config/CucumberLogger");

			try
			{
				logger.info("Open the Browser");
				System.setProperty("selenide.browser", "chrome"); 
				logger.info("Navigate to the website");
				open("https://app.goodworkscowork.com/");
				
			}
			catch(Exception e)
			{
				logger.info("Cannot open the chrome driver. Message:"+e.getMessage());
			}
			
		}
		
		
	 
	 
	 
}
