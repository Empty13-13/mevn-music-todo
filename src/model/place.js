const { model, Schema, Schema: { Types: { ObjectId } } } = require('mongoose');

const schema = new Schema({
  title: {
    type: String,
    default: '',
  },
  set: {
    type: ObjectId,
    ref: 'Set',
  },
});

module.exports = model('Place', schema);
