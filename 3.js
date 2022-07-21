let products = [
    { name: 'Macbook', price: 1300, quantity: 40, colors: ['silver', 'black', 'white'] }, 
    { name: 'Iphone', price: 1000, quantity: 50, colors: ['silver', 'red', 'white'] },
    { name: 'Pendrive', price: 10, quantity: 10, colors: [] },
    { name: 'Headset', price: 50, quantity: 0, colors: ['black'] },
    { name: 'Mouse', price: 20, quantity: 5, colors: ['white', 'black', 'blue'] },
    { name: 'Tablet', price: 500, quantity: 20, colors: ['white', 'black'] },
    { name: 'USB adaptor', price: 5, quantity: 0, colors: [] },
    { name: 'Keyboard', price: 30, quantity: 35, colors: ['white'] },
    { name: 'Gamepad', price: 30, quantity: 25, colors: ['black', 'silver'] },
    { name: 'Monitor', price: 200, quantity: 3, colors: [] },
]
//1. Adicione um ID exclusivo a cada produto começando em 1.

function addId(){
    let id = 1;
    products.forEach(product => {
        product.id = id;
        id++;
    });
}

//2. Imprima o nome de cada um dos produtos no console.

function printName(){
    products.forEach(product => {
        console.log(product.name);
    });
}

//3. Imprima no console o produto com o id 3.
function printId3(){
    console.log(products.filter(product => product.id === 3))
}

//4. Imprima no console os produtos com a cor “black”.
function printBlack(){
    console.log(products.filter(product => product.colors.includes('black')))
}

//5. Imprima no console os produtos que não possuem cor.
function printNoColor(){
    console.log(products.filter(product => product.colors.length === 0))
}

addId();
printName();
printId3();
printBlack();
printNoColor();