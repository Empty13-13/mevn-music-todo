const { model, Schema, Schema: { Types: { ObjectId } } } = require('mongoose');

const schema = new Schema({
   title: {
      type: String,
      default: '',
   },
   user: {
      type: ObjectId,
      ref: 'user',
   },
   song: {
      type: ObjectId,
      ref: 'song',
   },
   imgUrl: {
      type: String,
      default: '',
   },
})
module.exports = model('songDescription', schema);