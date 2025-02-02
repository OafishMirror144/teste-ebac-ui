///<reference types="cypress"/>

describe('funcionalidade: login', () => {

    it('deve fazer login com sucesso', () =>{

        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('emailteste12@teste1.com')
        cy.get('#password').type('melhor senha de teste')
        cy.get('#rememberme').check()
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, emailteste12 (não é emailteste12? Sair)')
        cy.get('.woocommerce-MyAccount-navigation-link--customer-logout > a').click()


    })

    it('deve falhar no login', () =>{
        
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('memailteste12@teste1.com')
        cy.get('#password').type('mmelhor senha de teste')
        cy.get('#rememberme').check()
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')

    })


})