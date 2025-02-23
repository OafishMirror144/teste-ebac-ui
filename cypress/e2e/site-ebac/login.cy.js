///<reference types="cypress"/>
const perfil = require('../../fixtures/perfil.json')


describe('funcionalidade: login', () => {
    beforeEach(() => {
        cy.visit('/minha-conta/')
    });

    ///afterEach(() => {
       /// cy.screenshot()
    ///});

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

    it('deve fazer login com sucesso com massa de dados', () => {

        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('#rememberme').check()
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, emailteste12 (não é emailteste12? Sair)')
        cy.get('.woocommerce-MyAccount-navigation-link--customer-logout > a').click()
        
    });

    it('deve fazer login com sucesso usando fixture', () => {

        cy.fixture('perfil').then(dados =>{  //cy.fixture('perfil').then(dados => se refere a importaçao de dados diretos da pasta fixture do arquivo perfil

        cy.get('#username').type(dados.usuario , { log:false })
        cy.get('#password').type(dados.senha , { log:false })  //{ log:false } se refere a esconder a senha na exibiçao de log para nao vazar dados sensiveis
        cy.get('#rememberme').check()
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, emailteste12 (não é emailteste12? Sair)')
        cy.get('.woocommerce-MyAccount-navigation-link--customer-logout > a').click()

        })

        it('deve fazer login com sucesso usando comandos customizados', () => {
            
            cy.login('emailteste12@teste1.com','melhor senha de teste')
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, emailteste12 (não é emailteste12? Sair)')

        });



        
        
    });


})