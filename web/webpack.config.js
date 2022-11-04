const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanTerminalPlugin = require('clean-terminal-webpack-plugin');

const appDirectory = path.resolve(__dirname, '../');

const babelLoaderConfiguration = {
  test: /\.(js)|(jsx)$/,
  include: [
    path.resolve(appDirectory, 'index.web.js'),
    path.resolve(appDirectory, 'src'),
  ],
  use: {
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
      presets: ['module:metro-react-native-babel-preset'],
      plugins: ['react-native-web'],
    },
  },
};

const imageLoaderConfiguration = {
  test: /\.(gif|jpe?g|png|svg)$/,
  use: {
    loader: 'url-loader',
    options: {
      name: '[name].[ext]',
      esModule: false,
    },
  },
};

module.exports = {
  entry: [path.resolve(appDirectory, 'index.web.js')],

  output: {
    path: path.resolve(appDirectory, 'dist'),
    filename: 'bundle.web.js',
  },

  module: {
    rules: [babelLoaderConfiguration, imageLoaderConfiguration],
  },

  plugins: [
    new HtmlWebpackPlugin({template: './web/index.html'}),
    new CleanTerminalPlugin({beforeCompile: true}),
  ],

  resolve: {
    alias: {
      'react-native$': 'react-native-web',
    },

    extensions: ['.web.js', '.web.jsx', '.js', '.jsx'],
  },

  stats: {
    builtAt: true,
  },
};
