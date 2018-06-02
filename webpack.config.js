const path = require('path');

module.exports = {
  entry: `${path.resolve(__dirname, 'src')}/index.jsx`,
  output: {
    path: `${path.resolve(__dirname, 'dist')}`,
    filename: 'bundle.js',
    publicPath: '/app',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'babel-loader',
        options: {
          presets: ['react', 'env'],
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpe?g|png)$/,
        use: ['file-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
