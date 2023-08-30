const catalogo = [{
    id: 1,
    nome: "Adesivo Gatinhos",
    preco: 7,
    imagem: "product-1.png",
    adesivo: true,
}, 
{
    id: 2,
    nome: "Adesivo Gatinho na Nave",
    preco: 7,
    imagem: "product-2.png",
    adesivo: true,
}, 
{
    id: 3,
    nome: "Boton Astronauta",
    preco: 10,
    imagem: "product-3.png",
    adesivo: false,
}, 
{
    id: 4,
    nome: "Boton Mar e Sol",
    preco: 10,
    imagem: "product-4.png",
    adesivo: false,
}
]

for (produto of catalogo) {
    const cartaoProduto = `
        <div id="card-produto">
            <img src="./assets/img/${produto.imagem}" alt="">
            <p>${produto.nome}</p>
            <p>$${produto.preco}</p>
            <button>Adicionar</button>
        </div>
    `
    
    document.getElementById("container-produto").innerHTML += cartaoProduto;
}
