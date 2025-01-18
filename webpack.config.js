import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import nodeExternals from 'webpack-node-externals';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
	entry: path.resolve(__dirname, 'app'),
	target: 'node',
	externals: [nodeExternals()],
    externalsPresets: {
        node: true  
    },
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			}
		],
	},
	resolve: {
		roots: [path.resolve('./app')],
		extensions: ['.ts'],
	},
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js'
	},
};
