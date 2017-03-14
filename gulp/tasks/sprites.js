var gulp = require('gulp'),
	svgSprite = require('gulp-svg-sprite'), //can use in object literal
	rename = require('gulp-rename'),
	del = require('del');

var config = {
	mode: {
		css: { //this line create the css folder in the temp/sprites
			sprite: 'sprite.svg', //32 15:28this line get rid of the .css of the .icon{background: url}in temp/../sprite.css
			//32 17:41 use to be svg/sprite.svg
			render: { //fixing the svg img w all the feature icons 31 11:28
				css: { //tell the package(css) we use css(we can use SASS LESS)
					template: './gulp/templates/sprite.css' //we saving it here 31 13:00
				}
			}
		}
	}
}

//33 2:00 when updating icons(img w all the icons/sprite)gulp doesnt erase the old one so we making a task that erase the sprite folder in app/temp/sprite and then when updating icons it'll create new of the samefolder
gulp.task('beginClean', function() {
	return del(['./app/temp/sprite', './app/assets/images/sprites']); //33 4:00erase this files
});

//gulp var, has mathod name task(1st arg(name of the task, 2nd arg(what we want the task will do)function..
gulp.task('createSprite', ['beginClean'], function() {
			//path to the features icons
	return gulp.src('./app/assets/images/icons/**/*.svg')
	//pipe - do something with the file 31 5:00
	.pipe(svgSprite(config)) //need to tell svgSprite which mode to use
	.pipe(gulp.dest('./app/temp/sprite/')); //we copy the app/a..svg to a temp folder, dest - destination
});		//this file ./app/temp/sprite we created it here 31 7:28 using git - gulp creatSprite

gulp.task('copySpriteGraphic', ['createSprite'],function() { //this test move the img of the features icons with the image file
	return gulp.src('./app/temp/sprite/css/**/*.svg')
	.pipe(gulp.dest('./app/assets/images/sprites')); //32 17:21 its also creat subfolder name sprites
})

//to be able to use the sprites.js in the browser we need to copy it to the moduls with all the files 32 3:00
					// 32 10:59 ['createSprite'] - make a delay, gulp icons will run createSprite and then copySpriteCSS, cant run together
gulp.task('copySpriteCSS', ['createSprite'], function() { 
	return gulp.src('./app/temp/sprite/css/*.css')
	.pipe(rename('_sprite.css')) //rename the file we copy to app/assets/styles/modules
	.pipe(gulp.dest('./app/assets/styles/modules'));
});

//['createSprite'] - make a delay
//task that run the createSprite and copySpriteCSS in one gulp line.. gulp icons
//cant run on the same time that why we create ['createSprite'] in the copySpriteCSS

//task that run endClean after ['copySpriteGraphic', 'copySpriteCSS'] complete
gulp.task('endClean', ['copySpriteGraphic', 'copySpriteCSS'], function() {
	return del('./app/temp/sprite'); //this task delete the app/temp/folder 33 6:00
})

gulp.task('icons', ['beginClean', 'createSprite', 'copySpriteGraphic', 'copySpriteCSS', 'endClean']); //32 10:59