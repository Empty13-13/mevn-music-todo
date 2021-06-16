const { model, Schema } = require('mongoose');

const schema = new Schema({
  name: {
    type: String,
    unique: true,
    default: '',
  },
});
module.exports = model('Author', schema);
