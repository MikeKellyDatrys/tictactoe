var _ = require('lodash');
var webpack = require('webpack'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  Clean = require('clean-webpack-plugin'),
  autoprefixer = require('autoprefixer');

const ENV = process.env.NODE_ENV;
const APP_PORT = process.env.APP_PORT;
const APP_HOST = process.env.APP_HOST;

var vendors = [
  'react',
  'react-loader',
  'react-redux',
  'react-router',
  'redux',
  'redux-logger',
  'redux-thunk',
  'normalize.css'
];

var config = {
  context: __dirname,
  entry: {
    vendor: vendors,
    app:    ['./src/index.js']
  },
  output: {
    filename: '[name].[hash].js',
    path: __dirname + '/dist',
    publicPath: '/assets/'
  },
  resolve: {
    alias: {
      components: `${__dirname}/src/components`,
      ducks: `${__dirname}/src/ducks`,
      styl: `${__dirname}/src/styl`
    }
  },
  module: {
    noParse: vendors,
    preLoaders: [
      { test: /src\/.*\.js$/,          loader: 'eslint', exclude: /node_modules/ }
    ],
    loaders: [
      { test: /\.jsx?$/,               loader: 'babel', exclude: /node_modules/ },
      { test: /\.css$/,                loader: ExtractTextPlugin.extract('style', 'css') },
      { test: /\.styl$/,               loader: ExtractTextPlugin.extract('style', 'css!postcss!stylus'), include: `${__dirname}/src` },
      { test: /\.(png|jpg|svg|gif)/,   loader: 'url?limit=8192' },
      { test: /\.(ttf|woff|eot)/,      loader: 'file?name=[path][name].[ext]' },
      { test: /\.(json)/,              loader: 'json' }
    ]
  },
  postcss: () => {
    return [
      autoprefixer({browsers: ['last 2 versions']})
    ];
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      favicon:  'src/favicon.ico'
    }),
    new webpack.NoErrorsPlugin(),
    new Clean(['dist']),
    new webpack.ProvidePlugin({
      React: 'react'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(ENV)
    }),
    new ExtractTextPlugin('[name].[contenthash].css', {
      allChunks: true,
      disable: ENV === 'development'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.[hash].js',
      minChunks: Infinity
    })
  ]
};

switch (process.env.NODE_ENV) {
  case 'development':
    config.devtool = 'source-map';
    config.cache = true;
    _.each(config.entry, entryFiles => {
      if (entryFiles instanceof Array) {
        entryFiles.unshift(`webpack-dev-server/client?http://${APP_HOST}:${APP_PORT}`);
        entryFiles.unshift('webpack/hot/only-dev-server');
      }
    });

    config.output.publicPath = `http://${APP_HOST}:${APP_PORT}/`;
    config.plugins.push(new webpack.HotModuleReplacementPlugin());
    break;

  case 'production':
    config.devtool = false;
    config.cache = false;
    config.plugins.push(new webpack.optimize.DedupePlugin());
    config.plugins.push(new webpack.optimize.UglifyJsPlugin());
    break;

  default: throw Error('Unknown environment');
}

module.exports = config;
