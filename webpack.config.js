module.exports = {
    entry: './app/app.js',
    output: {
        path: './bin',
        filename: 'app.bundle.js',
    },
    module: {
      loaders: [
        {
          test: /\.jsx*$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel', // 'babel-loader' is also a valid name to reference
          query: {
            presets: ['es2015','stage-2']
          }
        }
      ]
    }
  };
