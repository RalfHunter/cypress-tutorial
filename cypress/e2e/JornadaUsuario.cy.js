/// <reference types="cypress"/>

describe('Página inicial', () =>{

    beforeEach(() =>{
        cy.visit('/')
        cy.login('neilton@alura.com', '123456')
    })

    it('Deve Renderizar o menu de serviços disponíveis no banco', ()  =>{
        // cy.get('[class="Menu_link__a+fQi Menu_linkAtivo__i2RaQ"]').should('be.visible')
        cy.contains('[class="Menu_link__a+fQi false"]', 'Serviços').should('be.visible')
        cy.contains('[class="Menu_link__a+fQi false"]', 'Serviços').click()
        cy.contains('[class="Menu_link__a+fQi Menu_linkAtivo__i2RaQ"]', 'Serviços')
        // cy.contains('[class="Menu_link__a+fQi Menu_linkAtivo__i2RaQ"]', 'Serviços').should('be.visible')
    })
})