///<reference types="cypress"/>

describe('Formulário login', () =>{
    beforeEach(()=>{
        cy.visit("/")
        cy.getByData('botao-login').click()
    });
    it('Deve renderizar login com sucesso',  () =>{
        cy.getByData('email-input').type('neilton@alura.com')
        cy.getByData('senha-input').type('123456')
        cy.intercept('POST', '/**').as('login')
        cy.getByData('botao-enviar').click()
        cy.wait('@login').its('response.statusCode').should('eq', 200)
        cy.location('pathname').should('eq','/home')
        cy.contains('p','Olá, Neilton Seguins').should('be.visible')
    })
    it('Não deve permitir um email inválido sem o @',  () =>{
        cy.getByData('email-input').type('inválido')
        cy.getByData('senha-input').type('123456')
        cy.getByData('botao-enviar').click()
        cy.contains('span', 'E-mail ou senha incorretos').should('be.visible')
        cy.window()
        // cy.getByDate()
    }) 
    it('Não deve permitir um email em branco', ()=>{
        // cy.getByData('email-input').type('')
        cy.getByData('senha-input').type('123456')
        cy.getByData('botao-enviar').click()
        cy.getByData('mensagem-erro').should('be.visible')
    })
})