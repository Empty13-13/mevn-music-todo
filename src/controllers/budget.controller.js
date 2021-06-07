const genericCrud = require("./generic.controller");
const { budget } = require("../model");

module.exports = {
  ...genericCrud(budget),
};
