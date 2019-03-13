module.exports = function(app, db) {
  app.get('/posts', async (req, res) => {
    res.send(await db.collection('posts').find().toArray());
  });

  app.post('/posts', (req, res) => {
    const date = new Date();
    const post = {
      date: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
      postTitle: req.body.postTitle,
      entry: req.body.entry,
    };

    db.collection('posts').insertOne(post, (err, result) => {
      if (err) {
        res.send({ 'error:': err });
      } else {
        res.send(result.ops[0]);
      }
    });
  });
};
