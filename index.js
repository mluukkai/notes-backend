const http = require('http')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const middleware = require('./utils/middleware')
const Note = require('./models/note')

app.use(cors())
app.use(bodyParser.json())
app.use(express.static('build'))
app.use(middleware.error)

const mongoUrl = process.env.MONGODB_URI
mongoose.connect(mongoUrl, { useMongoClient: true })
mongoose.Promise = global.Promise

const notesRouter = require('./controllers/notes')
app.use('/api/notes', notesRouter)

app.use(middleware.error)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})