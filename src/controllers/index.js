const song = require('./song.controller');
const setList = require('./setList.controller');
const budget = require('./budget.controller');
const genre = require('./genre.controller');
const locations = require('./locations.controller');
const chat = require('./chat.controller');
const calendar = require('./calendar.controller');
const eventDay = require('./eventDay.controller');
const notification = require('./notification.controller');
const repetition = require('./repetition.controller');
const rulLevel = require('./rulLevel.controller');
const songDescription = require('./songDescription.controller');
const user = require('./user.controller');

module.exports = {
  song, setList, budget, genre, locations, chat, calendar, eventDay, notification, repetition, rulLevel, songDescription, user,
};
