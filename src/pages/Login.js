const { Builder, By } = require("selenium-webdriver")

driver = new Builder().forBrowser('firefox').setFirefoxOptions().build()
async function login(email, pass) {
    let url = 'https://uptech-dev.keda-tech.com/'

    await driver.get(url)
    await driver.manage().window().maximize()
    await driver.sleep(2000);
    await driver.findElement(By.name('login')).sendKeys(email);
    await driver.findElement(By.name('password')).sendKeys(pass);
    await driver.findElement(By.xpath("//button[contains(text(),'Log in')]")).click();
    await driver.sleep(2000);
}

module.exports = {
    Login: login
};