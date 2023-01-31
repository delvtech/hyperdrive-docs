var gulp = require('gulp')

var concat = require('gulp-concat')
var order = require('gulp-order')

function buildAsteroidsJS() {
  return gulp
    .src('src/asteroids/*.js')
    .pipe(
      order([
        'utils.js',
        'spaceobject.js',
        'alienship.js',
        'asteroid.js',
        'explosion.js',
        'smoke.js',
        'power.js',
        'powerup.js',
        'missile.js',
        'spaceship.js',
        'touchmodule.js',
        'game.js',
        'index.js',
      ])
    )
    .pipe(concat('asteroids.js'))
    .pipe(gulp.dest('dist'))
}

function buildAsteroidsHTML() {
  return gulp.src('src/asteroids/*.{html,css}').pipe(gulp.dest('dist'))
}

gulp.task('build-asteroids', gulp.series(buildAsteroidsJS, buildAsteroidsHTML))
