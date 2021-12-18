function repete() {
    
    var vResultado = '';
    
    var i;
    for (i = 0; i < 201; i++) {
        if(i%2==0) {
          vResultado = vResultado + '-' + i;
        }

      } 

    var vResComp = document.getElementById('resultado');
    vResComp.innerHTML = vResultado;

}