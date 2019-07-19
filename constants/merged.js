const parrots = require('./parrots');
const guests = require('./guests');
const flags = require('./flags');

module.exports = [
  ...parrots,
  ...guests,
  ...flags,
];
