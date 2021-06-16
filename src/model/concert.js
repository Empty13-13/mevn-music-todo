const { model, Schema, Schema: { Types: { ObjectId } } } = require('mongoose');

const schema = new Schema({
  title: {
    type: String,
    default: '',
  },
  location: {
    type: ObjectId,
    ref: 'locations',
  },
  setLists: {
    type: [ObjectId],
    ref: 'setList',
  },
});
module.exports = model('concert', schema);
