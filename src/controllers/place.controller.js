const genericCrud = require("./generic.controller");
const { Place } = require("../model");

module.exports = {
  ...genericCrud(Place),
};
