'use strict';
const alfy = require('alfy');

const mergedParrots = require('./constants/merged');
const getFilteredParrots = require('./utils/filter');
const { mapForMarkdown } = require('./utils/map');

const result = getFilteredParrots(mergedParrots, alfy.input)
  .map(mapForMarkdown());

alfy.output(result);
