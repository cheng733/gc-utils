const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const base = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  devtool: 'cheap-module-source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      }
    ],
  },
  optimization: {
    minimize: true,
  },
};
let tempConfig = {}
if (process.env.NODE_ENV === 'development') {
  tempConfig = {
    ...base,
    entry: path.join(__dirname, './src/example/src/index.tsx'),
    output: {
      path: path.join(__dirname, './scr/example/dist'),
      filename: 'bundle.js',
      library: 'gc-utils',
      libraryTarget: 'umd',
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, './src/example/src/index.html'),
        filename: 'index.html',
      }),
    ],
    devServer: {
      port: 9090,
    },
  };
}else{
    tempConfig = {
        ...base,
        entry: './src/index.ts',
        output: {
          filename: 'index.js',
          path: path.resolve(__dirname, 'dist'),
          library: 'gc-utils',
          libraryTarget: 'umd'
        },
        devtool: 'source-map',
        externals: {
            'react': 'react',
            'react-dom': 'react-dom',
            'js-cookie':'js-cookie'
          },
          plugins: [
            new CleanWebpackPlugin(),
          ],
        };
}

module.exports = tempConfig;
