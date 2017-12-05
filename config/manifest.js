/* eslint-env node */
'use strict'

module.exports = function(/* environment, appConfig */) {
  // See https://github.com/san650/ember-web-app#documentation for a list of
  // supported properties

  return {
    name: 'tramboard',
    short_name: 'tramboard',
    description: '',
    start_url: '/',
    display: 'standalone',
    background_color: '#000',
    theme_color: '#000',
    icons: [
      {
        src: '/assets/pictures/favicon-48x48.png',
        sizes: '48x48',
        type: 'image/png'
      },
      {
        src: '/assets/pictures/favicon-72x72.png',
        sizes: '72x72',
        type: 'image/png'
      },
      {
        src: '/assets/pictures/favicon-96x96.png',
        sizes: '96x96',
        type: 'image/png'
      },
      {
        src: '/assets/pictures/favicon-144x144.png',
        sizes: '144x144',
        type: 'image/png'
      },
      {
        src: '/assets/pictures/favicon-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: '/assets/pictures/favicon-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ]
  }
}
