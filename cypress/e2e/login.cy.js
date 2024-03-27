
describe('автотесты на авторизацию', function () {
    
    it('Правильный логин и пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').should('be.enabled');
        cy.get('#loginButton').click();

        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
       
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })

    
     it('Правильный логин и неправильный пароль', function () {
        cy.visit('https://login.qa.studio/');
       
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#loginButton').should('be.disabled');
        
        cy.get('#pass').type('iLoveqastudio11');
        cy.get('#loginButton').should('be.enabled');
        cy.get('#loginButton').click();

        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })



     it('Неправильный логин и правильный пароль', function () {
        cy.visit('https://login.qa.studio/');
       
        cy.get('#mail').type('germanqa@dolnikov.ru');
        cy.get('#loginButton').should('be.disabled');
        
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').should('be.enabled');
        cy.get('#loginButton').click();

        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })

     it('проверка валидации', function () {
        cy.visit('https://login.qa.studio/');
       
        cy.get('#mail').type('germandolnikov.ru');
        cy.get('#loginButton').should('be.disabled');
        
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').should('be.enabled');
        cy.get('#loginButton').click();

        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })

      it('забыл пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click();

        cy.get('#mailForgot').type('german@dolnikov.ru');
        cy.get('#restoreEmailButton').click();

       cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
       cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })


       it('приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').should('be.enabled');
        cy.get('#loginButton').click();

        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
       
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })

 


})