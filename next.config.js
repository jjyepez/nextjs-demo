const withOffline = require('next-offline')

module.exports = withOffline({
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/upload': { page: '/upload' }
    }
  },
  workboxOpts: {
    runtimeCaching: [
      {
        urlPattern: /.(png|gif|jpg|mp4)$/,
        handler: 'cacheFirst'
      },
      {
        urlPattern: /static/,
        handler: 'cacheFirst'
      },
      {
        urlPattern: /api/,
        handler: 'networkFirst',
        options: {
          cacheableResponse: {
            statuses: [0, 200],
            headers: {
              'x-test': 'true'
            }
          }
        }
      }
    ]
  }
})