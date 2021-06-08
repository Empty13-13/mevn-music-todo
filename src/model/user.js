const { model, Schema, Schema: { Types: { ObjectId } } } = require('mongoose');

const schema = new Schema({
  title: {
    type: String,
    default: '',
  },
  login: {
    type: String,
    default: '',
  },
  password: {
    type: String,
    default: '',
  },
  rulLevel: {
    type: ObjectId,
    ref: 'rulLevel',
  },
  imgUrl: {
    type: String,
    default: '',
  },
});
module.exports = model('user', schema);
