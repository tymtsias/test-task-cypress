/// <reference types="cypress" />
import {openLoginPage, successfullCredentials} from '../../functions/login_func'

describe('tests for login page',() => {
    it('check if login page is opened',() => {
        openLoginPage()
    })

    it('entering credentials',() => {
        successfullCredentials()
    })
})