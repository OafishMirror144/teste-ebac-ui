///<reference types="cypress"/>
import produtosPage from "../../support/page-objects/produtos.page";

describe('cenario de teste em massa de produtos', () => {
    
        beforeEach(() => {
            produtosPage.visitarUrl()
        });

        it('adicionar 3 produtos diferentes no carrinho', () => {
            cy.fixture('produtos').then(dados =>{

                produtosPage.buscarProduto(dados[3].nomeProduto)

                produtosPage.addProdutoCarrinho(
                     dados[3].tamanho,
                     dados[3].cor,
                     dados[3].quantidade)

                cy.get('.woocommerce-message').should('contain', dados[3].nomeProduto)

                produtosPage.buscarProduto(dados[2].nomeProduto)

                produtosPage.addProdutoCarrinho(
                     dados[2].tamanho,
                     dados[2].cor,
                     dados[2].quantidade)

                cy.get('.woocommerce-message').should('contain', dados[2].nomeProduto)

                produtosPage.buscarProduto(dados[0].nomeProduto)

                produtosPage.addProdutoCarrinho(
                     dados[0].tamanho,
                     dados[0].cor,
                     dados[0].quantidade)
                     
                cy.get('.woocommerce-message').should('contain', dados[0].nomeProduto)

            })
            
        });
    
});