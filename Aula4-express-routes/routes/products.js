const express = require('express')
const router = express.Router()
let produtos = require('../produtos.js')

router.use(express.json())

router.get('/', (req,res) => {
    res.status(200).json(produtos)
})

router.get('/:id', (req,res) => {
    const product = produtos.find((produto) => produto.id == req.params.id)
    if(product) {
        return res.status(200).json(product)
    } else {
        return res.status(404).json({message: 'Product not found'})
    }
})

router.post('/', (req,res) => {
    produtos = [...produtos, ...req.body]
    res.status(200).json(produtos)
})

router.put('/:id', (req,res) => {
    const newProduct = req.body;
    const id = req.params.id;
    const product = produtos.filter((produto) => produto.id == id)

    if(!product) {
        res.status(404).json({message: 'Not Found'})
    } else {
        produtos = produtos.map((produto) => {
            if(produto.id == newProduct.id) return newProduct
            return produto
        })
        res.status(200).json(produtos)
    }
})

router.delete('/:id', (req,res) => {
    const id = req.params.id;
    const product = produtos.filter((produto) => produto.id == id)
    if(!product) {
        res.status(404).json({message: 'Not Found'})
    } else {
        produtos = produtos.filter((produto) => produto.id != id)
        res.status(200).json(produtos)
    }
})

module.exports = router