const { model, Schema, Schema: { Types: { ObjectId } } } = require('mongoose');

const schema = new Schema({
   title: {
      type: String,
      default: '',
   },
})
module.exports = model('budget', schema);