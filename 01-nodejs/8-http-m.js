const http = require('http');

const server = http.createServer((req,res) => {
    if (req.url === '/') {
        res.end('Welcome to our home page!')
    } else if (req.url === '/about') {
        res.end('Here is our short story.')
    } else {
        res.end(`<h1>Oops! 404</h1><a href="/">Home</a>`);
    }
})

server.listen(8080, () => {
    console.log('Server is running on port 8080. http://localhost:8080');
})