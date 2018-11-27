const webpack = require('webpack')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const OpenBrowserPlugin = require('open-browser-webpack-plugin')

module.exports = {
  target: 'web',
  mode: 'development',
  entry: {
    app: ['./src/client']
  },
  output: {
    path: path.resolve(__dirname, './asset/script'),
    filename: '[name].js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.html?$/,
        use: [
          'raw-loader'
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }, {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader?importLoaders=1',
            options: {
              modules: true,
              localIdentName: '[name]_[local]_[hash:base64:5]',
              minimize: true
            }
          }, {
            loader: 'sass-loader',
            options: {
              javascriptEnabled: true
            }
          }
        ]
      }, {
        test: /\.(less|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader?importLoaders=1',
            options: {
              minimize: true
            }
          }, {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true
            }
          }
        ]
      }, {
        test: /\.(png|jpg|gif|md)$/,
        use: ['file-loader?limit=10000&name=[md5:hash:base64:10].[ext]']
      }, {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: ['url-loader?limit=10000&mimetype=images/svg+xml']
      }, {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      }, {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      }, {
        test: /\.json$/,
        use: 'json-loader'
      }
    ]
  },
  devtool: 'cheap-module-source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.less', 'jpg', 'jpeg', 'png', 'gif', 'svg']
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new HtmlWebpackPlugin({
      template: 'build/wds.html'
    }),
    new OpenBrowserPlugin({
      url: 'http://localhost:9000'
    })
  ]
}

