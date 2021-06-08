const genericCrud = require("./generic.controller");
const { songDescription } = require("../model");

module.exports = {
  ...genericCrud(songDescription),
};
