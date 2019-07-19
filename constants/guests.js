const guests = require('../guests.json');

module.exports = guests.map(p => ({ ...p, base: 'guests' }));
