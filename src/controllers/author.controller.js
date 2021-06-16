const genericCrud = require("./generic.controller");
const { author } = require("../model");

module.exports = {
  ...genericCrud(author),
};
