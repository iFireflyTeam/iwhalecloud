const path = require('path')
const webpack = require('webpack')
const TSLintPlugin = require('tslint-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
  entry: './src/index.js',
  mode: 'production',
  devServer: {
    hot: true,
    host: '0.0.0.0',
    port: 8888,
    overlay: {
      warnings: true,
      errors: true
    }
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, './dist'),
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.tsx','.ts','.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: ['style-loader','css-loader','less-loader']
      },
      {
        test: /\.(tsx|ts)$/,
        loader: 'ts-loader',
        include: path.resolve(__dirname, './src'),
        exclude: /node_modules/,
        // options: {
        //   presets: ['@babel/preset-env', "@babel/preset-react"]
        // }
      },
      {
        test: /\.(jsx|js)$/,
        loader: 'babel-loader',
        include: path.resolve(__dirname, './src'),
        options: {
          presets: ['@babel/preset-env', "@babel/preset-react"]
        }
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'hello webpack',
      filename: 'index.html',
      template: path.resolve(__dirname, './src/index.html'),
    }),
    new TSLintPlugin({
      files: ['./src/**/*.ts']
    })
  ]

}
