function alertaSoma() {
    var vN1 = document.getElementById("n1").value;
    var vN2 = document.getElementById("n2").value;

    if(vN1!="" && vN2!=""){
        alert(parseInt(vN1) + parseInt(vN2));
    } else {
        alert("Não é possível somar um valor vazio.");
    }

    
}