const catalogo = [{
    id: "1",
    marca: "@germ4na",
    nome: "Adesivo Gatinho na Nave",
    preco: 7,
    imagem: "product-1.png",
    adesivo: true,
}, 
{
    id: "2",
    marca: "@germ4na",
    nome: "Adesivo Gatinhos",
    preco: 7,
    imagem: "product-2.png",
    adesivo: true,
}, 
{
    id: "3",
    marca: "@germ4na",
    nome: "Boton Astronauta",
    preco: 10,
    imagem: "product-3.png",
    adesivo: false,
}, 
{
    id: "4",
    marca: "@germ4na",
    nome: "Boton Mar e Sol",
    preco: 10,
    imagem: "product-4.png",
    adesivo: false,
}, 
{
    id: "5",
    marca: "@germ4na",
    nome: "Adesivo Astronauta",
    preco: 7,
    imagem: "product-5.png",
    adesivo: true,
}, 
{
    id: "6",
    marca: "@germ4na",
    nome: "Boton Nave Espacial",
    preco: 7,
    imagem: "product-6.png",
    adesivo: true,
}
]

// MENU CARRINHO 

const idsProdutoCarrinhoComQuantidade = {

}

const botaoFecharCarrinho = document.getElementById("fechar-carrinho");
const botaoAbrirCarrinho = document.getElementById("abrir-carrinho");

function toggleCarrinho() {
    const carrinho = document.getElementById("carrinho");
    carrinho.classList.toggle('active');

}

botaoAbrirCarrinho.addEventListener('click', toggleCarrinho);
botaoFecharCarrinho.addEventListener('click', toggleCarrinho);


function removerDoCarrinho(idProduto) {
    delete idsProdutoCarrinhoComQuantidade[idProduto];
    atualizarPrecoCarrinho();
    renderizarProdutosCarrinho();
}

function incrementarQuantidadeProduto(idProduto) {
    idsProdutoCarrinhoComQuantidade[idProduto]++;
    atualizarPrecoCarrinho();
    atualizarInformacaoQuantidade(idProduto);
}

function decrementarQuantidadeProduto(idProduto) {
    if (idsProdutoCarrinhoComQuantidade[idProduto] === 1) {
        removerDoCarrinho(idProduto);
        return;
    }
    idsProdutoCarrinhoComQuantidade[idProduto]--;
    atualizarPrecoCarrinho();
    atualizarInformacaoQuantidade(idProduto);
}

function atualizarInformacaoQuantidade(idProduto) {
    document.getElementById(`quantidade-${idProduto}`).innerText = idsProdutoCarrinhoComQuantidade[idProduto];
}

function desenharProdutoNoCarrinho(idProduto) {
    //achar no catalogo o produto com o mesmo id 
    const produt = catalogo.find(p => p.id === idProduto);
    const containerProdutosCarrinho = document.getElementById("produtos-carrinho");

    const elementoArticle = document.createElement("article");
    elementoArticle.classList.add("card-carrinho");

    const cartaoProdutoCarrinho = ` 
    <i class="fa-solid fa-xmark remover-item" id="remover-item-${produt.id}"></i>
    <img src="./assets/img/${produt.imagem}" alt="Carrinho: ${produt.nome}">
    <div>
        <p id="nome-produto-carrinho">${produt.nome}</p>
        <p>R$${produt.preco}</p>
    </div>

    <div class="botoes-maisemenos"> 
        <button id="decrementar-produto-${produt.id}">-</button>
        <p id="quantidade-${produt.id}">${idsProdutoCarrinhoComQuantidade[produt.id]}</p>
        <button id="incrementar-produto-${produt.id}">+</button> 

    </div>`;
    atualizarPrecoCarrinho();

    elementoArticle.innerHTML = cartaoProdutoCarrinho;
    containerProdutosCarrinho.appendChild(elementoArticle);

    document.getElementById(`decrementar-produto-${produt.id}`).addEventListener("click", ( ) => decrementarQuantidadeProduto(produt.id));

    document.getElementById(`incrementar-produto-${produt.id}`).addEventListener("click", ( ) => incrementarQuantidadeProduto(produt.id));

    document.getElementById(`remover-item-${produt.id}`).addEventListener("click", ( ) => removerDoCarrinho(produt.id));
}

function renderizarProdutosCarrinho() {
    const containerProdutosCarrinho = document.getElementById("produtos-carrinho");
    containerProdutosCarrinho.innerHTML = " ";

    for (const idProduto in idsProdutoCarrinhoComQuantidade) {
        desenharProdutoNoCarrinho(idProduto);
    }
    

}


function adicionarAoCarrinho(idProduto) {
    if(idProduto in idsProdutoCarrinhoComQuantidade) {
        incrementarQuantidadeProduto(idProduto);
        return;
    }

    //informar ao "dicionário" que tem um novo item no carrinho  
    idsProdutoCarrinhoComQuantidade[idProduto] = 1

    desenharProdutoNoCarrinho(idProduto);

}

function atualizarPrecoCarrinho() {
    const precoCarrinho = document.getElementById("preco-total");
    let precoTotalCarrinho = 0;
    for (const idProdutoNoCarrinho in idsProdutoCarrinhoComQuantidade) {
        precoTotalCarrinho += catalogo.find((p) => p.id === idProdutoNoCarrinho).preco * idsProdutoCarrinhoComQuantidade[idProdutoNoCarrinho];
    }

    precoCarrinho.innerText = `Total: R$${precoTotalCarrinho}`
}

// CARTÃO PRODUTO 

function renderizarCatalogo() {
    for (produto of catalogo) {
        const cartaoProduto = `
            <div id="card-produto-${produto.id}" class="card-produto ${produto.adesivo ? 'adesivo' : 'boton'}">
                <img class ="prod-img" src="./assets/img/${produto.imagem}" alt="">
                <p class="prod-marca">${produto.marca} </p>
                <p class="prod-nome">${produto.nome}</p>
                <p class="prod-preco">R$${produto.preco}</p>
                <button id="adicionar-${produto.id}" class="button-produto"><i class="fa-solid fa-cart-plus"></i></button>
            </div>
        `
        
        document.getElementById("container-produto").innerHTML += cartaoProduto;   
    }

    for (const produto of catalogo) {
        document.getElementById(`adicionar-${produto.id}`).addEventListener("click", ( ) => adicionarAoCarrinho(produto.id));
    }
}

renderizarCatalogo();

