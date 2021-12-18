function ehPar(vNum) {
    var vRes = vNum%2;
    if(vRes==0){
        return true;
    } else {
        return false;
    }
}

function executaVerificacao() {
    var vNumCampo = document.getElementById('valor').value;

    if(vNumCampo!='') {
    
        if(!isNaN(vNumCampo)) {
            if(ehPar(vNumCampo)) {
                alert('Valor informado é par. (' + vNumCampo + ').');
            } else {
                alert('Valor informado é ímpar. (' + vNumCampo + ').');
            }
        } else {
            alert('Valor informado não corresponde a um número inteiro.')
        }

    } else {
        alert('Informe um valor numérico inteiro para fazer a verificação.')
    }

}