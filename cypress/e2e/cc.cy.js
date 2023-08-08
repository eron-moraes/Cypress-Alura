describe('Clicar 10 vezes em um link', () => {
    it('Clica 10 vezes no link', () => {
      cy.visit('https://eron-moraes.github.io/pageHTML/')  // Substitua pelo URL da página desejada
  
      for (let i = 0; i < 10; i++) {
        cy.get('a').click()  // Isso clica em qualquer link (<a>) na página
      }
    })
  })