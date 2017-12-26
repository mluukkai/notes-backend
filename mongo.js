const mongoose = require('mongoose')

const url = 'mongodb://heroku_hccn7hlr:2q9481asitahvv50vp7b9kdbeu@ds127968.mlab.com:27968/heroku_hccn7hlr'

mongoose.connect(url, { useMongoClient: true });
mongoose.Promise = global.Promise;

/*
const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean
})

const Note = mongoose.model('Note', noteSchema);
*/


const Note = mongoose.model('Note', { 
  content: String,
  date: Date,
  important: Boolean 
})


/*
const note = new Note({
  content: 'HTTP-protokollan tärkeimmät metodit ovat GET ja POST',
  date: new Date(),
  important: true
})

note
  .save()
  .then(result=>{
    console.log('note saved!')
    mongoose.connection.close()
  })
*/

Note
  .find({ important: true }, '-__v')
  .then(result => {
    result.forEach(note => {
      console.log(note)
    })
    mongoose.connection.close()
  })

/*
Cat.find({}).then(result=>{
  result.forEach(r => console.log(r.name) )
  mongoose.connection.close()
})
*/