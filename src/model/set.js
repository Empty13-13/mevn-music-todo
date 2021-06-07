const { model, Schema, Schema: { Types: { ObjectId } } } = require('mongoose');

const schema = new Schema({
  title: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  songs: [{
    type: ObjectId,
    ref: 'Song',
  },
  ],
});

module.exports = model('Set', schema);
