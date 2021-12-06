 // hjelpevariabler for view og controller
 let multiplicationMatrixDiv = document.getElementById('multiplicationMatrix');

 // model
 let columnCount = 5;
 let multiplicationMatrix = [
     1, 2, 3, 4, 5,
     2, 4, 6, 8, 10,
     3, 6, 9, 12, 15,
     4, 8, 12, 16, 20,
     5, 10, 15, 20, 25
 ];

 // view
 show();
 function show() {
     let html = '';
     for (let i = 0; i < multiplicationMatrix.length; i++) {
         let number = multiplicationMatrix[i];
         html += `<div>${number}</div>`;
     }
     multiplicationMatrixDiv.innerHTML = html;
     multiplicationMatrixDiv.style.display = 'grid';
     multiplicationMatrixDiv.style.gridTemplateColumns = `repeat(${columnCount},40px)`;
 }
 //controller
 function changeColumnCount(value){
     columnCount = value;
     multiplicationMatrix = [];
    for (let n1 = 1; n1 <= value; n1++){
        for(let n2 = 1; n2 <= value; n2++){
            multiplicationMatrix.push(n1 * n2);
        }
    }
    show();
 }
 // Lag en controller-funksjon som kalles hver gang brukeren endrer slideren.
 //Funksjonen skal regne ut alle tallene i multiplicationMatrix på nytt ut fra hvor stor gangetabell som ønskes, og også sette columnCount - og så  kalle show() på nytt.
 //Hint: Hvert tall i gangetabellen er et tall ganget med et annet, altså tall1⋅tall2.
 //For å få til dette trenger du to for-løkker inne i hverandre, hvor den ene teller fra 1 til valgt størrelse for tall1 og den andre gjør det samme for tall2