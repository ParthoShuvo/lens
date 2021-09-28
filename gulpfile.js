var gulp = require('gulp');

gulp.task('default', function () {
    gulp.src(['**/*.*'])
        .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function() {
    gulp.watch('**/*.*',['default']);

});
