const server = require('./server')

const port = process.env.PORT || 4000

server.listen(port, () => console.log(`\n* Server running on port ${port} *\n`))