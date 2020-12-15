// conteudo principal mudança de iamgens

var imagens = document.querySelector('.vazia2');

var intervalo = 9000;

imagem1();


function imagem1(){
    imagens.src = './IMAGENS/imagem1.jpg'
    setTimeout('imagem2()', intervalo);
}

function imagem2(){
    imagens.src = './IMAGENS/imagem2.jpg'
    setTimeout('imagem3()', intervalo);
}

function imagem3(){
    imagens.src = './IMAGENS/imagem3.jpg'
    setTimeout('imagem4()', intervalo);
}

function imagem4(){
    imagens.src = './IMAGENS/imagem4.jpg'
    setTimeout('imagem1()', intervalo);
}


