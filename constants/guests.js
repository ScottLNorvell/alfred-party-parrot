const loadYaml = require('../utils/loadYaml')
const guests = loadYaml(`${process.cwd()}/guests.yaml`);

module.exports = guests.map(p => ({ ...p, base: 'guests' }));
