const { model, Schema } = require('mongoose');

const schema = new Schema({
  title: {
    type: String,
    default: '',
  },
  adress: {
    type: String,
    default: '',
  },
});
module.exports = model('locations', schema);
