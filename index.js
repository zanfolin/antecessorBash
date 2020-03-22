const readline = require('readline-sync');

function start() {
    const content = {};

    console.log('\n\n------------------\nPrograma Iniciado.\n------------------\n\n');

    content.numero = solicitaNumero();
    content.antecessor = calcularAntecessor();
    imprimirResultado();

    function solicitaNumero() {
        return readline.questionInt('Entre com o número: ');
    }

    function calcularAntecessor() {
        return content.numero - 1;
    }

    function imprimirResultado() {
        console.log(`\n\nO antecessor é: ${content.antecessor}\n`);
    }

    console.log('\n\n--------------------\nPrograma Finalizado.\n--------------------\n');
}

start();