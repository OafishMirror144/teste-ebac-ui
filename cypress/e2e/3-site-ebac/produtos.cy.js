///<reference types="cypress"/>

describe('funcionalidade: produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
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
        cy.get('.products > .row')
           //.first()
           //.last()
           //.eq(2)
           .contains('Ajax Full-Zip Sweatshirt')
           .click()



    });


});