const { model, Schema, Schema: { Types: { ObjectId } } } = require('mongoose');

const schema = new Schema({
  read: {
    type: Boolean,
    default: 'false',
  },
  event: {
    type: String,
    default: '',
  },
  time: {
    type: String,
    default: '',
  },
});
module.exports = model('notification', schema);
