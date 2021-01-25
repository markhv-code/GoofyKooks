const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const surfBreaksRouter = require('./surf_breaks.js');

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/surf_breaks', surfBreaksRouter);

module.exports = router;