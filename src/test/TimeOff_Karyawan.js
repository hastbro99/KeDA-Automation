const loginModule = require('../pages/login')
const logout = require('../pages/Logout')

describe('Time Off', function () {
    describe('My Time', function () {
        describe('Dashboard', async function () {
            before(async function () {
                let email = process.env.EMAIL_ADMIN
                let pass = process.env.PASS_TESTING
                await loginModule.Login(email, pass)
            })
            after(async function () {
                setTimeout(async function () {
                    await driver.quit()
                }, 3000)
            })
            it('My Time - Dashboard: Create paid time off request', async function () {
       
            })
            it('My Time - Dashboard: Create cuti gift request', async function () {
       
            })
            it('Logout', async function () {
                await logout.Logout()
            })
            it('Login Karyawan 2', async function () {
                let email = process.env.EMAIL_EMPLOYEE2
                let pass = process.env.PASS_TESTING
                await loginModule.Login(email, pass)
            })
            it('My Time - Dashboard: Create unpaid leave request', async function () {
       
            })
        })
    })
})