function dizerOla() {
    var vSaida = document.getElementById("saida");
    var vNome = document.getElementById("nome").value;
    var vSobrenome = document.getElementById("sobrenome").value;

    vResultado = 'Olá ' + vNome + ' ' + vSobrenome + '!';

    vSaida.innerHTML = vResultado;
}