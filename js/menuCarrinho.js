const botaoFecharCarrinho = document.getElementById("fechar-carrinho");
const botaoAbrirCarrinho = document.getElementById("abrir-carrinho");

function toggleCarrinho() {
    const carrinho = document.getElementById("carrinho");
    carrinho.classList.toggle('active');

}

botaoAbrirCarrinho.addEventListener('click', toggleCarrinho);
botaoFecharCarrinho.addEventListener('click', toggleCarrinho);