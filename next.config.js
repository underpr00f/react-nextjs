// next.config.js
const fs = require('fs');
const { join } = require('path');
const { promisify } = require('util');
const copyFile = promisify(fs.copyFile);
const recursiveCopy = require('recursive-copy');

// module.exports = {
//   exportPathMap: async function(
//     defaultPathMap,
//     { dev, dir, outDir, distDir, buildId }
//   ) {
//     // if (dev) {
//     //   return defaultPathMap;
//     // }
//     // This will copy robots.txt from your project root into the out directory
//     // await copyFile(join(dir, 'robots.txt'), join(outDir, 'robots.txt'));
//     await recursiveCopy(join(dir, 'static/'), outDir, {dot:true});
//     return defaultPathMap;
//   }
// };

const withPlugins = require("next-compose-plugins");

module.exports = withPlugins( [], 
  {
    exportPathMap: async function(
      defaultPathMap,
      { dev, dir, outDir, distDir, buildId }
    ) {
      if (dev) {
        return defaultPathMap;
      }
      // This will copy robots.txt from your project root into the out directory
      // await copyFile(join(dir, 'robots.txt'), join(outDir, 'robots.txt'));
      await recursiveCopy(join(dir, 'static/'), outDir, {dot:true});
      return defaultPathMap;
    }
  }
);


// const nextConfig = {
// 	exportPathMap: async function (defaultPathMap, {dev, dir, outDir, distDir, buildId}) {
// 	   await recursiveCopy(join(dir, '/static/'), outDir, {dot:true});
// 	   return defaultPathMap
//   },
// };

// module.exports = withPlugins([
//   // add plugins here..
// ], nextConfig);

// const robotsOptions = {
//   root: __dirname + '/static/',
//   headers: {
//     'Content-Type': 'text/plain;charset=UTF-8',
//   }
// };
// server.get('/robots.txt', (req, res) => (
//   res.status(200).sendFile('robots.txt', robotsOptions)
// ));

// const sitemapOptions = {
//   root: __dirname + '/static/',
//   headers: {
//     'Content-Type': 'text/xml;charset=UTF-8',
//   }
// };
// server.get('/sitemap.xml', (req, res) => (
//   res.status(200).sendFile('sitemap.xml', sitemapOptions)
// ));

// const faviconOptions = {
//   root: __dirname + '/static/'
// };
// server.get('/favicon.ico', (req, res) => (
//   res.status(200).sendFile('favicon.ico', faviconOptions)
// ));