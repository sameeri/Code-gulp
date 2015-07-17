var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('Cut Onions', function(){
    console.log('Cutting oninons!');
});


gulp.task('Cut Tomatoes', function(){
    console.log('Cutting tomatoes!');
});

gulp.task('Cut Peppers', function(){
    console.log('Cutting peppers!');
});

gulp.task('Scoop Avacado', function(){
    console.log('Avacadooo!');
});

gulp.task('Mash n Mix', function(){
    console.log('Mix everything!');
});


gulp.task('Add Cilantro', function(){
    console.log('Add some flavor!');
});


gulp.task('Add gauc mix', function(){
      console.log('Some spicy gaucamole mix :)');        
});


gulp.task('Add lime', function(){
    console.log('Nice and sour!');
});

gulp.task('Prepare ingredients', ['Cut Onions', 'Cut Tomatoes', 'Cut Peppers', 'Scoop Avacado']);

gulp.task('Add extras', ['Add Cilantro', 'Add gauc mix', 'Add lime']);

gulp.task('Recipe', function (){
    runSequence('Prepare ingredients','Mash n Mix', 'Add extras'); 
    console.log('We have amazing gauc ready for you!');
});
