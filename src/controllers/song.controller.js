const genericCrud = require("./generic.controller");
const { Song } = require("../model");

module.exports = {
  ...genericCrud(Song),
};
