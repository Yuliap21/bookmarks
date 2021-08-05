const { Schema, model} = require ('mongoose');

const bookmarkSchema = new Schema({
  title: {type: String, required: true, unique: true},
  body: String
}, {
  timestamps: true
})

module.exports = model('Bookmark', bookmarkSchema)
