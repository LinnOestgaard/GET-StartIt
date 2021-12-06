//Model
var resultBox = document.getElementById('resultBox');
let input = '';

//View
updateView();
   function updateView() {
       resultBox.innerHTML = input;
   }

   // controller
   function addCharacter(x) {
       input += x;
      updateView();
   }

   function calculate() {
       var calculation = input.replace('×', '*').replace('÷', '/');
       input = eval(calculation);
       updateView();
   }

   function clearResult() {
       input = '';
       updateView();
}
