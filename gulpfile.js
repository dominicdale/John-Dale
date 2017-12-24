var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var pump = require('pump');
var concat = require('gulp-concat');
var browserSync = require('browser-sync').create();
var gutil = require('gulp-util');


var autoprefixerOptions = {
  browsers: ['Firefox < 20', 'ie 8-11', 'iOS 7', 'last 2 Chrome versions']
};


// less compiler
gulp.task('less', function () {
  return gulp.src('./css/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ],
      compress: true
    }))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(gulp.dest('./css/'))
    .pipe(browserSync.reload({
      stream: true
    }))
    .pipe(less().on('error', gutil.log))
});



// autoprefix

gulp.task('autoprefix', function() {
    gulp.src('./css/style.css')
      .pipe(autoprefixer({
          browsers: ['Firefox < 20', 'ie 8-11', 'iOS 7', 'last 2 Chrome versions'],
          cascade: false
      }))
      .pipe(gulp.dest('./css/'))
});


uglify
gulp.task('uglify', function () {
  gulp.src([
    './js/jquery.js',
    // './js/lightbox.js',
    // './js/matchHeight.js',
    // './js/adaptiveBg.js',
    './js/scripts.js'
  ])
  .pipe(concat('compiled.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('./js'))
});


// browser reload

gulp.task('browserSync', function() {
  browserSync.init({
      proxy: 'http://localhost:8888/John-Dale/'
  })
})


// Watch
gulp.task('watch', ['browserSync'], function(){
  gulp.watch('./css/modules/*.less', ['less']);
  gulp.watch('./css/style.less', ['less']);
  //gulp.watch('./css/style.css', ['autoprefix']);
  gulp.watch('./Scripts/scripts.js', ['uglify']);
});


// Default task
gulp.task('default', ['less', 'uglify', 'watch']);
