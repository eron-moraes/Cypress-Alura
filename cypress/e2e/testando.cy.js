describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:4200/#/home')
    cy.contains('a', 'Register now').click();
    cy.get('[formcontrolname="email"]').type('eron.moraes7@email.com.br');
    cy.get('[formcontrolname="fullName"]').type('Eron Moraes');
    cy.get('[formcontrolname="userName"]').type('eronmoraes');
    cy.get('[formcontrolname="password"]').type('qwe123');
    cy.contains('button', 'Register').click();
  })
})
