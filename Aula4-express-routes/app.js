const express = require('express')

const app = express();
const productsRoute = require('./routes/products')

app.use('/api/products', productsRoute)

app.listen(3000, () => {
    console.log('Hello from express!')
})