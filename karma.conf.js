const webpackConfig = require('./webpack.config');

module.exports = function (config) {
  config.set({
    // framework
    frameworks: ['mocha', 'chai', 'phantomjs-shim'],
    // target browser
    browsers: ['PhantomJS'],
    // files
    files: [
      { pattern: 'node_modules/babel-polyfill/browser.js', instrument: false },
      'webpack.test.config.js',
    ],
    reporters: ['verbose'],
    preprocessors: {
      'webpack.test.config.js': ['webpack', 'sourcemap'],
    },
    webpack: {
      mode: 'development',
      module: webpackConfig('', { mode: 'development' }).module,
      resolve: webpackConfig('', { mode: 'development' }).resolve,
    },
    webpackServer: {
      noInfo: true,
    },
  });
};