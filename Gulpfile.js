var gulp = require('gulp');
var $ = require('gulp-load-plugins')({
  pattern: 'gulp-*'
});
var browserSync = require('browser-sync');
var reload = browserSync.reload;

//Config Files
var config = require('./config/gulp.config.js')();

//Project Gulp libraries
var gulpStyles = require('./build/gulp-styles.js')(gulp);

// Runs JSHint Report against all JS files in app
gulp.task('lint', function () {
    return gulp.src(config.SOURCE_FILES)
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish'))
        .pipe($.jshint.reporter('fail'));
});

gulp.task('browserSync', function() {
    browserSync({
        logConnections: true,
        logFileChanges: true,
        notify: true,
        open: true,
        server: {
            baseDir: config.BASE_PATH
        }
    });
});

gulp.task('watch', function () {
    // Lint the JS files when they change
    gulp.watch(config.SOURCE_FILES, ['lint', 'concat-js', reload]);
    gulp.watch(config.SOURCE_HTML, reload);
    gulp.watch(config.SASS_ALL, ['styles', reload]);
});

gulp.task('concat-js', ['concat-app-js', 'concat-third-party-js'], function() {

});

gulp.task('concat-app-js', function () {
    return gulp.src(config.SOURCE_FILES, {base: config.BASE_PATH})
        .pipe($.concat(config.PROD_JS_FILENAME))
        .pipe(gulp.dest(config.PROD_JS_PATH))
        .pipe(reload({stream:true}));
});

gulp.task('concat-third-party-js', function () {
  return gulp.src(config.THIRD_PARTY_SOURCE_FILES, {base: config.BASE_PATH})
    .pipe($.concat(config.THIRD_PARTY_JS_FILENAME))
    .pipe(gulp.dest(config.PROD_JS_PATH))
    .pipe(reload({stream:true}));
});

gulp.task('default', ['styles', 'concat-js', 'lint', 'watch', 'browserSync']);