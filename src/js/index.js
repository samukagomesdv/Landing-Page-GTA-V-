//objetivo 1 - quando o usuario clicar no botao de selecao de plataformas deve abrir uma caixa com os botoes de selecao de plataforma
//passo 1- pegar o botao de selecao de plataformas no js para poder verificar quando o usuario clicar no botao

const botao = document.querySelector(".btn-plataformas");

// passo 2 - pegar o elemento do conteudo que precisa ser mostrado

const elementoPlataformas = document.querySelector(".btn-plataformas .plataformas");

// passo 3 - pegar o clique do usuario no js

botao.addEventListener("click", () => {

    elementoPlataformas.classList.toggle("ativo");

    

});
