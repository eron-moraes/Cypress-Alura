describe('Página de cadastro', () => {
    it('Preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
      cy.visit('http://localhost:4200/')
      cy.get('[data-test="register"]').click();
      cy.get('input[data-test="email"]').type('lllll@lll.com');
      cy.get('input[data-test="fullName"]').type('Lllll Lllll');
      cy.get('input[data-test="registerUserName"]').type('lllllllll');
      cy.get('input[data-test="registerPassword"]').type('LllllLllll');
      cy.get('[data-test="btnRegister"]').click();
    })
  })