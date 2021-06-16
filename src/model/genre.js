const { model, Schema, Schema: { Types: { ObjectId } } } = require('mongoose');

const schema = new Schema({
  title: {
    type: String,
    unique: true,
    default: '',
  },
});
module.exports = model('genre', schema);
