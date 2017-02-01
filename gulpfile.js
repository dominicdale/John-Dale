var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var pump = require('pump');
var concat = require('gulp-concat');
var browserSync = require('browser-sync').create();
var gutil = require('gulp-util');
var minifyCshtml = require('gulp-minify-cshtml');


var autoprefixerOptions = {
  browsers: ['Firefox < 20', 'ie 8-11', 'iOS 7', 'last 2 Chrome versions']
};


// less compiler
gulp.task('less', function () {
  return gulp.src('./Css/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ],
      compress: true
    }))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(gulp.dest('./Css/'))
    .pipe(browserSync.reload({
      stream: true
    }))
    .pipe(less().on('error', gutil.log))
});



// autoprefix

gulp.task('autoprefix', function() {
    gulp.src('./Css/style.css')
      .pipe(autoprefixer({
          browsers: ['Firefox < 20', 'ie 8-11', 'iOS 7', 'last 2 Chrome versions'],
          cascade: false
      }))
      .pipe(gulp.dest('./Css/'))
});


// uglify
gulp.task('uglify', function () {
  gulp.src([
    './js/lightbox.js',
    './js/matchHeight.js',
    './js/scripts.js'
  ])
  .pipe(concat('compiled.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('./js'))
});


// Minify cshtml
gulp.task('minify-cshtml', function(){
  gulp.src('./Views/*.cshtml)')
    .pipe(minifyCshtml({
      comments: true,
      razorComments: true,
      whitespace: true
    }))
    .pipe(gulp.dest('./Views/dist'));
});


// browser reload

gulp.task('browserSync', function() {
  browserSync.init({
      proxy: 'johndale.local'
  })
})


// Watch
gulp.task('watch', ['browserSync'], function(){
  gulp.watch('./Css/modules/*.less', ['less']);
  gulp.watch('./Css/style.less', ['less']);
  //gulp.watch('./css/style.css', ['autoprefix']);
  gulp.watch('./Scripts/scripts.js', ['uglify']);
});


// Default task
gulp.task('default', ['less', 'uglify']);
