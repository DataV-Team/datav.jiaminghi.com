module.exports = {
  title: 'Datav',
  description: 'Just playing around',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  host: '192.168.10.150',
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
            items: [
              {
                text: '施工养护综合数据',
                link: 'http://datav.jiaminghi.com/demo/construction-data/index.html'
              },
              {
                text: '机电运维管理台',
                link: 'http://datav.jiaminghi.com/demo/manage-desk/index.html'
              },
              {
                text: '机电设备电子档案',
                link: 'http://datav.jiaminghi.com/demo/electronic-file/index.html'
              }
            ]
          },
          {
            text: 'GitHub',
            link: 'https://github.com/jiaming743/datav.jiaminghi.com'
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
            link: 'https://github.com/jiaming743/datav.jiaminghi.com'
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
