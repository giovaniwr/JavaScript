let adicionarbotao= document.querySelector("#adicionar-paciente");// tranforma o botão em uma variavel
adicionarbotao.addEventListener("click", function(event){    //e quando executa o evento de click, ele executa uma função
    event.preventDefault(); // previne de recarregar a carga e sumir
    console.log("fui clicado");

    let form = document.querySelector("#form-adiciona"); //pega o formulario e cria uma variavel
    
    let paciente = obterPacienteDoFormulario(form);  //pega os valores do form
    
    let pacienteTr = montarTR(paciente);//Cria um td e um tr com cada elemento 

    if(!validaPaciente(paciente)){
        console.log("paciente invalido");
        window.alert("peso invalido");
        return;
    }

    let tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
    form.reset(); //o formulario ele reseta quando clicar no botao
});

//vai criar uma função que é OO que retorna todo o valor pra cima no formulario
function obterPacienteDoFormulario(form){
    
    let paciente= {
        nome:form.nome.value,
        peso:form.peso.value,
        altura:form.altura.value,
        gordura:form.gordura.value,
        imc:calcularIMC(form.peso.value, form.altura.value)
    }
    return paciente
}
//função usada para criar a tr
function montarTR(paciente){

    let pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente"); //Eu adiciono uma classe pro meu tr que seria a classe paciente
    /*
    let nomeTd = montaTD(paciente.nome, "info-nome"); //executo a função
    let pesoTd = montaTD(paciente.peso,"info-peso");
    let alturaTd = montaTD(paciente.altura, "info-altura");
    let gorduraTd = montaTD(paciente.gordura, "info-gordura");
    let imcTd = montaTD(paciente.imc, "info-imc");
    colocando o codigo dentro e nao criar variaveis
    */
    pacienteTr.appendChild(montaTD(paciente.nome, "info-nome")); // tabela como a pacientetr e o filho e o nometd
    pacienteTr.appendChild(montaTD(paciente.peso,"info-peso"));
    pacienteTr.appendChild(montaTD(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTD(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTD(paciente.imc, "info-imc"));

    return pacienteTr;
}
//vai montar a função td
function montaTD(dados,classe){
    let td = document.createElement("td");
    td.textContent = dados;
    td.classList.add(classe); 
    return td;
}

function validaPaciente(paciente){
    if(validaPeso(paciente.peso)){
        return true;
    } else{
        return false;
    }
}

