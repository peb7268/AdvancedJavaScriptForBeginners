const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const { NoEmitOnErrorsPlugin, SourceMapDevToolPlugin, NamedModulesPlugin, ContextReplacementPlugin } = require('webpack');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const ProgressPlugin = require('webpack/lib/ProgressPlugin');
// const NodemonPlugin = require('nodemon-webpack-plugin');

//consts
const projectRoot = process.cwd();
const node_modules_dir = path.join(projectRoot, "/node_modules");
const dist_path = path.join(projectRoot, "/public", "/dist");
const NODE_DIR = `${process.cwd()}/node_modules`;
console.log(`NODE_DIR: ${NODE_DIR}`);

// webpack is cranky about some packages using a soon to be deprecated API. shhhhhhh
process.noDeprecation = true;
var nodeModules = {};
fs.readdirSync(NODE_DIR)
  .filter(function (x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function (mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });
module.exports = {
  target: 'node',
  context: __dirname,
  mode: "development",
  devtool: 'source-map',
  entry: "./public/js/index.ts",
  externals: nodeModules,
  resolveLoader: {
    modules: [
      'node_modules',
      'loaders'
    ]
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: dist_path
    // "path": dist_path,
    // "filename": "app.bundle.js"
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      "./src"
    ]
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        exclude: [
          /dist/,
          /node_modules/
        ],
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true
        }
      },
      { exclude: [NODE_DIR], loader: 'babel', test: /\.jsx?$/ }
    ]
  },
  plugins: [
    new NoEmitOnErrorsPlugin(),
    new ContextReplacementPlugin(/.*/),
    new ProgressPlugin(),
    new CircularDependencyPlugin({
      'exclude': /(\\|\/)node_modules(\\|\/)/,
      'failOnError': false,
      'onDetected': false,
      'cwd': projectRoot
    })
  ],
  'node': {
    'fs': 'empty',
    'global': true,
    'crypto': 'empty',
    'tls': 'empty',
    'net': 'empty',
    'process': true,
    'module': false,
    'clearImmediate': false,
    'setImmediate': false,
    'dns': 'empty',
    'connect-mongo': true,
    'dotenv': 'empty'
  }
};