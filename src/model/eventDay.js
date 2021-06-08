const { model, Schema, Schema: { Types: { ObjectId } } } = require('mongoose');

const schema = new Schema({
  title: {
    type: String,
    default: '',
  },
  calendar: {
    type: ObjectId,
    ref: 'calendar',
  },
  user: {
    type: ObjectId,
    ref: 'user',
  },
});
module.exports = model('eventDay', schema);
