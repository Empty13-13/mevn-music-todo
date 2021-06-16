const genericCrud = require("./generic.controller");
const { calendar } = require("../model");



module.exports = {
  ...genericCrud(calendar),
};
