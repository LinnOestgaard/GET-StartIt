//Hjelpevariabeler
const app = document.getElementById('app');

//Model
const kelvin =298;
const celsius = kelvin - 273;
let fahrenheit = celsius *(9/5) + 32;
    fahrenheit = Math.floor(fahrenheit);
let newton = celsius *(33/100);
    newton = Math.floor(newton);

//View
function render(){
    app.innerHTML=`
    <h1>Degree Calculator</h1>
    <p>The temperature is ${kelvin}° Kelvin.</p>
    <p class="c">The temperature is ${celsius}° Celsius.</p>
    <p class="f">The temperature is ${fahrenheit}° Fahrenheit.</p>
    <p class="n">The temperature is ${newton}° Newton scale.</p>
    `;
}
render();

//Controller