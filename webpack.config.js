const path = require('path')

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.join(__dirname, 'server/public'),
    filename: 'bundle.js'
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './server/public'
  },
  // mode: "development",
  // devtool: "inline-source-map",
  // entry: "./app.ts",
  // output: {
  //   filename: "bundle.js"
  // },
  // resolve: {
  //   // Add `.ts` and `.tsx` as a resolvable extension.
  //   extensions: [".ts", ".tsx", ".js"]
  // },
  // module: {
  //   rules: [
  //     // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
  //     { test: /\.tsx?$/, loader: "ts-loader" }
  //   ]
  // }
}