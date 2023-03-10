describe('Demoblaze login scenario', () => {
    it('Successfully login using valid uname n pass', () => {
        cy.visit('https://www.demoblaze.com/index.html')

        //click link text login
        cy.get(`[data-target='#logInModal']`).click()
        cy.get("[onclick='logIn()']").should('be.visible') //implicite wait
        cy.wait(5000) //explicite wait

        //fill uname n pass
        cy.get("#loginusername").type('wibowo.bullseye').should('have.value', 'wibowo.bullseye')
        cy.get("#loginpassword").type('bullseye').should('have.value', 'bullseye')

        //klik button login
        cy.get("[onclick='logIn()']").click()

        //assert homescreen
        cy.get('#nameofuser').should('contain', 'wibowo.bullseye')
        cy.wait(5000)
    })

    it('Add to Cart', () => {
        cy.visit('https://www.demoblaze.com/index.html')

        //click link text login
        cy.get(`[data-target='#logInModal']`).click()
        cy.get("[onclick='logIn()']").should('be.visible') //implicite wait
        cy.wait(5000) //explicite wait

        //fill uname n pass
        cy.get("#loginusername").type('wibowo.bullseye').should('have.value', 'wibowo.bullseye')
        cy.get("#loginpassword").type('bullseye').should('have.value', 'bullseye')

        //klik button login
        cy.get("[onclick='logIn()']").click()
        
        //add to cart
        cy.get(".nav-link[href='index.html']").click()
        cy.wait(5000)
        cy.get("#tbodyid > div:nth-of-type(1) .hrefch").click()
        cy.url().should("eq", "https://www.demoblaze.com/prod.html?idp_=1")
        cy.get(".btn-success").contains('Add to cart').click()

        //crossceck list
        cy.get("#cartur").click()
        cy.url().should("eq", "https://www.demoblaze.com/cart.html")
        cy.get("td:nth-of-type(2)").should('contain', 'Samsung galaxy s6')

    })

    it('Logout', () => {
        cy.visit('https://www.demoblaze.com/index.html')

        //click link text login
        cy.get(`[data-target='#logInModal']`).click()
        cy.get("[onclick='logIn()']").should('be.visible') //implicite wait
        cy.wait(5000) //explicite wait

        //fill uname n pass
        cy.get("#loginusername").type('wibowo.bullseye').should('have.value', 'wibowo.bullseye')
        cy.get("#loginpassword").type('bullseye').should('have.value', 'bullseye')

        //klik button login
        cy.get("[onclick='logIn()']").click()

        //assert homescreen
        cy.get('#nameofuser').should('contain', 'wibowo.bullseye')

        //Logout
        cy.get(`[onclick='logOut()']`).should('be.visible')
        
        // assert homescreen
        cy.get('#nameofuser').should('contain', '')
    })
})