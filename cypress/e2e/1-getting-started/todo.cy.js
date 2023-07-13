/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress


describe('Script de pesquisa e colheta de dados', () => {
  beforeEach (() => {
    //Entrando no URL original
    //cy.visit(Cypress.env("INVERTEXTO_URL"));
    //Busca

  });

  context("Teste Google", () => {
    it("it description", () => {
      ///

      ///
      
      cy.busca("google", "cypress", 1, 2); // Aqui entra na página, e pega os dados dos resultados das buscas

      cy.get('@lista_rawText').then(lista_rawText => { // Esse bloco é assíncrono, então todo o resto das operações
        cy.log(lista_rawText);                         // utilizando os dados da vez devem ocorrer aqui dentro
        cy.invertexta("google", lista_rawText);
        cy.wait(15000);
        
      })
      

    });

  });

  context("Teste Youtube", () => {
    it("it description", () => {
      ///

      ///
      cy.log(cy.busca("youtube", "cypress", 1, 2));
    });

  });
});