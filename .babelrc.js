const env = require('./env-config.js')

module.exports = {
  presets: ['next/babel'],
  plugins: [
    ['styled-components', { ssr: true }],
    [
      'module-resolver',
      {
        alias: {
          '@routes': './routes',
          '@components': './components',
          '@lib': './lib',
          '@theme': './theme'
        }
      }
    ],
    ['transform-define', env]
  ]
}
