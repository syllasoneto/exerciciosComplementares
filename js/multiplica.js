function alertaMultiplica(vN1, vN2) {

    if(vN1!="" && vN2!=""){
        alert(parseInt(vN1) * parseInt(vN2));
    } else {
        alert("Não é possível somar um valor vazio.");
    }

    
}

function executa() {
    
    var vNum1 = document.getElementById("n1").value;
    var vNum2 = document.getElementById("n2").value;

    alertaMultiplica(vNum1, vNum2);

}