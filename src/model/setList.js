const { model, Schema, Schema: { Types: { ObjectId } } } = require('mongoose');

const schema = new Schema({
  title: {
    type: String,
    default: '',
  },
  timeUse: {
    type: String,
    default: '',
  },
  overUse: {
    type: String,
    default: '',
  },
  location: {
    type: ObjectId,
    ref: 'locations',
  },
  songs: {
    type: [ObjectId],
    ref: 'song',
  },
});
module.exports = model('setList', schema);
