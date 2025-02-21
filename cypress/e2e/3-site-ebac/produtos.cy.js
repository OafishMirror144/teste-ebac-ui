///<reference types="cypress"/>
import produtosPage from "../../support/page-objects/produtos.page";

describe('funcionalidade: produtos', () => {

    beforeEach(() => {
        produtosPage.visitarUrl()
    });

    it('deve selecionar o primeiro produto da lista', () => {
        cy.get('.product-block')
           .first()
           .click()

    });

    it('deve selecionar o ultimo produto da lista', () => {
        cy.get('.product-block')
           //.first()
           .last()
           .click()

    });

    it('deve selecionar o terceiro produto da lista', () => {
        cy.get('.product-block')
           //.first()
           //.last()
           .eq(2)
           .click()

    });

    it('deve selecionar o produto /Ajax Full-Zip Sweatshirt/ da lista', () => {
        produtosPage.buscarProdutoLista('Ajax Full-Zip Sweatshirt')

    });

    it('deve buscar um produto com sucesso', () => {
        let produto = 'Zeppelin Yoga Pant'
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain', produto )
    });

    it('deve visitar a pagina do produto', () => {
        produtosPage.visitarProduto('Aether Gym Pant')
        cy.get('.product_title').should('contain', 'Aether Gym Pant' )
    });

    it('deve adicionar produto ao carrinho', () => {
        let qtd = 9
    
        produtosPage.buscarProduto('Josie Yoga Jacket')
        produtosPage.addProdutoCarrinho('S','Blue', qtd)
        
    
    });

    it('deve adicionar produto ao carrinho buscando da massa de dados', () => {
        cy.fixture('produtos').then(dados =>{

        produtosPage.buscarProduto(dados[0].nomeProduto)
        produtosPage.addProdutoCarrinho(
             dados[0].tamanho,
             dados[0].cor,
             dados[0].quantidade)
        cy.get('.woocommerce-message').should('contain', dados[0].nomeProduto)
        })

        
    });

});