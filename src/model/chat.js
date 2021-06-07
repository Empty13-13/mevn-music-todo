const { model, Schema, Schema: { Types: { ObjectId } } } = require('mongoose');

const schema = new Schema({
   day: {
      type: String,
      default: '',
   },
   time: {
      type: String,
      default: '',
   },
   text: {
      type: String,
      default: '',
   },
   user: {
      type: ObjectId,
      ref: 'user',
   },
})
module.exports = model('chat', schema);