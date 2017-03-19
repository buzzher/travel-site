var gulp = require('gulp'), //39 2:8gulp package
	webpack = require('webpack');

//conect wepack to gulp to be able to save and the browser refresh like gulp watch
//creating a task('name of the task', what to do () {})
gulp.task('scripts', function(callback) { //callback, we making sure gulp aware when webpack competed
	webpack(require('../../webpack.config.js'), function(err, stats) { //err, stats - make sure to show us error in th ecommend line
		if(err) {
			console.log(err.toString()); //show ERROR in the commend line
		}

		console.log(stats.toString()); //show stats like asset(App.js) [1][2][3]file bundle/pack toregther,size..
		callback();
	})
})