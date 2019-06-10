const { join } = require('path');
const recursiveCopy = require('recursive-copy');
const withPlugins = require("next-compose-plugins");
const withSass = require('@zeit/next-sass');

module.exports = withPlugins( 
  [
    withSass
  ], 
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
    },
    target: 'serverless',
  }
);
