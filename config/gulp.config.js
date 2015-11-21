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
    SASS_ALL: client + 'styles/**/*.scss',
    bower: bower,
    client: client,
    packages: [
      './package.json',
      './bower.json'
    ],
    SOURCE_FILES: ['!app/**/*_test.js', 'app/*.js', 'app/modules/**/*.js'],
    SOURCE_HTML: ['app/*.html', 'app/modules/**/*.html'],
    PROD_JS_PATH: 'app/dist',
    PROD_JS_FILENAME: 'bundle.js',
    BASE_PATH: './app'
  };

  return config;
};
