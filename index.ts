import express from 'express'
const server = express()
server.get('/', (req, res) => {
	res.setHeader('Content-Type', 'text/plain')
	res.write('Hello Bro!')
	res.end()
})
server.listen(8000, 'localhost', () => console.log('http://localhost:8000'))
