const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('welcome to our home page')
  }
  if (req === '/about') {
    res.end('here is the short history')
  }
  res.end('<h1>oops<h1>')
})

server.listen(5000)