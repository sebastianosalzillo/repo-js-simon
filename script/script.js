const randomWriter = document.querySelector(".row");

let randomNumbersHTML = "";
const randomSave = [];

for (let index = 0; index < 5; index++) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    randomNumbersHTML += `<p class="text-center fs-4">${randomNumber}</p>`;
    randomSave.push(randomNumber);
    randomWriter.innerHTML = randomNumbersHTML;
}

setTimeout(function () {
    randomWriter.innerHTML = ''; 
    for (let i = 1; i <= 5; i++) {
        randomWriter.innerHTML += `
            <div class="col-12 col-md-2 my-2">
                <input id="${['uno', 'due', 'tre', 'quattro', 'cinque'][i - 1]}" type="number" class="form-control" placeholder="Inserisci numero ${i}">
            </div>`;
    }

    randomWriter.innerHTML += `
        <div class="col-12 text-center my-3">
            <button id="conferma" class="btn btn-primary">Clicca per ottenere il tuo punteggio</button>
        </div>`;

    const uno = document.getElementById("uno");
    const due = document.getElementById("due");
    const tre = document.getElementById("tre");
    const quattro = document.getElementById("quattro");
    const cinque = document.getElementById("cinque");

    const btnPunteggio = document.getElementById("conferma");
    btnPunteggio.addEventListener("click", function () {
        let punteggio = 0;

        if (randomSave.includes(parseInt(uno.value))) punteggio += 1;
        if (randomSave.includes(parseInt(due.value))) punteggio += 1;
        if (randomSave.includes(parseInt(tre.value))) punteggio += 1;
        if (randomSave.includes(parseInt(quattro.value))) punteggio += 1;
        if (randomSave.includes(parseInt(cinque.value))) punteggio += 1;

        randomWriter.innerHTML = `<div class="text-center fs-3">Punteggio: ${punteggio} su 5</div>`;
    });
}, 3000);

