const { model, Schema, Schema: { Types: { ObjectId } } } = require('mongoose');

const schema = new Schema({
   title: {
      type: String,
      default: '',
   },
   concert: {
      type: [ObjectId],
      ref: 'concert',
   },
   repetition: {
      type: ObjectId,
      ref: 'repetition',
   },
   eventDay: {
      type: [ObjectId],
      ref: 'enevtDay',
   },
})
module.exports = model('calendar', schema);