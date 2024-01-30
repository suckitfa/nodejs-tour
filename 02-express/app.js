const express = require('express')
const app = express()

app.get('/',(req,res) => {
    res.json({
        message: 'Hello World!'
    })
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