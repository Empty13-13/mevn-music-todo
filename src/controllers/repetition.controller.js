const genericCrud = require("./generic.controller");
const { repetition } = require("../model");

module.exports = {
  ...genericCrud(repetition),
};
