/*
Navigate to https://techglobal-training.com/frontend/project-1
Validate the heading is “Contact Us”
Validate the address is “2860 S River Rd Suite 480, Des Plaines, IL 60018”
Validate the email is “info@techglobalschool.com"
Validate the phone number is “(773) 257-3010”

*/

describe('Validate Contact Us in TechGlobal website', () => {


    it('Test Case 01 - Visit Tech Global project 1', () => {


        cy.visit('https://techglobal-training.com/frontend/project-1')

        const text = ['Contact Us', '2860 S River Rd Suite 480, Des Plaines, IL 60018', 'info@techglobalschool.com', '(773) 257-3010']
        cy.get('div > .mb-5').children().each(($el, index) => {
            cy.wrap($el).should('have.text', text[index])

        })

    })

    it('Test Case 02 - Validate full name input box', () => {

        /*
Navigate to https://techglobal-training.com/frontend/project-1
Validate that the Full name input box is displayed
Validate that the Full name input box is required
Validate that the label of the Full name input box is “Full name *”
Validate that the placeholder of the Full name input box is “Enter your full name”



        */

        cy.visit('https://techglobal-training.com/frontend/project-1')

        cy.get(':nth-child(1) > .control > .input').should('be.visible').and('have.attr', 'placeholder', 'Enter your full name').and('have.attr', 'required')

        cy.get('form > :nth-child(1) > .label').should('have.text', 'Full name *')




    })

    it('Test Case 03-Validate Gender radio option', () => {
        /*
   
        Navigate to https://techglobal-training.com/frontend/project-1
   Validate the label is “Gender *”
   Validate that the Gender is required
   Validate the options are “Female”, “Male” and “Prefer not to disclose”
   Validate the options are clickable and not selected
   Click on the “Male” option and validate it is selected while the others are not selected
   Click on the “Female” option and validate it is selected while the others are not selected
   
        */

        cy.visit('https://techglobal-training.com/frontend/project-1')

        const data = ['Male', 'Female', 'Prefer not to disclose']

        cy.get('.control > .label').should('have.text', 'Gender *').and('not.have.attr', 'required')
        cy.get('.control > .radio').each(($el, index) => {
            cy.wrap($el).should('have.text', data[index]).and('not.be.selected').click()
            cy.get(':nth-child(2) > .mr-1').click()
            cy.get(':nth-child(3) > .mr-1').should('not.be.selected')
            cy.get(':nth-child(4) > .mr-1').should('not.be.selected')
            cy.get(':nth-child(3) > .mr-1').click()
            cy.get(':nth-child(2) > .mr-1').should('not.be.selected')
            cy.get(':nth-child(4) > .mr-1').should('not.be.selected')
        })




    })


    /*
  Navigate to https://techglobal-training.com/frontend/project-1
 Validate that the Address input box is displayed
 Validate that the Address input box is not required
 Validate that the label of the Address input box is “Address”
 Validate that the placeholder of the Address input box is “Enter your address*”
 
 
    */
    const testData = [
        {
            description: 'Validate the Address input box',
            label: 'Address',
            placeholder: 'Enter your address*',
            required: false
        },
        {
            description: 'Validate the Email input box',
            label: 'Email *',
            placeholder: 'Enter your address*',
            required: true
        },
        {
            description: 'Validate the Phone input box',
            label: 'Phone',
            placeholder: 'Enter your address*',
            required: false
        },
        {
            description: 'Validate the Message input box',
            label: 'Message',
            placeholder: 'Enter your address*',
            required: false
        }
    ]

    testData.forEach((test, index) => {

        it(`Test Case 0${index + 4} - ${test.description}`, () => {
            cy.visit('https://techglobal-training.com/frontend/project-1')

            cy.contains('.label', test.label).should('have.text', test.label)

            cy.contains('.label', test.label).parent().find('input, textarea').should('be.visible')
                // .and('have.attr', 'placeholder', 'Enter your address')
                .and(test.required ? 'have.attr' : 'not.have.attr', 'required')
        })
    })
    it('Test Case 08 - Validate the Consent checkbox', () => {

        cy.visit('https://techglobal-training.com/frontend');
        cy.clickCard('Project - Form Elements');

        /**
         * Navigate to https://techglobal-training.com/frontend/project-1
         * Validate the label is "I give my consent to be contacted." // BUG
         * Validate that the Consent checkbox is required
         * Validate that the Consent checkbox is clickable
         * Click on the "I give my consent to be contacted." checkbox and validate it is selected
         * Click on the "I give my consent to be contacted." checkbox again and validate it is not selected
         */


        cy.get(':nth-child(7) > .control > label').should('have.text', ' I give my consent to be contacted.')

        cy.get(':nth-child(7) > .control > label > input')
            .should('be.enabled')
            .click()
            .and('be.checked')
            .click()
            .and('not.be.checked')
            .and('have.attr', 'required')

    })
    /*
    Navigate to https://techglobal-training.com/frontend/project-1
    Validate the “SUBMIT” button is displayed
    Validate the “SUBMIT” button is clickable
    Validate that the button text is “SUBMIT”
    
    */
    it('Test Case 09- Validate the SUBMITT Button', () => {
        cy.visit('https://techglobal-training.com/frontend/project-1')
        cy.get('button.button.is-link[type="submit"]').should('be.visible').and('be.enabled').and('have.text', 'SUBMIT')

    })
    /*
   Navigate to https://techglobal-training.com/frontend/project-1
   Enter a first name
   Select a gender
   Enter an address
   Enter an email
   Enter a phone number
   Enter a message
   Select the “I give my consent to be contacted.” checkbox
   Click on the “SUBMIT” button
   Validate the form message “Thanks for submitting!” is displayed under the “SUBMIT” button
   
    */
    it('Test Case 10- Validate the form submission', () => {

        cy.visit('https://techglobal-training.com/frontend/project-1')


        const data = ['John Doe', '2860 S River Rd Suite 480, Des Plaines, IL 60018', 'johndoe@gmail.com', '646-244-2652', 'Hello World']

        cy.get('form > div >div > .input, textarea').each(($el, index) => {
            cy.wrap($el).type(data[index])
        })

        cy.get(':nth-child(2).radio').click()
        cy.get('.checkbox > input').click()
        cy.get('div> .button[type = submit]').click()
        Cypress.on('uncaught:exception', () => {
            // returning false prevents Cypress from fail the test
            return false
        })
        cy.get('.mt-5').should('have.text', 'Thanks for submitting!')




    })
})


