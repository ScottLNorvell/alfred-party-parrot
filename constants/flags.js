const flags = require('../flags.json');

module.exports = flags.map(p => ({ ...p, base: 'flags' }));
