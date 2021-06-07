const { model, Schema, Schema: { Types: { ObjectId } } } = require('mongoose');

const schema = new Schema({
   title: {
      type: String,
      default: '',
   },
   timeUse: {
      type: String,
      default: '',
   },
   overUse: {
      type: String,
      default: '',
   },
   locations: {
      type: ObjectId,
      ref: 'locations',
   },
   song: {
      type: [ObjectId],
      ref: 'song',
   },
})
module.exports = model('setList', schema);