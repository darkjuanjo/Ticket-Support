const router = require('express').Router();
const { isLoggedOut } = require('../helpers/auth');

router.get('/', isLoggedOut,(req, res) => {
    res.render('login', req.session.flash);
});

module.exports = router;