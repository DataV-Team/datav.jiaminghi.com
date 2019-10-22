module.exports = {
  title: 'Datav',
  description: 'Just playing around',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  host: 'localhost',
  port: 5000,
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'DataV',
      description: 'Vue 大屏数据展示组件库'
    },
    '/EN/': {
      lang: 'en-US',
      title: 'DataV',
      description: 'Vue large screen data display component library'
    }
  },
  themeConfig: {
    locales: {
      '/': {
        selectText: '选择语言',
        label: '简体中文',
        nav: [
          {
            text: '指南',
            link: '/guide/'
          },
          {
            text: '支持',
            link: '/support/'
          },
          {
            text: 'Demo',
            link: '/demo/'
          },
          {
            text: 'GitHub',
            items: [
              {
                text: '项目源码仓库',
                link: 'https://github.com/DataV-Team/Datav'
              },
              {
                text: '文档及Demo源码仓库',
                link: 'https://github.com/DataV-Team/datav.jiaminghi.com'
              }
            ]
          }
        ],
        sidebar: {
          '/guide/': [
            '',
            'fullScreenContainer',
            'loading',
            'borderBox',
            'decoration',
            'charts',
            'activeRingChart',
            'capsuleChart',
            'waterLevelPond',
            'percentPond',
            'flylineChart',
            'conicalColumnChart',
            'digitalFlop',
            'scrollBoard',
            'scrollRankingBoard'
          ],
          '/dev/': ['']
        }
      },
      '/EN/': {
        selectText: 'Languages',
        label: 'English',
        nav: [
          {
            text: 'Guide',
            link: '/guide/'
          },
          {
            text: 'GitHub',
            items: [
              {
                text: '项目源码仓库',
                link: 'https://github.com/jiaming743/datav'
              },
              {
                text: '文档及Demo源码仓库',
                link: 'https://github.com/jiaming743/datav.jiaminghi.com'
              }
            ]
          }
        ],
        sidebar: {
          '/EN/guide/': [
            ''
          ]
        }
      }
    }
  }
}
