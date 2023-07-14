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

let palavraChave = "cypress"


describe('Script de pesquisa e colheta de dados', () => {
  beforeEach (() => {
    //Entrando no URL original
    //cy.visit(Cypress.env("INVERTEXTO_URL"));
    //Busca

  });

  context("Teste Google", () => {
    it("it description", () => {
      
      let listaFinal = [];

      cy.busca("google", palavraChave, 1); // Aqui entra na página, e pega os dados dos resultados das buscas
      
      
      listaFinal.push("Resultados do Google: {enter} ---------- {enter}") // 'header' antes das infos

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
          // Condicionais: - (Caso o index 1 da lista, que é o n° de ocorrência, for maior que o de palavraDominante atual, pra mostrar só as com mais ocorrências)
          //               - (Caso não dê pra encontrar a palavra chave na string atual, pra evitar de mostrar a palavra-chave)
          //               - (Caso a string atual não esteja já na lista final, pra evitar repetições)
          if((countingArr[k][1] > palavraDominante[1]) && (countingArr[k][0].toUpperCase().indexOf(palavraChave.toUpperCase()) == -1) && (!listaFinal.includes(countingArr[k][0]))){
            palavraDominante = countingArr[k];

          }
        }
        if(palavraDominante[0] != "Erro 01"){ //Evita algum erro de index ou coisa assim, e só da push na lista caso 
          listaFinal.push(palavraDominante[0]); // tenha sido modificada a palavraDominante do default
        };

        listaFinal.push("{enter}"); // Da um espaço no final só
        }

        listaFinal.push("==========") // Divisória final pra acabar



        // A partir daqui já cola tudo que estiver na lista aq de baixo no invertexto
        cy.invertexta("google", listaFinal);
        cy.wait(10000);
        
      })
      

    });

  });

  context("Teste Youtube", () => {
    it("it description", () => {
      let listaFinal = [];

      cy.busca("youtube", palavraChave, 1).then(() => {
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
            // Condicionais: - (Caso o index 1 da lista, que é o n° de ocorrência, for maior que o de palavraDominante atual, pra mostrar só as com mais ocorrências)
            //               - (Caso não dê pra encontrar a palavra chave na string atual, pra evitar de mostrar a palavra-chave)
            //               - (Caso a string atual não esteja já na lista final, pra evitar repetições)
            if((countingArr[k][1] > palavraDominante[1]) && (countingArr[k][0].toUpperCase().indexOf(palavraChave.toUpperCase()) == -1) && (!listaFinal.includes(countingArr[k][0]))){
              palavraDominante = countingArr[k];
  
            }
          }
          if(palavraDominante[0] != "Erro 01"){ //Evita algum erro de index ou coisa assim, e só da push na lista caso 
            listaFinal.push(palavraDominante[0]); // tenha sido modificada a palavraDominante do default
          };
  
          listaFinal.push("{enter}"); // Da um espaço no final só
          }
  
          listaFinal.push("==========") // Divisória final pra acabar
  
  
  
          // A partir daqui já cola tudo que estiver na lista aq de baixo no invertexto
          cy.invertexta("youtube", listaFinal);
          cy.wait(10000);
          
        })
        
      });
      
      
      listaFinal.push("Resultados do Youtube: {enter} ---------- {enter}") // 'header' antes das infos



    });
  });
});