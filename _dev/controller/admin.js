const { readFileSync, writeFileSync } = require('fs');
const { randomUUID } = require('crypto');
const slugify = require('slug-generator');
const router = require('express').Router();

const { posts } = require('../data/posts.json');

router.get('/', (req, res) => {
  res.status(200).json(posts);
});

router.post('/', (req, res) => {
  const filePath = `${__dirname}/../data/posts.json`;
  const file = readFileSync(filePath, 'utf8');
  const data = JSON.parse(file);

  const id = randomUUID();
  const image = req.body.image;

  data.posts.push({
    id,
    ...req.body,
    slug: slugify(req.body.title),
    imageUrl: `/images/${id}.jpg`,
    image: undefined,
  });
  writeFileSync(filePath, JSON.stringify(data));
  writeFileSync(`${__dirname}/../data/images/${id}.jpg`, image.replace(/^data:image\/jpeg;base64,/, ""), 'base64');

  res.status(201).json({ added: true });
});

module.exports = router;
