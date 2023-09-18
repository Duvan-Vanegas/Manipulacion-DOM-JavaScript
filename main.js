const h1 = document.querySelector('h1');
const input1 = document.getElementById('calculo1');
const input2 = document.getElementById('calculo2');
const btn = document.getElementById('btncalcular');
const resultado = document.getElementById('resultado');
const form = document.getElementById('form');

form.addEventListener('submit', con);

function con(event) {
    event.preventDefault();
    const suma = input1.value + ' ' + input2.value;
    resultado.innerText = 'Resultado: ' + suma;
}



