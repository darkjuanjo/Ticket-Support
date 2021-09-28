const router = require('express').Router();
const { Ticket, User } = require('../../../Models');

router.get('/', (req, res) => {
  // Access our User model and run .findAll() method)
  Ticket.findAll({
    attributes: [
      'id',
      'title',
      'category',
      'content',
      'status',
      'created_at'
    ],
    order: [['created_at']], //oldest to newest
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

  router.get('/:id', (req, res) => {
    Ticket.findAll({
      attributes: [
        'id',
        'title',
        'category',
        'content',
        'status',
        'created_at'
      ],
      order: [['created_at']], //oldest to newest
      include: [
        {
          model: User,
          attributes: ['username']
        }
      ],
      where: {
        UserId: req.params.id
      }
    })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No user found with this id' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

router.post('/', (req, res) => {
    Ticket.create({
      title: req.body.title,
      category: req.body.category,
      content: req.body.content,
      status: req.body.status,
      UserId: req.body.user
    })
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

router.put('/:id', (req, res) => {
    
    Ticket.update(req.body, {
      where: {
        id: req.params.id
      }
    })
      .then(dbUserData => {
        if (!dbUserData[0]) {
          res.status(404).json({ message: 'No user found with this id' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

router.delete('/:id', (req, res) => {
  Ticket.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  });

  module.exports = router;