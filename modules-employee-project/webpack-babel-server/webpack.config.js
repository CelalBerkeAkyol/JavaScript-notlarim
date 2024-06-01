const path = require('path');

module.exports = {
  entry: ["@babel/polyfill",'./src/index.js'],
  output: {
    path: path.resolve(__dirname, 'bundles'),
    filename: 'bundle.js'
  },
  mode:"production",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'bundles'),
    },
    hot: true,
    open: true,
    port: 3200,
  }
};

// 3200 portunda server çalışacak 
// entry src dosyası altındaki index.js dosyasından başlıyor sonrasında bir sıraya koyup bundle.js oluşuyor
// 3000 portunda json server çalışıyor 