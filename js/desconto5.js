function retornaValorComDeconto5(vNum) {
    return vNum * 0.95;
}

function executa() {
    var vN = document.getElementById('valor').value;

    if(vN!=''){
        if(!isNaN(vN)){
            alert('O valor com o desconto de 5% é: ' + retornaValorComDeconto5(vN));
        } else {
            alert('O desconto só pode ser aplicado em um valor numérico.');
        }
    } else {
        alert('Informe um valor numérico para aplicar o desconto.');
    }

}