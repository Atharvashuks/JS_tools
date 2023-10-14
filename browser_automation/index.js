const { Builder, By, Key, Capabilities } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const { Options } = require("selenium-webdriver/chrome");

const capabilities = Capabilities.chrome();
capabilities.set("acceptSslCerts", true);
capabilities.set("acceptInsecureCerts", true);

const chromeOptions = new chrome.Options();
chromeOptions.addArguments("--ignore-certificate-errors");

const driver = new Builder()
  .forBrowser("chrome")
  .withCapabilities(capabilities)
  .setChromeOptions(chromeOptions)
  .build();

async function browserAutomation() {
  try {
    await driver.get("https://facebook.com/"); // give ur websites url
    await driver
      .findElement(By.xpath('//input[@type="text"]'))
      .sendKeys("Java");
    // give your testing code
    await driver
      .findElement(By.className("inputtext _55r1 _6luy _9npi"))
      .sendKeys("testing");

    await driver.findElement(By.name("login")).click();
  } catch (error) {
    console.log(error);
  }
  //   finally {
  //     driver.close();
  //   }
}

browserAutomation();
