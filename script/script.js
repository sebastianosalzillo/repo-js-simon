const randomWriter = document.querySelector(".row");



let randomNumbersHTML = "";

const randomSave = [];

for (let index = 0; index < 5; index++) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;;
    randomNumbersHTML += `<p>${randomNumber}</p>`;
    randomSave.push (randomNumber)
    randomWriter.innerHTML = randomNumbersHTML
}
setTimeout(function () {
    randomWriter.innerHTML = `<div  class="insert">
            <input id="uno" type="number">
        </div>`;
    randomWriter.innerHTML += `<div  class="insert">
        <input id="due" type="number">
    </div>`;
    randomWriter.innerHTML += `<div  class="insert">
    <input id="tre" type="number">
    </div>`;
    randomWriter.innerHTML += `<div  class="insert">
    <input id="quattro" type="number">
    </div>`;
    randomWriter.innerHTML += `<div  class="insert">
    <input id="cinque" type="number">

    <button id="conferma"> clicca per ottenere il tuo punteggio</button>



</div>`;

const uno = document.getElementById ("uno");
const due = document.getElementById ("due");
const tre = document.getElementById ("tre");
const quattro = document.getElementById ("quattro");
const cinque = document.getElementById ("cinque");

const btnPnteggio = document.getElementById ("conferma");
btnPnteggio.addEventListener ("click", function () {
let punteggio = 0;


if (randomSave.includes (parseInt(uno.value))) {
    punteggio += 1 ;
} 
if (randomSave.includes(parseInt(due.value))) {
    punteggio += 1 ;
} 
if (randomSave.includes(parseInt(tre.value))) {
    punteggio += 1 ;
} 
if (randomSave.includes (parseInt(quattro.value))) {
    punteggio += 1 ;
} 
if (randomSave.includes (parseInt(cinque.value))) {
    punteggio += 1 ;
} 
console.log (punteggio)
console.log (randomSave)
console.log (uno.value)


randomWriter.innerHTML = `<div> ${punteggio}</div>`

})

}, 3000);







``
