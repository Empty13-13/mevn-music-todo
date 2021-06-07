const genericCrud = require("./generic.controller");
const { song } = require("../model");

module.exports = {
  ...genericCrud(song),
};
