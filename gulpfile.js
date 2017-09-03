var gulp = require('gulp'), watch=require('gulp-watch');


gulp.task('default', function(){
	console.log("Hooray - uou created a Gulp task.");
});
gulp.task('html', function(){
	console.log("Let create useful html task here");
});
gulp.task('styles', function(){
	console.log("Let useful CSS PostCSS task here");
});
gulp.task('watch', function(){
	watch('./app/index.html', function(){
		gulp.start('html');
	});
	watch('./app/assets/styles/**/*.css', function(){
		gulp.start('styles');
	});
});