const { src, dest } = require('gulp')

// Конфигурация
const path = require('../config/path.js')
const app = require('../config/app.js')

// Плагины
// const plumber = require('gulp-plumber')
const notify = require('gulp-notify')
const babel = require('gulp-babel')
// const uglify = require('gulp-uglify')
// const webpack = require('webpack-stream')


// Обработка JavaScript
const js = () => {
   return src(path.js.src, { sourcemaps: app.isDev})
      // .pipe(plumber())
      .pipe(babel())
      // .pipe(webpack(app.webpack))
      // .pipe(uglify())
      .pipe(dest(path.js.dest, { sourcemaps: app.isDev}))
}

module.exports = js