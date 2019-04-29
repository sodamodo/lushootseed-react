const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CheckerPlugin } = require('awesome-typescript-loader');
const ExtractTextPlugin = require('mini-css-extract-plugin');

const sourcePath = path.join(__dirname, './src');
const outPath = path.join(__dirname, './dist');

module.exports = env => {
  return {
    context: sourcePath,
    entry: [ './index.js' ],
    output: {
      path: outPath,
      filename: 'bundle.js',
      chunkFilename: '[name].bundle.js',
      publicPath: '/'
    },
    target: 'web',
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      // Fix webpack's default behavior to not load packages with jsnext:main module
      // (jsnext:main directs not usually distributable es6 format, but es6 sources)
      mainFields: ['module', 'browser', 'main'],
      alias: {
        images: path.resolve(__dirname, 'src/assets/images/'),
        config$: path.resolve(__dirname, `config/${env}.js`),
        stores: path.resolve(__dirname, 'src/stores'),
        apiCalls$: path.resolve(__dirname, 'src/services/apiCalls.js'),
        models: path.resolve(__dirname, 'src/models'),
        forms: path.resolve(__dirname, 'src/forms')
      }
    },
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              cacheDirectory: true,
              babelrc: false,
              presets: [
                [
                  "@babel/preset-env",
                  { targets: { browsers: 'last 2 versions' } }
                ],
                "@babel/preset-react",
              ],
              plugins: [
                "react-hot-loader/babel"
              ]
            }
          }
        },
        {
          test: /\.tsx?$/,
          loader: 'awesome-typescript-loader',
          options: {
            "useBabel": true,
            "useCache": true,
            "babelOptions": {
              "babelrc": false, /* Important line */
              "presets": [
                ["@babel/preset-env", { "targets": "last 2 versions, ie 11", "modules": false }],
                "@babel/preset-react"
              ]
            },
            "babelCore": "@babel/core", // needed for Babel v7
          }
        },
        {
          test: /\.scss$/,
          use: [
            "style-loader",
            "css-loader",
            "sass-loader",
          ]
        },
        // static assets
        {test: /\.(png|jpg|gif)$/i, loader: "url-loader"},
        {test: /\.html$/, use: 'html-loader'},
        {test: /\.svg$/, loader: 'svg-inline-loader'}
      ],
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendor',
            enforce: true,
            chunks: 'initial',
          }
        }
      }
    },
    plugins: [
      new CheckerPlugin(),
      new HtmlWebpackPlugin({
        template: 'assets/index.ejs',
        jsfilesource: env === 'prod' ? '/bundle.js.gz' : '/bundle.js',
        jsvendorsource: env === 'prod' ? '/vendor.bundle.js.gz' : '/vendor.bundle.js',
        inject: false,
      }),
      new ExtractTextPlugin({
        filename: 'styles.css',
        disable: env === 'dev',
      }),
    ]
  }
};
