const path = require('path')
module.exports = {
  mode: 'development',
  devtool: false,
  entry: path.resolve(__dirname, '../src/index.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js'
  }
}