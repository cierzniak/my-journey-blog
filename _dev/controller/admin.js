const router = require('express').Router();

const { posts } = require('../data/posts.json');

router.get('/', (req, res) => {
  res.status(200).json();
});

module.exports = router;
