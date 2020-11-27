// Armazenar e envair dados para outro html

document.querySelector("#botao_confirmar").addEventListener("click",()=>{

    // declaração de cada variável de input
    const i1 = document.querySelector("#in1").value + " " + 
    document.querySelector("#in1_1").value; //Nome+Sobrenome
    const i2 = document.querySelector("#in2").value; //RG
    const i3 = document.querySelector("#in3").value + ", Nº" + 
    document.querySelector("#in3_1").value; //Endereço+, nº
    const i4 = document.querySelector("#in4").value; //Estado
    const i5 = document.querySelector("#in5").value; //Bairro
    const i6 = document.querySelector("#in6").value; //Cidade

    //const i7 = document.querySelector("#in7").value; //Forma de Pagamento
    const i8 = document.querySelector("#precoTotal").value; //Total


    // Passar variáveis por URL
    window.location.href = "confirm.html?i1=" + i1
    + "&in2=" + i2
    + "&in3=" + i3
    + "&in4=" + i4
    + "&in5=" + i5
    + "&in6=" + i6
    /*+ "&in7=" + i7*/
    + "&in8=" + i8;
})