function incluiTexto(vTexto) {
    var vRes = document.getElementById('resultado');
    vRes.innerHTML = vTexto;
}

function textoInicial() {
    var vTexto = 'Esse texto foi inserido pelo JavaScript';
    incluiTexto(vTexto);
}