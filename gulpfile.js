var gulp = require('gulp');

gulp.task('default', function () {
    gulp.src(['**/*.*'])
        .pipe(gulp.dest('./dist/lens'));
});

gulp.task('watch', function() {
    gulp.watch('**/*.*',['default']);

});
