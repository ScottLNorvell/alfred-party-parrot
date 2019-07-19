'use strict';
const filterParrot = input => {
  const matcher = new RegExp(input, 'i');
  return ({ name, gif, tip }) =>
    matcher.test(name) ||
    matcher.test(gif) ||
    matcher.test(tip);
};

const getFilteredParrots = (parrots, input) => parrots.filter(filterParrot(input))

module.exports = getFilteredParrots;
