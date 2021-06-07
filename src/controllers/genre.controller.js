const genericCrud = require("./generic.controller");
const { Genre } = require("../model");

module.exports = {
  ...genericCrud(Genre),
};
