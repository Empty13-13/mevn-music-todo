const genericCrud = require("./generic.controller");
const { Set } = require("../model");

module.exports = {
  ...genericCrud(Set),
};
