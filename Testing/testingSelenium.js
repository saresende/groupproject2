

var selenium = require("selenium");

chrome = require('selenium-webdriver/chrome'),
firefox = require('selenium-webdriver/firefox');

var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build();

driver.get('localhost:4000');
driver.findElement(By.id('#btnSignin')).click();
driver.findElement(By.name('signinDone1')).sendKeys('zubaer');
driver.findElement(By.name('signinDone2')).sendKeys('password');
driver.findElement(By.name('signinDone2')).click();

driver.wait(until.titleIs('Climate Now!!'), 1000);
driver.quit();

