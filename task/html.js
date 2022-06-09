const { src, dest } = require('gulp')

// Конфигурация
const path = require('../config/path.js')
const app = require('../config/app.js')

// Плагины
// const plumber = require('gulp-plumber')
const notify = require('gulp-notify')
const fileInclude = require('gulp-file-include')
const htmlmin = require('gulp-htmlmin')
const size = require('gulp-size')
// const wepbHtml = require('gulp-webp-html')


// Обработка HTML
const html = () => {
   return src(path.html.src)
   // если ошибки начнут мешать остаивть только .pipe(plumber())
      // .pipe(plumber())
      // .pipe(wepbHtml())
      .pipe(fileInclude())
      .pipe(size({ title: 'До сжатия'}))
      .pipe(htmlmin(app.htmlmin))
      .pipe(size({ title: 'После сжатия'}))
      .pipe(dest(path.html.dest))
}

// Экспорт задачи в виде функции
module.exports = html