const gulp = require('gulp');
const sass = require('gulp-sass');
const gulpImg = require('gulp-images');
const gulpMin = require('gulp-uglify');

//경로 선언
var src = './Src/';
var dist = './Dist/';

gulp.task('gulp-sass', function(){
  return gulp.src(['./Src/Style/Scss/*.scss'])
  .pipe(sass().on)
  .pipe(gulp.dest('./Dist/'));
})

gulp.task('default', ['gulp-sass']);