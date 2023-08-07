const el = require('./elements').ELEMENTS;

class Cadastro {
    acessarPaginaDeCadastro() {
        cy.visit('http://localhost:4200/');
        cy.get('[data-test="register"]').click();
    }


    preencherFormulario() {
        cy.get('input[data-test="email"]').type('lllll@lll.com');
        cy.get('input[data-test="fullName"]').type('Lllll Lllll');
        cy.get('input[data-test="registerUserName"]').type('lllllllll');
        cy.get('input[data-test="registerPassword"]').type('LllllLllll');
    }

    submeterCadastro() {
        cy.get('[data-test="btnRegister"]').click();
    }

}


export default new Cadastro();
