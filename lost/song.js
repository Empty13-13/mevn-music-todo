const {
  model,
  Schema,
  Schema: {
    Types: { ObjectId },
  },
} = require('mongoose');

const schema = new Schema({
  title: {
    type: String,
    default: '',
  },
  lyrics: {
    type: String,
    default: '',
  },
  genre: [{
    type: ObjectId,
    ref: 'Genre',
  }],
  author:
    {
      type: ObjectId,
      ref: 'Author',
    },
  sets: [
    {
      type: ObjectId,
      ref: 'Set',
    },
  ],
});

module.exports = model('Song', schema);
