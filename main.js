const catalogo = [{
    id: 1,
    marca: "@germ4na",
    nome: "Adesivo Gatinho na Nave",
    preco: 7,
    imagem: "product-1.png",
    adesivo: true,
}, 
{
    id: 2,
    marca: "@germ4na",
    nome: "Adesivo Gatinhos",
    preco: 7,
    imagem: "product-2.png",
    adesivo: true,
}, 
{
    id: 3,
    marca: "@germ4na",
    nome: "Boton Astronauta",
    preco: 10,
    imagem: "product-3.png",
    adesivo: false,
}, 
{
    id: 4,
    marca: "@germ4na",
    nome: "Boton Mar e Sol",
    preco: 10,
    imagem: "product-4.png",
    adesivo: false,
}, 
{
    id: 5,
    marca: "@germ4na",
    nome: "Adesivo Astronauta",
    preco: 7,
    imagem: "product-5.png",
    adesivo: true,
}, 
{
    id: 6,
    marca: "@germ4na",
    nome: "Boton Nave Espacial",
    preco: 7,
    imagem: "product-6.png",
    adesivo: true,
}
]

// MENU CARRINHO 

const botaoFecharCarrinho = document.getElementById("fechar-carrinho");
const botaoAbrirCarrinho = document.getElementById("abrir-carrinho");

function toggleCarrinho() {
    const carrinho = document.getElementById("carrinho");
    carrinho.classList.toggle('active');

}

botaoAbrirCarrinho.addEventListener('click', toggleCarrinho);
botaoFecharCarrinho.addEventListener('click', toggleCarrinho);

function adicionarAoCarrinho(idProduto) {
    //achar no catalogo o produto com o mesmo id 
    const produt = catalogo.find(p => p.id === idProduto);
    const containerProdutosCarrinho = document.getElementById("produtos-carrinho");
    const cartaoProdutoCarrinho = ` <article>
    <i class="fa-solid fa-xmark" style="color:black; position: absolute; top: 0; right: 0; padding: .2rem .2rem 0 0;" onMouseOver="this.style.color='#FF0000'" onMouseOut="this.style.color='#000'"></i>
    <img src="./assets/img/${produt.imagem}" alt="Carrinho: ${produt.nome}">
    <div>
        <p id="nome-produto-carrinho">${produt.nome}</p>
        <p>R$${produt.preco}</p>
    </div>
    </article>`;

    containerProdutosCarrinho.innerHTML += cartaoProdutoCarrinho;
}

// CARTÃO PRODUTO 

function renderizarCatalogo() {
    for (produto of catalogo) {
        const cartaoProduto = `
            <div id="card-produto-${produto.id}" class="card-produto">
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

