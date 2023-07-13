// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("busca", (website, keyword, search_depth,numWords) => {
    // numWords = Número de palavras para buscar antes e depois (1 = a-x-a, 2 = a-a-x-a-a)
    if (website === "google"){
        cy.wait(45)
        //
        cy.visit(Cypress.env("GOOGLE_URL"));
        cy.get('[title="Pesquisar"]')
            .click()
            .type(keyword).type('{enter}');
        
        const lista_rawText = [];
        
        for (let i = 0; i < search_depth;i++){
            cy.get('h3').each(($h3)=> {
                lista_rawText.push($h3.text());
                //cy.log($h3.text()); // Aqui ta retornando todas iterações de tds os textos de cada vez e etc
            });
        
        //cy.log(lista_rawText);
        return cy.wrap(lista_rawText).as('lista_rawText')
        //cy.get('button').invoke('text').as('text')

        };

        //
    }
    if (website === "youtube"){
        cy.wait(48)

        cy.visit(Cypress.env("YOUTUBE_URL"));
        cy.get('[name="search_query"]')
            .click()
            .type(keyword).type('{enter}');

        const lista_rawText = [];

        for (let i = 0; i<search_depth;i++){
            cy.get('[class="style-scope ytd-video-renderer"]').each(($x) => {
                lista_rawText.push($x.text) // Ta retornando meio quebrado mas tá retornando algo

            })
        }

        //cy.log(lista_rawText);
        //
    
    }
    if (website === "pinterest"){
        cy.wait(50)
        //
    }
});

Cypress.Commands.add('invertexta', (website, lista_Final)=> {
    cy.visit(Cypress.env("INVERTEXTO_URL"));
    let stringResult = "";
    for (let i=0; i<lista_Final.length;i++){
        stringResult += String(lista_Final[i]);
    }
    cy.get('[name="saved_text"]')
        .click()
        .type(stringResult)
        .type('{enter}');
});