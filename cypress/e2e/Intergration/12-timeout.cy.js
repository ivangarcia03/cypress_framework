describe('Timeouts', () =>{

    it('Explicit or Inline Timeouts', () =>{
         cy.visit('https://techglobal-training.com/frontend')
         

         //  cy.get(#randomName, {timeout: 8000})


         /**
   * Go to https://techglobal-training.com/frontend/
   * Click on the "Waits" card
   * Click on the "Click on me to see a red box" button
   * Validate that a red box is displayed
   * 
   */

         cy.clickCard('Waits')
         cy.get('#red').click()
         cy.get('.box', {timeout: 10000}).should('be.visible')



    })

    it.only('cy.wait()- Hard Wait', () =>{
        cy.visit('https://techglobal-training.com/frontend')
        cy.clickCard('Html Elements')
    })



})