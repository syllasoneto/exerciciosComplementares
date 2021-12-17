function alertaSoma() {
    var vN1 = document.getElementById("n1").value;
    var vN2 = document.getElementById("n2").value;

    if(vN1!="" && vN2!=""){
        alert(retornaSoma2Num(parseInt(vN1), parseInt(vN2)));
    } else {
        alert("Não é possível somar um valor vazio.");
    }

    
}

function retornaSoma2Num(vNum1, vNum2) {
    return vNum1 + vNum2;
}