const router = require('express').Router();
const bookRoutes = require('./books');

router.use('/', bookRoutes);

module.exports = router; 