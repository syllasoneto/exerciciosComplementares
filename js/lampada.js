function alternaEstadoLampada(idObj) {
    var vDom = document.getElementById(idObj);

    if(vDom.src.indexOf("lampApagada.jpg")>-1) {
        vDom.src = "./img/lampAcesa.jpg";
    } else {
        vDom.src = "./img/lampApagada.jpg";
    }
}