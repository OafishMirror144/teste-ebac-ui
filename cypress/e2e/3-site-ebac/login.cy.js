///<reference types="cypress"/>

describe('funcionalidade: login', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('deve fazer login com sucesso', () =>{
        cy.get('#username').type('emailteste12@teste1.com')
        cy.get('#password').type('melhor senha de teste')
        cy.get('#rememberme').check()
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, emailteste12 (não é emailteste12? Sair)')
        cy.get('.woocommerce-MyAccount-navigation-link--customer-logout > a').click()

    })

    it('deve exibir uma mensagem de erro ao inserir usuario inválido', () =>{
        cy.get('#username').type('memailteste12@teste1.com')
        cy.get('#password').type('melhor senha de teste')
        cy.get('#rememberme').check()
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('exist')
    })

    it('deve exibir uma mensagem de erro ao inserir senha inválida', () => {
        cy.get('#username').type('emailteste12@teste1.com')
        cy.get('#password').type('mmelhor senha de teste')
        cy.get('#rememberme').check()
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', 'Erro: A senha fornecida para o e-mail emailteste12@teste1.com está incorreta. Perdeu a senha?')

    });


})