const path = require('path')

module.exports = {
  entry: './src/components/Widget/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'widget.bundle.js',
    library: 'Widget',
    libraryTarget: 'umd',
  },
  externals: {
    preact: 'preact',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    alias: {
      react: 'preact/compat',
      'react-dom': 'preact/compat',
    },
  },
  devServer: {
    contentBase: path.join(__dirname, 'build'),
  },
}
