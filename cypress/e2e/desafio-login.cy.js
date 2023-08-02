describe('Página de login', () => {

    beforeEach(() => {
        cy.visit('http://localhost:4200')
    })

        it('Deve preencher os campos do formulário corretamente e realizar login', () => {
            cy.get('input[data-test="loginUserName"]').type('eron');
            cy.get('input[data-test="loginPassword"]').type('12345678');
            cy.get('[data-test="loginBtn"]').click();
            cy.contains('a', '(Logout)').should('be.visible');
            })

})