module.exports = {
  mode: 'none',
  entry: './src/app.js',
  output: {
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use:[
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.less$/,
        loaders: [ 'style-loader', 'css-loader', 'less-loader' ]
      },
    ]
  },
  optimization: {
    usedExports: true,
    sideEffects: true
  }
};