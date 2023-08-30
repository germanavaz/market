const catalogo = [{
    id: 1,
    marca: "@germ4na",
    nome: "Adesivo Gatinhos",
    preco: 7,
    imagem: "product-1.png",
    adesivo: true,
}, 
{
    id: 2,
    marca: "@germ4na",
    nome: "Adesivo Gatinho na Nave",
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

for (produto of catalogo) {
    const cartaoProduto = `
        <div id="card-produto">
            <img src="./assets/img/${produto.imagem}" alt="">
            <p>${produto.marca} </p>
            <p>${produto.nome}</p>
            <p>$${produto.preco}</p>
            <button>Adicionar</button>
        </div>
    `
    
    document.getElementById("container-produto").innerHTML += cartaoProduto;
}
