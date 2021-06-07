const genericCrud = require("./generic.controller");
const { locations } = require("../model");

module.exports = {
  ...genericCrud(locations),
};
