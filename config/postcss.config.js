const autoprefixer = require('autoprefixer')
const purgecss = require('@fullhuman/postcss-purgecss')
const whitelister = require('purgecss-whitelister');

module.exports = {
  plugins: [
    autoprefixer(),
    purgecss({
      content: [
        './node_modules/@hyas/core/layouts/**/*.html',
        './node_modules/@hyas/core/content/**/*.md',
        './layouts/**/*.html',
        './content/**/*.md',
      ],

      safelist: [
        'lazyloaded',
        ...whitelister([
          './node_modules/@hyas/core/assets/scss/common/_variables.scss',
          './node_modules/@hyas/core/assets/scss/components/_code.scss',
        ]),
      ],
    }),
  ],
}
