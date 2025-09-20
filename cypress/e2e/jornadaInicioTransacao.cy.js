/// <reference types="cypress"/>


describe('Jornadas de Usuários Transações', () => {
    let authToken;
    let saldo;
    let transacao;
    let ultimaTransacao;
    beforeEach(() => {
        cy.visit('/')
        cy.login('neilton@alura.com', '123456')
    })
    it('Deve retornar o token de autenticação da api usando o cy.request', ()  =>{
        cy.request({
            method: 'POST',
            url:'http://localhost:8000/public/login', 
            body:{
                email:"neilton@alura.com",
                senha:"123456"
            }}).then((response) =>{
                authToken= response.body.access_token
                expect(authToken).is.not.null
            })
    })
    it('Deve buscar o saldo da api usando o  cy.request e passar o token', () =>{
        cy.request({
            method:'GET',
            url:'http//localhost:8000/saldo',
            headers: {
                'Authorization': `Bearer ${authToken}`
            },
        }).then((response) =>{
            expect(response.body).to.not.be.null;
            expect(response.status).to.eq(200)
            saldo = response.body
            console.log(saldo)
        })    
    })
    // it('Deve permitir que a pessoa usuária acesse a aplicação, realize uma transação e faça um logout', () =>{
    //     cy.login('neilton@alura.com', '123456')
    //     cy.url().should('eq', 'http://localhost:3000/home')
    //     cy.getByData('select-opcoes').select('Transferência')
    //     cy.getByData('form-input').type('100');
    //     cy.getByData('realiza-transacao').click()
    //     cy.getByData('lista-transacoes').find('li').last().contains('- R$ 100')
    //     cy.getByData('botao-sair').click()
    //     cy.location('pathname').should('eq', '/')
    // })
    // it('Deve permitir que a pessoa usuário acesse a aplicação, realize um deposito e faça um logout', () =>{
    //     cy.login('neilton@alura.com', '123456')
    //     cy.url().should('eq', 'http://localhost:3000/home')
    //     cy.transacao('Depósito', '100')
    //     cy.getByData('lista-transacoes').find('li').last().contains('R$ 100')
    //     cy.getByData('botao-sair').click()
    //     cy.location('pathname').should('eq', '/')
    // })
    // it('Deve realizar operações de transação e deposito confirmando o saldo após cada operação', () =>{
    //     let saldoAntigo = 0
    //     let saldoNovo = 0
    //     cy.login('neilton@alura.com', '123456')
    //     cy.url().should('eq', 'http://localhost:3000/home')
    //     cy.get('[data-testid="saldo"]').invoke('text').then((saldo) =>{
    //         saldoAntigo = saldo.replace("R$", "")
    //         saldoAntigo = parseInt(saldoAntigo)
    //     })
    //     cy.transacao('Depósito', '100')
    //     cy.get('[data-testid="saldo"]').invoke('text').then((saldo) =>{
    //         saldoNovo = saldo.replace("R$", "")
    //         saldoNovo = parseInt(saldoNovo)
    //         expect(saldoNovo).to.equal(saldoAntigo+100)
    //     })
    //     cy.getByData('lista-transacoes').find('li').last().contains('R$ 100')
    //     cy.getByData('botao-sair').click()
    //     cy.location('pathname').should('eq', '/')
    // })
})