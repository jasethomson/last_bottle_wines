// import path from 'path';
const path = require('path');

module.exports = {
	entry: './app/index.ts',
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: ['.ts', '.js'],
	},
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js'
	},
};
