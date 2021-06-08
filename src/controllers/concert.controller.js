const genericCrud = require("./generic.controller");
const { concert } = require("../model");


module.exports = {
  ...genericCrud(concert),
};
