module.exports = function () {
  var client = './app/modules/';
  var bower = {
    json: require('../bower.json'),
    directory: './app/bower_components/'
  };
  var node_modules = './node_modules';
  var build = './app/dist';

  var config = {
    allJs: [
      client + '/modules/**/*.js'
    ],
    build: build,
    css: build + '*.css',
    images: client + 'img/**/*.*',
    index: client + 'index.ejs',
    SASS_PARENT: './app/styles/app.scss',
    SASS_ALL: './app/modules/**/*.scss',
    bower: bower,
    client: client,
    packages: [
      './package.json',
      './bower.json'
    ],
    SOURCE_FILES: ['!app/**/*_test.js', 'app/*.js', 'app/modules/**/*.js'],
    THIRD_PARTY_SOURCE_FILES: [
      'app/bower_components/angular/angular.min.js',
      'app/bower_components/angular-animate/angular-animate.min.js',
      'app/bower_components/bootstrap/js/bootstrap.min.js',
      'app/bower_components/angular-aria/angular-aria.min.js',
      'app/bower_components/angular-local-storage/dist/angular-local-storage.min.js',
      'app/bower_components/angular-material/angular-material.min.js',
      'app/bower_components/angular-ui-router/release/angular-ui-router.min.js',
      'app/bower_components/ngprogress/build/ngProgress.min.js'
    ],
    THIRD_PARTY_JS_FILENAME: 'ext.js',
    SOURCE_HTML: ['app/*.html', 'app/modules/**/*.html'],
    PROD_JS_PATH: 'app/dist',
    PROD_JS_FILENAME: 'bundle.js',
    BASE_PATH: './app'
  };

  return config;
};
