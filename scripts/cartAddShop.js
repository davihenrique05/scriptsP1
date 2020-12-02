
var lista = [];
var listaNomes = [];
var listaNomes2 = [];
frutasQueTem();


function adicionarAoCarrinhoShop(elt){
    var box = elt.parentElement;
    var nome = box.children[1].textContent.toLowerCase().replace(/\s/g, '');

    var obtive= obterItem(nome)
    
    if(obtive){
        var fruta = lista[lista.length-1]
        if(localStorage.listaDeItensCart == undefined){
            listaNomes.push(fruta.nome.toLowerCase().replace(/\s/g, ''))
            localStorage.setItem('listaDeItensCart', listaNomes)
        }else{
            var listaQueVem= localStorage.getItem('listaDeItensCart').split(',')
            listaNomes = listaQueVem
            listaNomes.push(fruta.nome.toLowerCase().replace(/\s/g, ''))
            localStorage.setItem('listaDeItensCart', listaNomes)
            listaQueVem= localStorage.getItem('listaDeItensCart').split(",")
            mudaBotao(elt);
        }
        
    }else{
        console.log('Fruta não encontrada')
    }
}

function obterItem(nome){
    for(i=0; i<listaDeFrutas.length;i++){
        if(listaDeFrutas[i].nome.toLowerCase().replace(/\s/g, '') == nome){
            if(!lista.includes(listaDeFrutas[i])){
                var fruta = listaDeFrutas[i];
                lista.push(fruta)
                return true
            }else{
                console.log("Já tem essa no carrinho")
            }
        }
        var fruta = listaDeFrutas[i];
    }
    return false
}

function mudaBotao(item) {
    item.textContent = "Adicionado";
    item.style.cssText= 'background:#c0c060;cursor: default;';
}

function frutasQueTem(){
    listaNomes2 = localStorage.getItem('listaDeItensCart').split(',')
    var items = document.getElementsByClassName('box')

    for(var i=0; i<items.length; i++){
        
        var nomeContainer = items[i].children[1]
        if(nomeContainer.children.length == 0){
            var nome = nomeContainer.textContent.toLowerCase().replace(/\s/g, '')
            if(listaNomes2.includes(nome)){
                var botao = items[i].children[3]
                mudaBotao(botao)
            }
            
        }else{
            var nome = nomeContainer.children[0].textContent.toLowerCase().replace(/\s/g, '')
            if(listaNomes2.includes(nome)){
                var botao = items[i].children[3]
                mudaBotao(botao)
            }
        }
    }
}