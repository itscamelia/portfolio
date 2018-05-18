module.exports = [
  {
    test: /\.js(x?)$/,
    use: ['babel-loader'],
    exclude: /node_modules/
  },
  {
    test: /\.css$/,
    use: ['style-loader', 'css-loader'],
    exclude: /node_modules/
  },
  {
    test: /\.scss$/,
    use: [
      { loader: 'style-loader' },
      { loader: 'css-loader' },
      { loader: 'sass-loader'}
    ],
    exclude: /node_modules/
  },
  {
    test: /\.yml$/,
    use: ['json-loader', 'yaml-loader'],
    exclude: /node_modules/
  }
];
