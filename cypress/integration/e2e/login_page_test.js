/// <reference types="cypress" />
import {checkEmptyFields, openLoginPage, passwordFieldEmpty, successfullCredentials, usernameFieldEmpty} from '../../functions/login_func'

describe('tests for login page',() => {
    it('check if login page is opened',() => {
        openLoginPage()
    })

    it('entering credentials',() => {
        successfullCredentials()
    })

    it('empty fields',() => {
        checkEmptyFields()
    })

    it('empty password field',() => {
        passwordFieldEmpty()
    })
    it('empty username field',() =>{
        usernameFieldEmpty()
    })
})