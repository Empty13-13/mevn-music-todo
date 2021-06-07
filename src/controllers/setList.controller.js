const genericCrud = require("./generic.controller");
const { setList } = require("../model");

module.exports = {
  ...genericCrud(setList),
};
