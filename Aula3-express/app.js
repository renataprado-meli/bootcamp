const express = require('express');
let produtos = require('./produtos');

const app = express();

app.use(express.json());

//GET para verificar os que foram mantidos.
app.get('/', (req, res) => {
    res.status(200).json(produtos);
})

//POST para adicionar 4 produtos, de uma vez.
app.post('/', (req, res) => {
    const content = req.body
    produtos = produtos.concat(content);

    res.status(201).json(produtos);
})

//PUT para modificar um desses produtos.
app.put('/:id', (req, res) => {
    const id = Number(req.params.id);
    const content = req.body;

    const product = produtos.find((produto) => produto.id === id);
    if(!product){
        res.status(400).json({"message": "Produto não encontrado"});
    }

    produtos = produtos.map((produto) => {
        if(produto.id === id){
            return content;
        }
        return produto;
    })
    res.status(200).json(produtos)
})

//DELETE para deletar um desses produtos.
app.delete('/:id', (req, res) => {
    const id = Number(req.params.id);

    const product = produtos.find((produto) => produto.id === id);
    
    if(!product){
        res.status(400).json({"message": "Produto não encontrado"});
    }

    produtos = produtos.filter((produto) => produto.id != id);
    
    res.status(200).json(produtos);
})



app.listen(3000, () => {
    console.log('Hello from express!');
});
