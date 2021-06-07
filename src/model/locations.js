const { model, Schema, Schema: { Types: { ObjectId } } } = require('mongoose');

const schema = new Schema({
   title: {
      type: String,
      default: '',
   },
   adress: {
      type: String,
      default: '',
   },
   event: {
      type: String,
      default: '',
   },
})
module.exports = model('locations', schema);