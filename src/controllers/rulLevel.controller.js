const genericCrud = require("./generic.controller");
const { rulLevel } = require("../model");



module.exports = {
  ...genericCrud(rulLevel),
};
