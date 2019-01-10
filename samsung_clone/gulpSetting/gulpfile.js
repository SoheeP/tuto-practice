const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const gulpImg = require('gulp-images');
const gulpMin = require('gulp-uglify');

//경로 선언
var src = '../Src';
var dist = '../Dist';
var paths = {
  scss : src + '/Style/Scss/**/*.scss'
}

//SCSS config
var scssOptions = {
  /**  
   * outputStyle (Type: String, Default: nested)
   * CSS 컴파일 결과 코드 스타일 지정
   * Values: nested, expanded, compact, compressed
   */
  outputStyle : 'expanded',
  /**
   * indentType (>= v3.0.0, Type: String, Default: space)
   * 컴파일된 CSS의 "들여쓰기"의 타입을 정한다
   * Values: space, tab
   */
  indentType: "tab",
  /**
   * indentWidth (>= v3.0.0, Type: Integer, Default: 2)
   * 컴파일된 CSS의 "들여쓰기"의 갯수
   */
  indentWidth: 1, // ouputStyle이 nested, expanded인 경우에 사용한다
  /**
   * precision (Type: Integer, Default: 5)
   * 컴파일된 CSS의 소수점 자리 수
   */
  precision: 6,
  /**
   * sourceComments (Type: Boolean, Default: false)
   * 컴파일 된 CSS에 원본소스의 위치와 줄수를 주석표시
   */
  sourceComments: true
};

gulp.task('gulp-sass', function(){
  return gulp.src(paths.scss) //scss파일 읽기
  .pipe(sourcemaps.init()) // sourcemap 초기화(생성)
  .pipe(sass().on('error', sass.logError)) //scss 옵션값 설정
  .pipe(sourcemaps.write()) // 위에서 생성한 소스맵 사용
  .pipe(gulp.dest(dist + '/Style/Css')); //목적지(destination) 설정
});

gulp.task('watch', function(){
  gulp.watch(paths.scss, ['gulp-sass']);
});

gulp.task('default', ['gulp-sass', 'watch']);