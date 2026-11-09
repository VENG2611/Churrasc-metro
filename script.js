//Declarar variaveis

var inputAdultos = document.getElementById("adultos")
var inputCriancas = document.getElementById("criancas")
var inputDuracao = document.getElementById("duracao")
let resultado = document.getElementById("resultado")
//Função para calcular a o consumo baseado na duração



function calcular(){
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;


    let quantidadeTotalCarne = adultos * carnepp(duracao) + (carnepp(duracao) /2 * criancas);
    let quantidadeTotalCerveja = adultos * cervejapp(duracao);
    let quantidadeTotalRefri = adultos * refrigerantepp(duracao) + (refrigerantepp(duracao) /2 * criancas);

    resultado.innerHTML = `<p> ${(quantidadeTotalCarne / 1000).toLocaleString('pt-br')} Kg de carne<p/>`;
    resultado.innerHTML += `<p> ${Math.ceil(Math.ceil(quantidadeTotalCerveja / 350)).toLocaleString('pt-br')} Latas de cerveja<p/>`;
    resultado.innerHTML += `<p> ${Math.ceil(quantidadeTotalRefri / 2000).toLocaleString('pt-br')} Garrafas de 2 Litros de refri<p/>`;
};

//Funções para calcular carne, refrigerante e cerveja por pessoa

function carnepp(duracao){
    if(duracao >= 6){
        return 650
    }else{
        return 400
    }
}

function cervejapp(duracao){
    if(duracao >= 6){
        return 1200
    }else{
        return 2000
    }
}

function refrigerantepp(duracao){
    if(duracao >= 6){
        return 1500
    }else{
        return 1000
    }
}

function calcularPreçoDoChurrasco(){
    
}