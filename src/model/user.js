const { Schema, model } = require('mongoose');

const User = new Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  rulLevel: [{ type: String, ref: 'rulLevel' }],
});

module.exports = model('User', User);
