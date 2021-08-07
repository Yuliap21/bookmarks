const { Schema, model} = require ('mongoose');

const bookmarkSchema = new Schema({
  name: {type: String, required: true, unique: true},
  body: String
}, {
  timestamps: true
})

module.exports = model('Bookmark', bookmarkSchema)
