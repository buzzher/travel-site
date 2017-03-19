//we tell webpack what to do
module.exports = { //need to update the <script> in index.html to /temp/scripts/App.js
	entry: './app/assets/scripts/App.js', //38 5:00 we tell webpack which file to look at to creat his bundle/pack
	output: { //where the final bundle/pack will be output
		path: './app/temp/scripts', //1st property, path where the file will be created
		filename: 'App.js' //2nd control the name of the file App.js
	},
	module: { //module-object, convert js to fit in all browsers
		loaders: [ //arr of object
			{ //we using one loader
				loader: 'babel-loader', //the name of the loader we want to use is babel
				query: {
					presets: ['es2015']
				},	//regEx
				test: /\.js$/, //tell webpack babel plugin/loader to be apply to js files
				exclude: /node_modules/ //we tell webpack not all js files have to be convert by babel, we want to save time in the convertion
			} //we dont want babel to convert the entire /node_modules, only what we wrote
			
		]
	}
}