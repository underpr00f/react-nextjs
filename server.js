const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
// const prod = process.env.NODE_ENV === 'production';
// const appprod = next({ prod });
// var portprod = normalizePort(process.env.PORT || '8000');
// appprod.set('port', portprod);
// const handleprod = appprod.getRequestHandler();

// function normalizePort(val) {
//   var port = parseInt(val, 10);

//   if (isNaN(port)) {
//     // named pipe
//     return val;
//   }

//   if (port >= 0) {
//     // port number
//     return port;
//   }

//   return false;
// }


app
  .prepare()
  .then(() => {
    const server = express();

    server.get('/posts/:id', (req, res) => {
      const actualPage = '/p/post';
      const queryParams = { title: req.params.id };
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

// appprod
//   .prepare()
//   .then(() => {
//     const server = express();

//     server.get('/posts/:id', (req, res) => {
//       const actualPage = '/p/post';
//       const queryParams = { title: req.params.id };
//       app.render(req, res, actualPage, queryParams);
//     });

//     server.get('*', (req, res) => {
//       return handleprod(req, res);
//     });

//     server.listen(portprod, err => {
//       if (err) throw err;
//       console.log('> Ready on Deploy');
//     });
//   })
//   .catch(ex => {
//     console.error(ex.stack);
//     process.exit(1);
//   });