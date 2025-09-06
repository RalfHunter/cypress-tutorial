/// <reference types="cypress"/>


describe('Jornadas de Usuários Transações', () => {
    beforeEach(() => {
        cy.visit('/')
    })
    it('Deve permitir que a pessoa usuária acesse a aplicação, realize uma transação e faça um logout', () =>{
        cy.login('neilton@alura.com', '123456')
        cy.url().should('eq', 'http://localhost:3000/home')
        cy.getByData('select-opcoes').select('Transferência')
        cy.getByData('form-input').type('100');
        cy.getByData('realiza-transacao').click()
        cy.getByData('lista-transacoes').find('li').last().contains('- R$ 100')
        cy.getByData('botao-sair').click()
        cy.location('pathname').should('eq', '/')
    })
    it('Deve permitir que a pessoa usuário acesse a aplicação, realize um deposito e faça um logout', () =>{

    })
    it('Deve realizar operações de transação e deposito confirmando o saldo após cada operação', () =>{
        
    })
})