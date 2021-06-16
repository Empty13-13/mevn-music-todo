const { model, Schema, Schema: { Types: { ObjectId } } } = require('mongoose');

const schema = new Schema({
  title: {
    type: String,
    default: '',
  },
  text: {
    type: String,
    default: 'Дело',
  },
  user: {
    type: ObjectId,
    ref: 'user',
  },
});
module.exports = model('eventDay', schema);
