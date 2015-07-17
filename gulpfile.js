var gulp = require('gulp');
//
//console.log('gulp:', gulp);
//
//console.log('gulp - constructor', gulp.constructor);
//console.log('gulp - constructor prototype', gulp.constructor.prototype);

gulp.task('default', function doSomething(){
  console.log("This is default. I am important for gulp tried to find me if you don't specify a task!");
});

gulp.task('Awesome', function (){
  console.log('Taking gulp awesomeness in steps!');
});

