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
        produtosPage.busscarProdutoLista('Ajax Full-Zip Sweatshirt')



    });

    it.only('deve buscar um produto com sucesso', () => {
        let produto = 'Zeppelin Yoga Pant'
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain', produto )
    });

    it('deve visitar a pagina do produto', () => {
        
    });

    it('deve adicionar produto ao carrinho', () => {
        
    });

});