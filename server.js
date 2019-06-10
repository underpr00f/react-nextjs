const express = require('express');
const next = require('next');
// const logger = require('./middleware/logger');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();
    // Init middleware
    // server.use(logger);

    server.get('/', (req, res) => app.render(req, res, '/'))
    server.get('/about', (req, res) => app.render(req, res, '/about'))
    server.get('/posts', (req, res) => app.render(req, res, '/posts'))

    server.get('/posts/post/:title', (req, res) => {
      const actualPage = '/posts/post';
      const queryParams = { title: req.params.title };
      app.render(req, res, actualPage, queryParams);      
    });

    // server.get("/products/:slug", (req, res) => {
    //   return app.render(req, res, "/product", { slug: req.params.slug })
    // });
    // server.get(/^(?!\/?products|otherPage|anotherPage).+$/, (req, res) => {
    //   if (req.url === '/') return app.render(req, res, '/')
    //   console.log("originalUrl", req.originalUrl)
    //   // const page = await api.findPage(url.replace('/', ''))
    //   // if (req.headers.referer) {
    //   //   const page = req.headers.referer.substring(req.headers.referer.lastIndexOf('/') + 1) === '333'
    //   //   console.log(page, req.headers.referer.substring(req.headers.referer.lastIndexOf('/') + 1))
    //   //   if (!page) return 404;
    //   //   // return app.render(req, res, '/product', { slug: url.replace('/', '') })
    //   //   return app.render(req, res, '/product', { slug: req.headers.referer.substring(req.headers.referer.lastIndexOf('/') + 1) })
    //   // } 
    // })
    // server.get('/products/:slug', async (req, res) => {
    //   await app.render(req, res, '/product', { 
    //     slug: req.params.slug,
    //     protocol: req.protocol,
    //     host: req.get('host'),
    //     originalUrl: req.originalUrl,
    //   });
    // });

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
