'use strict';

const fs = require('fs');
const yaml = require('js-yaml');

const loadYaml = (fileName) => {
  try {
    return yaml.safeLoad(fs.readFileSync(fileName, 'utf8'));
  } catch (e) {
    console.error('😭');
    return [];
  }
}

module.exports = loadYaml;
