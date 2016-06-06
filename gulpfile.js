var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var cssnano = require('gulp-cssnano');

var iconfont = './node_modules/material-design-icons/iconfont';
var roboto = './node_modules/roboto-fontface/fonts';

gulp.task('material-css', function(){
  gulp
    .src('./resources/css/index.scss')
    .pipe(sass())
    .pipe(cssnano())
    .pipe(rename('material.min.css'))
    .pipe(gulp.dest('public/css'));
})

gulp.task('material-icons', function(){
  gulp
    .src([
      iconfont + '/MaterialIcons-Regular.eot',
      iconfont + '/MaterialIcons-Regular.woff2',
      iconfont + '/MaterialIcons-Regular.woff',
      iconfont + '/MaterialIcons-Regular.ttf',
    ])
    .pipe(gulp.dest('public/fonts'));
})

gulp.task('material-fonts', function(){
  gulp
    .src([
      roboto + '/Roboto-Regular.eot',
      roboto + '/Roboto-Regular.woff2',
      roboto + '/Roboto-Regular.woff',
      roboto + '/Roboto-Regular.ttf',
    ])
    .pipe(gulp.dest('public/fonts/roboto'));
})

gulp.task('material', ['material-css', 'material-icons', 'material-fonts']);