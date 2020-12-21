const loadYaml = require('../utils/loadYaml')
const flags = loadYaml(`${process.cwd()}/flags.yaml`);

module.exports = flags.map(p => ({ ...p, base: 'flags' }));
