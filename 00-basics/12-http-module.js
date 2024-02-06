const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req)

    if(req.url === '/') {
        res.write("Welcome to our home page")
        res.end()
    } else if(req.url === '/about') {
        res.write("A short intro about us...")
        res.end()
    } else {
        res.end(`<h2> Oops </h2> <p> We could not find the page you are looking for </p>`)
    }
})

server.listen(5000)