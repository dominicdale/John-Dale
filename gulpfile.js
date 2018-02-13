var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var pump = require('pump');
var concat = require('gulp-concat');
var browserSync = require('browser-sync').create();
var gutil = require('gulp-util');
var sourcemaps = require('gulp-sourcemaps');


var autoprefixerOptions = {
  browsers: ['Firefox < 20', 'ie 8-11', 'iOS 7', 'last 2 Chrome versions']
};


// less compiler
gulp.task('less', function () {
  return gulp.src('./css/style.less')
  .pipe(sourcemaps.init())
  .pipe(less({compress: true}).on('error', function(err){
    gutil.log(err);
    this.emit('end');
  }))
  .pipe(autoprefixer(autoprefixerOptions))  
  .pipe(sourcemaps.write('./sourcemaps')) 
  .pipe(gulp.dest('./css/'))
  .pipe(browserSync.reload({
    stream: true
  }))
});


// uglify
gulp.task('uglify', function () {
  gulp.src([
    './js/jquery.js',
    // './js/matchHeight.js',
    './js/scripts.js'
  ])
  .pipe(concat('compiled.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('./js'))
});


// browser reload

gulp.task('browserSync', function() {
  browserSync.init({
      // proxy: 'http://localhost:8888/John-Dale/'
      proxy: 'http://johndale.local'
  })
})


// Watch
gulp.task('watch', ['browserSync'], function(){
  gulp.watch('./css/modules/*.less', ['less']);
  gulp.watch('./css/style.less', ['less']);
  gulp.watch('./js/scripts.js', ['uglify']);
});


// Default task
gulp.task('default', ['less', 'uglify', 'watch']);
