import gulp from 'gulp';
import browserify from 'browserify';
import watchify from 'watchify';
import babelify from 'babelify';
import rimraf from 'rimraf';
import source from 'vinyl-source-stream';
import _ from 'lodash';
import browserSync from 'browser-sync';

const reload = browserSync.reload;

const config = {
  appFile: './src/app.js',
  dest: './dist',
  src: './src/{,*/}*.js',
  bundleFile: 'bundle.js'
};

// Clean the output directory
gulp.task('clean', cb => rimraf(config.dest, cb));

let bundler;
function getBundler() {
  if (!bundler) {
    bundler = watchify(browserify(
      config.appFile, _.extend({debug: true}, watchify.args)
    ));
  }

  return bundler;
}

// Browser-sync task
gulp.task('browser-sync', () => {
  browserSync({
    options: {
      notify: false,
      background: true,
      watchOptions: {
        ignored: ''
      }
    },
    server: {
      files: [
        '{,*/}*.html'
      ],
      baseDir: ['./']
    }
  });
});

// Js files task
gulp.task('js', () => {
  return getBundler()
    .transform(babelify)
    .bundle()
    .on('error', err => {
      console.log(`Error: ${err.message}`);
    })
    .pipe(source(config.bundleFile))
    .pipe(gulp.dest(config.dest))
    .pipe(reload({stream: true}));
});

// HTML files task
gulp.task('html', () => {
  return gulp.src('{,*/}*.html')
    .pipe(reload({stream: true}));
});

// Watch task
gulp.task('watch', [
  'clean',
  'js',
  'browser-sync'
], () => {
  gulp.watch(config.src, ['js']);
  gulp.watch('index.html', ['html']);
});

gulp.task('default', ['watch']);
