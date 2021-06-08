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
  locations: {
    type: ObjectId,
    ref: 'locations',
  },
});
module.exports = model('repetition', schema);
