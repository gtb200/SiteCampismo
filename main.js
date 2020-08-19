"use strict";

(function()
{
    window.addEventListener("load", main);
}());

function main() {
    let buttons = document.getElementsByClassName("escolha");
    setupButtonsInfo(buttons);
    document.getElementById("calcular").addEventListener("click",calcularPreco);
    loadImages();

    
}

function calcularPreco(ev){
    let inputs = document.getElementsByClassName("calc");
    let diasAux=inputs[0].value;
    let dias=[];
    let preçoFinal=0;

    if(diasAux==""){
        return;
    }
    dias=calcularDias(diasAux);
    console.log(dias);
    console.log(preçoFinal);

    if(inputs[1].value!=""){
        preçoFinal+= dias[0]*3*inputs[1].value;
        preçoFinal+= dias[1]*15*inputs[1].value;
        preçoFinal+= dias[2]*45*inputs[1].value;
        console.log(preçoFinal);
    }
    if(inputs[2].value!=""){
        preçoFinal+= dias[0]*4*inputs[2].value;
        preçoFinal+= dias[1]*20*inputs[2].value;
        preçoFinal+= dias[2]*60*inputs[2].value;
    }
    if (inputs[3].value!=""){
        preçoFinal+= dias[0]*5*inputs[3].value;
        preçoFinal+= dias[1]*30*inputs[3].value;
        preçoFinal+= dias[2]*80*inputs[3].value;
    }
    if(inputs[4].value!=""){

        preçoFinal+=diasAux*inputs[4].value;
    }
    console.log(preçoFinal);
    document.getElementsByClassName("resultado")[0].textContent="Preço final: "+preçoFinal+"€";
}
function loadImages(){
    let imagens=document.getElementsByTagName("img");
    for (let i = 0; i < imagens.length; i++) {
        imagens[i].addEventListener("loaded",load);
    }
}
function load(ev) {
    ev.src+="";
}
function calcularDias(dias) {
    let meses=0,semanas=0;
    while (dias>29){
        dias-=30;
        meses+=1;
    }
    while (dias>6){
        dias-=7;
        semanas+=1;
    }
    return [dias,semanas,meses];
}

function setToggled(ev) {
    let texto = document.getElementsByClassName("infor")[0];
    let imagem= document.getElementsByClassName("imgInfo")[0];
    let titulo=document.getElementsByClassName("tituloInfo")[0];

    imagem.src= imagem.src.slice(0,-5);
    imagem.style.maxWidth="80%";
    imagem.style.maxHeight="80%";
    imagem.style.marginLeft="10%";
    imagem.style.marginRight="10%";

    console.log(imagem.src);
    if (ev.currentTarget.innerText == "Eletricidade"){
        imagem.src+="9.jpg";
        titulo.textContent="Eletricidade"
        texto.textContent="Espalhado ao longo do acampamento tem disponível pomadas eletricas" +
            " quais podera usar livremente. Basta requesitar na receção o adaptador para começar" +
            " a usar."

    }else if (ev.currentTarget.innerText == "Água quente"){
        imagem.src+="8.jpg";
        titulo.textContent="Água quente"

        texto.textContent="Nos nossos estabelecimentos sanitários, mantidos regularmente" +
            " em boas condições, temos incluído água quente para qualquer pessoa que pretenda" +
            " utilizar."
    }else if (ev.currentTarget.innerText == "Internet grátis"){
        imagem.src+="7.jpg";
        titulo.textContent="Internet grátis"

        texto.textContent="Na receção temos Internet gratuita para qualquer pessõa que prete" +
            "nda utilizar. Tendo lá exposta a sua respetiva palavra-passe."
    }else if (ev.currentTarget.innerText == "Excelente localização"){
        imagem.src+="6.jpg";
        titulo.textContent="Excelente localização"

        texto.textContent="O nosso parque sítua se rodeado de ótimas vistas e mar. Tudo isto ajuda" +
            " a ter uma boa experiência de acampamento, " +
            "visto que, ter uma zona balnear de excelentes condições acrescenta outra camada ao" +
            " seu acampamento."
    }else if (ev.currentTarget.innerText == "Grelhadores"){
        imagem.src+="5.jpg";
        titulo.textContent="Grelhadores"

        texto.textContent="Ao longo do nosso parque vai encontrar grelhadores qual podera" +
            " utilizar para efetuar os seus delíciosos churrascos. Estes encontram-se" +
            " em boas condições e com grelha dísponivel."
    }else if (ev.currentTarget.innerText == "Parque infantil"){
        imagem.src+="4.jpg";
        titulo.textContent="Parque infantil"

        texto.textContent="Ao lado da receção encontra-se um mini parque infantil em que" +
            " poderá deixar as suas crianças a divertirem-se."
    }


}

function setupButtonsInfo(botoes) {
    for (let i = 0; i < botoes.length; i++) {
        botoes[i].addEventListener("click",setToggled);
    }
}

