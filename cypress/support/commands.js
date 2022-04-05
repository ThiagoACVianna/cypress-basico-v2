Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get('#firstName').type('Thiago')
    cy.get('#lastName').type('Vianna')
    cy.get('#email').type('Thiago@qa.com')
    cy.get('#open-text-area').type('Teste')
    cy.contains('button', 'Enviar').click()

})