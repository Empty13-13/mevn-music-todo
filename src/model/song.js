const { model, Schema, Schema: { Types: { ObjectId } } } = require('mongoose');

const schema = new Schema({
  author: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
  text: {
    type: String,
    default: '',
  },
  user: {
    type: [ObjectId],
    ref: 'user',
  },
  genre: {
    type: [ObjectId],
    ref: 'genre',
  },
});
module.exports = model('song', schema);
