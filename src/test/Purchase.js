const loginModule = require('../pages/login')
const logout = require('../pages/Logout')
const helper = require('../pages/Helper')
const { By } = require('selenium-webdriver');

describe('Purchase', function () {
    describe('Dashboard', async function () {
        before(async function () {
            let email = process.env.EMAIL_ADMIN
            let pass = process.env.PASS_ADMIN
            await loginModule.Login(email, pass)
        })
        after(async function () {
            setTimeout(async function () {
                await driver.quit()
            }, 3000)
        })
        it('Membuat Purchase for Quotations', async function () {
            await helper.menu('Purchase')
            await helper.headerMenu('Orders', 'Requests for Quotation')
            for (let i = 24; i <= 40; i++) {
                await driver.findElement(By.xpath(`//tr[${i + 1}]/td[@name='name']`)).click(); // klik berdasarkan urutan ke-i
                await driver.sleep(1000)
                await driver.findElement(By.xpath("//button[@name='button_confirm']")).click()
                await driver.sleep(1000)
                await driver.findElement(By.xpath("//button[@name='action_create_receipt']")).click()
                await driver.sleep(1000)
                await driver.findElement(By.xpath("//button[@name='button_validate']")).click()
                await driver.sleep(1000)
                await driver.findElement(By.xpath("//a[text()='Requests for Quotation']")).click()
                await driver.sleep(1000)
            }

            // BUAT BARU REQUEST FOR QUOTATION
            // await helper.clickButtonNew()
            // await driver.findElement(By.xpath("//input[@id='partner_id_0']")).sendKeys("Testing Vendor", Key.ENTER) // input vendor
            // await driver.findElement(By.xpath("//input[@id='destination_address_id_0']")).sendKeys("My Company", Key.ENTER) // input destination address
            // await driver.findElement(By.xpath("//a[text()='Add a product']")).click()
            // await driver.sleep(1000)
            // await driver.findElement(By.xpath("//input[@placeholder='Search a product']")).sendKeys("106-FWH-LP", Key.ENTER)
            // await driver.sleep(1000)
            // await driver.findElement(By.xpath("//button[@name='button_confirm']")).click()
            // await driver.sleep(1000)
            // await driver.findElement(By.xpath("//button[@name='action_create_receipt']")).click()
            // await driver.sleep(1000)
            // await driver.findElement(By.xpath("//button[@name='button_validate']")).click()
        })
    })
})