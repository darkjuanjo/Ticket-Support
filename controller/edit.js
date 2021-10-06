const { isloggedIn } = require('../helpers/auth');
const { Ticket } = require('../Models');
const router = require('express').Router();

router.get('/:id', isloggedIn, (req, res) => {
    Ticket.findOne({
        where: {
            id: req.params.id
        }
    }).then(dbData => {
        console.log(dbData);
        const ticket = dbData.dataValues;
        res.render('edit', ticket);
    }).catch(err => {
        res.status(500).json(err);
    });
});

module.exports = router;