describe('Valid login Test', () =>{

   it('it should login', () => {

   cy.visit('https://techglobal-training.com/frontend/project-2')
   cy.get('#username').type('TechGlobal')
   cy.get('#password').type('Teste1234')
   cy.get('.Button_c_button__TmkRS ').click()
   cy.get('#error_message').should('contain', 'Invalid Password entered!')



   cy.wait(2000)
   })

})



describe('Mock test case', () =>{
    it('validate head', () =>{
    cy.visit('https://techglobal-training.com/frontend/project-5')

    const labels = ["Pagination", "World City Populations 2022", "What are the most populated cities in the world? Here is a list of the top five most populated cities in the world:"]
    
    cy.get('.is-size-3, #sub_heading, #content').each((el, index) =>{
        cy.wrap(el).should('have.text', labels[index]).should('be.visible')
    })

    })
})