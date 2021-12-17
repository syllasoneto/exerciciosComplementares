function alertaResto() {

    var vN1 = parseInt(document.getElementById("n1").value);
    var vN2 = parseInt(document.getElementById("n2").value);

    if(!isNaN(vN1) && !isNaN(vN2)){

        var vResto = 0;
        if(vN1>=vN2) {
            vResto = vN1 % vN2;
        } else {
            vResto = vN2 % vN1;
        }

        alert(vResto);

    } else {
        alert("Não é possível dividir um valor vazio ou não numérico.");
    }
    
}