function geraJson() {

    var vDados = {"nome":'', "sobrenome":'', "telefone":''};
    
    vDados.nome = document.getElementById('nome').value;
    vDados.sobrenome = document.getElementById('sobr').value;
    vDados.telefone = document.getElementById('tel').value;

    var vResJson = '';
    if(vDados.nome!='' && vDados.sobrenome!='' && vDados.telefone!='') {
        vResJson = JSON.stringify(vDados);
    } else {
        vResJson = 'Não foi possível gerar o arquivo Json. Preenha todos os campos.';
    }

    vResTela = document.getElementById('resultado');
    vResTela.innerHTML = vResJson;

}