require('babel-register');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const path = require('path');

module.exports = (env, argv) => {
  return {
    // entry file
    entry: {
      'vendor': ['react', 'react-dom', 'react-router'],
      'main': path.resolve(__dirname, 'src', 'App.js'),
    },
    // sourcemap (devtool)
    devtool: argv.mode === 'production' ? false : '#source-map',
    // output file
    output: {
      filename: '[name].[chunkhash].js',
      chunkFilename: '[name].[chunkhash].chunk.js',
    },
    // module bundling
    module: {
      rules: [
        // js | jsx
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        // css
        {
          test: /\.css$/,
          use: [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
            },
          ],
        },
        // image file
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            'file-loader',
          ],
        },
        // font file
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
            'file-loader',
          ],
        },
      ],
    },
    // alias resolve
    resolve: {
      alias: {
        'test': path.resolve(__dirname, 'src', 'test'),
        'style': path.resolve(__dirname, 'src', 'style'),
        'components': path.resolve(__dirname, 'src', 'components'),
        'containers': path.resolve(__dirname, 'src', 'containers'),
      },
    },
    // plugins
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: './index.html',
      }),
      new ManifestPlugin({
        fileName: 'assets.json',
        basePath: '/',
      }),
    ],
    devServer: {
      port: 4000,
    },
  };
};