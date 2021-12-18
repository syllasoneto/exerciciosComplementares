function repete() {
    
    var vResultado = '';
    
    var i;
    for (i = 0; i < 20; i++) {
        vResultado = vResultado + 'repetição ';
      } 

    var vResComp = document.getElementById('resultado');
    vResComp.innerHTML = vResultado;

}