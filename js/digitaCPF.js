function limpaSimbolos() {

    var vCpf = document.getElementById('cpf').value;
    var vRes = document.getElementById('resultado');

    vRes.innerHTML = retornaSomenteNumeros(vCpf);

}

//Função que retorna somente números a partir de uma string
function retornaSomenteNumeros(pValor) {

    return pValor.replace(/[^0-9]/g, "");

}