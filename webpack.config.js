const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const resolve = dir => path.resolve(__dirname, './', dir);

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(process.cwd(), './dist'),
    filename: '[name].bundle.[hash].js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '~': resolve('./src')
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(process.cwd(), './index.html'),
      inject: true,
      filename: path.resolve(process.cwd(), './dist/index.html'),
    }),
  ],
  devServer: {
    // contentBase: __dirname + "/dist",
    inline: true,
    hot: true,
    host: '0.0.0.0',
    disableHostCheck: true,
    port: 8080,
    // proxy: {
    //   '/API': {
    //     target: 'http://',
    //     pathRewrite: { '^/API': '' },
    //     changeOrigin: true,
    //     // secure: false,
    //   },
    // },
  },
  devtool: 'source-map',
  mode: 'development',
};
