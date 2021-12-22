
let titulos = document.querySelector(".titulo");
titulos.textContent = "Aparecida Nutricionista";

let pacientes= document.querySelectorAll(".paciente"); // seleciona o ALL para tds as CLAASES

//faz a repetição em tds as classes paciente
for(let i = 0 ; i < pacientes.length; i++) {

    let paciente = pacientes[i];

    let tdpeso = paciente.querySelector(".info-peso");
    let peso = tdpeso.textContent;

    let tdaltura =paciente.querySelector(".info-altura");
    let altura= tdaltura.textContent;

    let tdgordura = paciente.querySelector(".info-gordura");
    let gordura = tdgordura.textContent;

    let tdimc = paciente.querySelector(".info-imc");

    let pesovalido= validaPeso(peso);
    let alturavalida = validaAltura(altura);

    // verifica se os pesos é valido
    if(!pesovalido){    
        console.log("Peso invalido");
        tdimc.textContent=("Peso invalido");
        paciente.classList.add("paciente-invalido"); //adiciona cor a texto do css
    }
    //Verifica as alturas se é valida
    if (!alturavalida){
        console.log("altura invalida");
        tdimc.textContent= ("altura invalida");
        paciente.classList.add("paciente-invalido"); //adiciona cor a texto do css
      
    }
    // calcula o IMC
    if(pesovalido && alturavalida){
        let imc = calcularIMC(peso,altura);
        tdimc.textContent= imc // o valor que está em html será substituido pelo imc/ tofixed serve pra add 2 casa apos a virgula 
    }
}

function calcularIMC(peso,altura){
    let imc = 0;
    imc = peso/(altura*altura);
    return imc.toFixed(2);
}

function validaPeso(peso){
    if(peso > 10 && peso <250){
        return true;
    }else {
        return false;
    }
}

function validaAltura(altura){
    if(altura>0 && altura <=2.50){
        return true;
    }else{
        return false
    }
}