const loadYaml = require('../utils/loadYaml')
const parrots = loadYaml(`${process.cwd()}/parrots.yaml`);

module.exports = parrots.map(p => ({ ...p, base: 'parrots' }));
