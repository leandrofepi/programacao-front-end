const display = 
    document.querySelector('input[type=tel]');
const teclado = 
    document.querySelectorAll('input[type=button]'); 
const botaoLimpar = 
    document.querySelector('button');


function valorBotao(valor) {
    if (display.value.length < 14) {
        display.value += teclado[valor].value;
    }    
}

for (let i = 0; i < teclado.length; i++){
    teclado[i].onclick = () => {
        valorBotao(i);
    }
}

function limpar() {
    display.value = "";
}

botaoLimpar.onclick = () => {
    limpar();
}