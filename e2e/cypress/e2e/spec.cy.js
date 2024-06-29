it('loads page', () => {
  cy.visit('/')
  cy.contains('Click on the Vite and React logos to learn more')
})
