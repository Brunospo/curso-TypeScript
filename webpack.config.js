const path = require('path'); //eslint-disable-line

module.exports = {
	mode: 'development',
	entry: './src/036-exercicio-video/index.ts',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: [{
					loader: 'ts-loader',
					options: {
						configFile: 'tsconfig.frontend.json'
					}
				}],
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'frontend', 'assets', 'js'),
	},
	devtool: 'source-map'
};