const express = require('express')
const app = express()
const authroize = require('./src/authorize')
const morgan = require('morgan')
const newProducts = []
const people = require('./src/routes/people')

for(let i = 0; i < 10000 ;i ++) {
    newProducts.push({
        id: i + 1,
        name: `Product ${i + 1}`,
        price: i + 100
    })
}

const logger = (req,res,next) => {
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(`${method},${url}, ${time}`)
    next()
}
// send json
// app.get('/',logger,(req,res) => {
//     res.json({
//         message: 'Hello World!'
//     })
// })

// req -> middleware -> res
// use vs route
// options - our own/ express /third party
app.use(morgan('tiny'))
app.use([logger,authroize])

app.use('/api/people', people)

// query by id
app.get('/api/products/:id',(req,res) => {
    const id = req.params.id
    const target = newProducts.find(i => String(i.id) === id)
    res.json(target)
})

// query string
app.get('/api/products', (req,res) => {   
    res.json(newProducts)
})

app.get('/api/products/:productId/review/:reviewId',(req,res) => {
    const {productId,reviewId} = req.params
    console.log(`${productId},${reviewId}`)
    res.json('hell world')
})

app.get('/api/query',(req,res) => {
    console.log('query = ',req.query)
    res.send('hello')
})
// setup static files
app.use(express.static('./public'))
// post
// put
// delete
// all
// use for middleware

// app.all('*', (req,res) => {
//     res
//     .status(404)
//     .send("<h1>Resource not found.</h1>")
// })

app.listen(5000,() => {
    console.log(`http://localhost:5000`)
})