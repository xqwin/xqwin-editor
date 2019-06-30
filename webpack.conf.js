var path = require('path');

module.exports = {
  mode:"development",
  entry: "./app.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  resolve: {
    alias: {
      'parchment': path.resolve(__dirname, 'node_modules/parchment/src/parchment.ts'),
      'quill$': path.resolve(__dirname, 'node_modules/quill/quill.js'),
    },
    extensions: ['.js', '.ts', '.svg']
  },
  module: {
    rules: [
      {
        test:/\.(css|styl)$/,
        use:[
          {
          loader:'style-loader'
        },{ loader: 'css-loader', options: { importLoaders: 1 } },
       
        {
          loader:'stylus-loader'
        }
      ]
      },
      {
      test: /\.js$/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [
            [
              "env",
              {
                "targets": {
                  "node": "current"
                }
              }
            ]
          ]
        }
      }],
    }, {
      test: /\.ts$/,
      use: [{
        loader: 'ts-loader',
        options: {
          compilerOptions: {
            declaration: false,
            target: 'es5',
            module: 'commonjs'
          },
          transpileOnly: true
        }
      }]
    }, {
      test: /\.svg$/,
      use: [{
        loader: 'html-loader',
        options: {
          minimize: true
        }
      }]
    }]
  }
}
