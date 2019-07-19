const parrots = require('../parrots.json');

module.exports = parrots.map(p => ({ ...p, base: 'parrots' }));
