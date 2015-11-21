module.exports = function (gulp) {
  var $ = require('gulp-load-plugins')({
    pattern: 'gulp-*',
    rename: {
      'minify-css': 'minifyCss'
    }
  });
  var config = require('../config/gulp.config.js')();
  var log = require('./gulp-log')();
    /**
     * Compile less to css
     * @return {Stream}
     */
  gulp.task('styles', function () {
    log('styles: compiling Sass --> CSS');
    log('styles: autoprefixer css');
    log('styles: minifying css');
    log('styles: adding to ' + config.build);

    return gulp
      .src(config.SASS_ALL)
      .pipe($.plumber()) // exit gracefully if something fails after this
      .pipe($.sass().on('error', $.sass.logError))
     // .pipe($.autoprefixer({browsers: ['last 2 version', '> 5%']})) //may not be required
      .pipe($.minifyCss())
      .pipe(gulp.dest(config.build));
  });
};