var gulp = require('gulp');

gulp.task('copy:dist', function () {
  return gulp.src([
    'dist/*/**.*',
    'dist/*.*'
  ])
  .pipe(gulp.dest('./'));
})