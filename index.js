const http = require('http')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const middleware = require('./utils/middleware')
const Note = require('./models/note')
const config = require('./utils/config')

app.use(cors())
app.use(bodyParser.json())
app.use(express.static('build'))
app.use(middleware.logger)

mongoose.connect(config.mongoUrl, { useMongoClient: true })
mongoose.Promise = global.Promise

const notesRouter = require('./controllers/notes')
app.use('/api/notes', notesRouter)

app.use(middleware.error)

const PORT = config.port
const server = http.createServer(app)

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

server.on('close', () => {
  mongoose.connection.close()
})

module.exports = {
  app, server
}