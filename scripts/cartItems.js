var listaDeItems = receberItems()
console.log(listaDeItems)

const itemContainer = document.getElementById('itensContainer');
const itemPadrao = document.getElementById('lista-item-0');
const imagemVazio = document.getElementById('imagem-vazio-container')

if(listaDeItems.length==0){
    atribuirImagemVazio();
}else{
    imagemVazio.style.cssText= 'display:none'
    itemPadrao.style.cssText = 'display:block';
    itemContainer.style.cssText= 'overflow-y: scroll';
    atribuirInfo();
}

function atribuirImagemVazio(){
    itemPadrao.style.cssText = 'display:none';
    imagemVazio.style.cssText= 'display:flex';
    itemContainer.style.cssText= 'overflow-y: hidden';
    let precoTotal = document.getElementById('precoTotal').textContent = " "
}
function atribuirInfo(){
    
    for(var i=0; i<listaDeItems.length;i++){
        console.log(i)
        if(i==0){
            mudarChildsLista(itemPadrao,listaDeItems,0);
            calcularPreco(itemPadrao)
        }else{
            console.log("Ai é foda")
            elementCloneLista = clonar(i)
            mudarChildsLista(elementCloneLista,listaDeItems,i);
            calcularPreco(elementCloneLista)
        }
    }

}

function mudarChildsLista(item,lista,indice){
    var child = item.children
    var imagem = child[0].children[0].children[0]
    var nome = child[0].children[1].children[0]
    var preco = child[0].children[1].children[1].children[1]

    alocarDados(lista,indice, imagem,nome,preco)
}

function alocarDados(lista,indice,imagem,nome,preco){
    nome.textContent = lista[indice].nome;
    imagem.src = lista[indice].imagem;
    preco.textContent = lista[indice].preco;
}

function adicionarItemAoCarrinho(elt){

    var dados = "add-list-item-" + elt.id;
    dados = dados.split("-");
    var posicaoFruta = parseInt(dados[3]);
    let fruta = listaDeFrutas[posicaoFruta];
    
    console.log(fruta);
    console.log(listaDeItems);  
    if(!listaDeItems.includes(fruta)){
        imagemVazio.style.cssText= 'display:none';
        itemContainer.style.cssText= 'overflow-y: scroll';

        if(elt.id==0){
            console.log("Sua mãe")
            var item = document.getElementById('lista-item-0');
            item.style.cssText = 'display:block';
            listaDeItems.push(fruta);
            adicionarItensLocal(listaDeFrutas[posicaoFruta].nome);
            var indice = listaDeItems.length-1;
            mudarChildsLista(item,listaDeItems,indice);
            calcularPreco(item);
        }else{
            listaDeItems.push(fruta);
            var indice = listaDeItems.length-1;
            console.log("Sua mãe")
            adicionarItensLocal(listaDeFrutas[posicaoFruta].nome);
            var itemClonado = clonar(indice);
            mudarChildsLista(itemClonado,listaDeItems,indice);
            var item = document.getElementById('lista-item-'+indice);
            item.style.cssText = 'display:block';
            calcularPreco(itemClonado);
        }
        
        $("#itensContainer").scrollTop($("#itensContainer")[0].scrollHeight);
        
    }else{
        console.log("Mensagem ao usuário que a fruta já está adicionada.")
    }
    
}

function clonar(indice){
    var clone = itemPadrao.cloneNode(true);
    clone.setAttribute('id', 'lista-item-'+indice);
    itemContainer.appendChild(clone);

    var qntd = document.getElementsByClassName('quantidade')
    var posicaoQtnd = qntd.length-1;
    qntd[posicaoQtnd].id = "qtnd-"+ indice;

    var botaoClose = document.getElementsByClassName('closeButton')
    var posicaoClose = botaoClose.length-1;
    botaoClose[posicaoClose].id = "close-" + indice;
    
    return elementCloneLista = document.getElementById('lista-item-'+indice);
}

function removerItem(elt){
    let dados = elt.id.split("-");
    let idItem = "lista-item-" + dados[1];
    let item = document.getElementById(idItem)
    console.log(item)
    var nome = item.children[0].children[1].children[0].textContent.toLowerCase().replace(/\s/g, '')

    if(idItem == "lista-item-0"){
        var itemZero = document.getElementById("lista-item-0")
        itemZero.style.cssText= 'display:none'
        for(i=0; i<listaDeItems.length;i++){
            if(listaDeItems[i].nome.toLowerCase().replace(/\s/g, '') == nome){
                var preco = itemZero.children[1].children[1].children[1].textContent = null
                document.getElementById("qtnd-0").value = "1"
                console.log(preco)
                console.log("Deu certo")
                listaDeItems.splice(i,1)
                console.log(listaDeItems)
                removerItensLocal(nome) 
            }
        }
    }else{
        item.remove();
        var index= parseInt(dados[1])+1
        console.log(index)
        for(i=0; i<listaDeItems.length;i++){
            if(listaDeItems[i].nome.toLowerCase().replace(/\s/g, '') == nome){
                console.log("Deu certo")
                listaDeItems.splice(i,1)
                console.log(listaDeItems)
                removerItensLocal(nome) 
            }
        }
    }

    console.log(listaDeItems)
    let totals = document.getElementsByClassName('subprecos');
    calcularTotal(totals);

    if(listaDeItems.length==0) atribuirImagemVazio();
}

function calcularPreco(elt){
    let dados = elt.id.split("-");
    console.log(dados)

    if(dados.length == 2){
        idItemCalculo = "lista-item-" + dados[1];
    }else{
        idItemCalculo = "lista-item-" + dados[2];
        elt.value = 1;
    }
    
    let item = document.getElementById(idItemCalculo);
    let precoUnidade = item.children[0].children[1].children[1].children[1].textContent;
    precoUnidade = parseFloat(precoUnidade);
    let subtotal = item.children[1].children[1].children[1];

    subtotal.textContent = (precoUnidade * elt.value).toFixed(2);

    let total = document.getElementsByClassName('subprecos');
    console.log(total)
    calcularTotal(total);
}

function calcularTotal(lista){
    let precoTotal = document.getElementById('precoTotal')
    let soma = 0;
    console.log(lista)


    for(var i=0; i<lista.length;i++){
        if(lista[i].textContent != "" && lista[i].textContent != null ){
                soma += parseFloat(lista[i].textContent)
        }
           
    }
    precoTotal.textContent = soma.toFixed(2)

   
}

function receberItems(){
    let nomes = localStorage.getItem('listaDeItensCart').split(",")
    let listaDeItems = []
    console.log(nomes)
    for(var i=0; i<nomes.length;i++){
        let nome = nomes[i]
        for(j=0; j< listaDeFrutas.length; j++){
            console.log(nome)
            var frutaNome = listaDeFrutas[j].nome.toLowerCase().replace(/\s/g, '')
            var fruta = listaDeFrutas[j];
            if(frutaNome == nome){
                if(!listaDeItems.includes(fruta)){
                    console.log("Passei do if")
                    console.log(fruta)
                    listaDeItems.push(fruta)

                }
            }
        }     
    }
    console.log(listaDeItems)
    return listaDeItems
}

function removerItensLocal(nome){
    var listaQueVem= localStorage.getItem('listaDeItensCart').split(',')
    var index=  listaQueVem.indexOf(nome.toLowerCase().replace(/\s/g, ''))
    listaQueVem.splice(index,1)
    console.log(nome)
    localStorage.setItem('listaDeItensCart',listaQueVem)
    console.log(listaQueVem)
}
function adicionarItensLocal(nome){
    console.log("Olha só")
    var listaQueVem= localStorage.getItem('listaDeItensCart').split(',')
    listaQueVem.push(nome.toLowerCase().replace(/\s/g, ''))
    localStorage.setItem('listaDeItensCart',listaQueVem)
    console.log(listaQueVem)
}