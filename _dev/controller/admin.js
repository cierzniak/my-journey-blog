const { readFileSync, writeFile } = require('fs');
const { randomUUID } = require('crypto');
const slugify = require('slug-generator');
const router = require('express').Router();

router.get('/', (req, res) => {
  const filePath = `${__dirname}/../data/posts.json`;
  const file = readFileSync(filePath, 'utf8');
  const data = JSON.parse(file);

  return res.status(200).json(data.posts);
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
  writeFile(filePath, JSON.stringify(data), () => {
    writeFile(`${__dirname}/../data/images/${id}.jpg`, image.replace(/^data:image\/jpeg;base64,/, ""), 'base64', () => {
      return res.status(201).json({ added: true });
    });
  });
});

router.delete('/:id', (req, res) => {
  const filePath = `${__dirname}/../data/posts.json`;
  const file = readFileSync(filePath, 'utf8');
  const data = JSON.parse(file);

  const posts = data.posts.filter(({ id }) => id !== req.params.id);

  writeFile(filePath, JSON.stringify({
    ...data,
    posts,
  }), () => {
    return res.status(204);
  });
})

module.exports = router;
