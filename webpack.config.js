const path = require('path');

module.exports = {
  mode: "none",
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
	rules: [
		// For using css files
		{
			test: /\.css$/i,
			use: ['style-loader', 'css-loader']
		},

		// For images
		{
			test: /\.(png|svg|jpg|jpeg|gif)$/i,
        	type: "asset/resource",
			generator: {
				filename: "assets/images/[name][ext]"
			},
		},
		// For importing fonts
		{
			test: /\.(woff|woff2|eot|ttf|otf)$/i,
        	type: 'asset/resource',
		},
	]
  },
  // tells devServer to use the files in the "dist" folder; allowing a live reload for changes  
  devServer: {
	static: "./dist",
  },

};