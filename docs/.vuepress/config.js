module.exports = {
    base: 'vuepress_github/.',
    title: 'PanaUpgrade',
    description: 'Just playing around',
    themeConfig: {
        nav: [
          { text: 'inicio', link: '/' },
          { text: 'Guía', link: '/guia/' },
          { text: 'Canal youtube', link: 'https://www.youtube.com/watch?v=zk6BwgxnBtE' }
        ],
        sidebar:{
          '/guia/':[
            ''
          ]
        }
      }
  }