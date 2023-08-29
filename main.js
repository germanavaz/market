const catalogo = [{
    id: 1,
    marca: "Farm",
    nome: "Roupa",
    preco: 60,
    imagem: "product-1.jpg",
    feminino: true,
}, 
{
    id: 2,
    marca: "Farm",
    nome: "Roupa",
    preco: 70,
    imagem: "product-2.jpg",
    feminino: true,
}
]

for (produto of catalogo) {
    const cartaoProduto = `
        <div id="card-produto">
            <img src="./assets/img/${produto.imagem}" alt="">
            <p>${produto.marca}</p>
            <p>${produto.nome}</p>
            <p>$${produto.preco}</p>
            <button>Adicionar</button>
        </div>
    `
    
    document.getElementById("container-produto").innerHTML += cartaoProduto;
}
