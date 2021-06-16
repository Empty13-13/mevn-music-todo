const { model, Schema, Schema: { Types: { ObjectId } } } = require('mongoose');

const schema = new Schema({
  value: {
    type: String,
    unique: true,
    default: 'USER',
  },
});
module.exports = model('rulLevel', schema);
