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
      
      let listaFinal = [];
      let palavraChave = "cypress"

      cy.busca("google", palavraChave, 1); // Aqui entra na página, e pega os dados dos resultados das buscas

      listaFinal.push("Resultados do Google: {enter} ---------- {enter}")

      cy.get('@lista_rawText').then(lista_rawText => { // Esse bloco é assíncrono, então todo o resto das operações
        cy.log(lista_rawText);                         // utilizando os dados da vez devem ocorrer aqui dentro
        for(let i = 0; i < lista_rawText.length;i++){
          let xSplitado = lista_rawText[i].split(" ");
          const countingArr = [];
          for (let j = 0; j < xSplitado.length; j++){
            if(countingArr.includes(xSplitado[j])){
              countingArr[countingArr.indexOf(xSplitado[j])][1] += 1;
            } else{
              countingArr.push([xSplitado[j], 1])
            }
          }
        
        let palavraDominante = ["Erro 01", 0];

        for (let k = 0; k < countingArr.length; k++){
          if((countingArr[k][1] > palavraDominante[1]) && (countingArr[k][0].toUpperCase().indexOf(palavraChave.toUpperCase()) == -1)){
            palavraDominante = countingArr[k]
          }
        }
        
        listaFinal.push(palavraDominante[0]);
        listaFinal.push("{enter}");
        }

        listaFinal.push("==========")



        // A partir daqui já cola tudo que estiver na lista aq de baixo no invertexto
        cy.invertexta("google", listaFinal);
        cy.wait(15000);
        
      })
      

    });

  });

  context("Teste Youtube", () => {
    it("it description", () => {
      ///

      ///
      cy.log(cy.busca("youtube", "cypress", 1));
    });

  });
});