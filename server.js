const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();
    server.get('/', (req, res) => app.render(req, res, '/'))
    server.get('/about', (req, res) => app.render(req, res, '/about'))
    server.get('/posts', (req, res) => app.render(req, res, '/posts'))

    server.get('/posts/:title', (req, res) => {
      const actualPage = '/posts/post';
      const queryParams = { title: req.params.title };
      app.render(req, res, actualPage, queryParams);      
    });

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, err => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
