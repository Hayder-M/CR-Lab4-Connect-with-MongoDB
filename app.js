const express = require('express')
const app = express()
const port = 5000
const products = require('./data.js')
const products_routes = require('./routes/products.js')
const mongoose = require('mongoose')

/*const logger = (req, res, next) => {
    console.log(req.url)
    console.log(req.params)
    console.log(req.query)
    next()
}*/

/*const logger = (req, res, next) => {
    console.log(req.url)
    console.log(req.params)
    console.log(req.query)
    res.send('Custom About page')
}*/

/*const auth = (req, res, next) => {
    const user = req.query.user
    if (user === 'admin') {
        req.user = { name: 'admin', id: '1' }
        next()
    } else {
        res.status(401).send('Unauthorized')
    }
}*/

app.listen(5000, () => {
    console.log('server is listening on port 5000')
})

//Envoi le Contenu de .env
require('dotenv').config()

//List des Produits
/*app.get('/api/products', (req, res) => {
    res.json([
        { name: 'iPhone', price: 800 },
        { name: 'iPad', price: 650 },
        { name: 'iWatch', price: 750 }
    ])
})*/

//POST
/*app.use(express.json()) // parse json body content
app.post('/api/products', (req, res) => {
    const newProduct = {
        id: products.length + 1,
        name: req.body.name,
        price: req.body.price
    }
    products.push(newProduct)
    res.status(201).json(newProduct)
})*/


//GET
//Renvoi Tout Le Contenu des Produits
/*app.get('/api/products', (req, res) => {
    res.json(products)
})*/

//Renvoi Une Partie des Produits
/*app.get('/api/products', (req, res) => {
    const partial_products = products.map(product => {
        return { id: product.id, name: product.name }
    })
    res.json(partial_products)
})*/

//Renvoi Par ID
/*app.get('/api/products/:productID', (req, res) => {
    const id = Number(req.params.productID)
    const product = products.find(product => product.id === id)
    res.json(product)
})*/

//Renvoi Statut 404
/*app.get('/api/products/:productID', (req, res) => {
    const id = Number(req.params.productID)
    const product = products.find(product => product.id === id)

    if (!product) {
        return res.status(404).send('Product not found')
    }
    res.json(product)
})*/

//Récupérer La Chaine de Requete
/*app.get('/api/query', (req, res) => {
    const name = req.query.name.toLowerCase()
    const products_result = products.filter(product => product.name.toLowerCase().includes(name))

    if (products_result.length < 1) {
        return res.status(200).send('No products matched your search')
    }
    res.json(products_result)
})*/

//Renvoi un Message
/*app.get('/about', (req, res) => {
    console.log(req.url)
    console.log(req.params)
    console.log(req.query)
    return res.send('About Page')
})*/
/*app.use(logger) // execute your middleware for all requests

app.get('/about', (req, res) => {
    return res.send('About Page')
})*/
/*app.get('/about', logger, (req, res) => {
    return res.send('About Page')
})*/

//Renvoi l'Auth
/*app.use(auth)
app.get('/about', (req, res) => {
    console.log(req.user)
    return res.send('About Page')
})*/

//Read All
/*app.get('/api/products', (req, res) => {
    res.json(products)
})*/

//Read Un Produit
/*app.get('/api/products/:productID', (req, res) => {
    const id = Number(req.params.productID)
    const product = products.find(product => product.id === id)

    if (!product) {
        return res.status(404).send('Product not found')
    }
    res.json(product)
})*/

//Update File
/*app.use(express.json()) // parse json body content

app.put('/api/products/:productID', (req, res) => {
    const id = Number(req.params.productID)
    const index = products.findIndex(product => product.id === id)
    if (index === -1) {
        return res.status(404).send('Product not found')
    }
    const updatedProduct = {
        id: products[index].id,
        name: req.body.name,
        price: req.body.price
    }
    products[index] = updatedProduct
    res.status(200).json('Product updated')
})*/

//Delete File
/*app.use(express.json()) // parse json body content
app.delete('/api/products/:productID', (req, res) => {
    const id = Number(req.params.productID)
    const index = products.findIndex(product => product.id === id)
    if (index === -1) {
        return res.status(404).send('Product not found')
    }
    products.splice(index, 1)
    res.status(200).json('Product deleted')
})*/

//Séparation
/*app.get('/api/products/:productID', (req, res) => {
    const id = Number(req.params.productID)
    const product = products.find(product => product.id === id)

    if (!product) {
        return res.status(404).send('Product not found')
    }
    res.json(product)
})*/

//Utilisation des Routes
app.use(express.json())
app.use('/api/products', products_routes)

//Connection à La Base de Donnée en Utilisat MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then((result) => app.listen(5000))
    .catch((err) => console.log(Error))