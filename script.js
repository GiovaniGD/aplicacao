function limparInformacoes(){
    document.getElementById('rua').value=("");
    document.getElementById('bairro').value=("");
    document.getElementById('cidade').value=("");
    document.getElementById('uf').value=("");
}

function meu_callback(conteudo){
if(!("erro" in conteudo)){
    document.getElementById('rua').value=(conteudo.logradouro);
    document.getElementById('bairro').value=(conteudo.bairro);
    document.getElementById('cidade').value=(conteudo.localidade);
    document.getElementById('uf').value=(conteudo.uf);
}
else{
    limparInformacoes();
    return;
}
}

let botao = document.querySelector('#button');

function pesquisarCep(valor){
var cep = valor.replace(/\D/g, '');

if (cep != ""){
    var validarCep = /^[0-9]{8}$/;

    if(validarCep.test(cep)){
        document.getElementById('rua').value="...";
        document.getElementById('bairro').value="...";
        document.getElementById('cidade').value="...";
        document.getElementById('uf').value="...";

        var script = document.createElement('script');

        script.src = `https://viacep.com.br/ws/${cep}/json/?callback=meu_callback`;

        document.body.appendChild(script);
    }
    else{
        limparInformacoes();
        return;
    }
}
else{
    limparInformacoes();
}
};
botao.addEventListener('click', pesquisarCep);
