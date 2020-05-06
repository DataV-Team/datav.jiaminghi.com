module.exports = {
  title: 'DataV',
  description: 'Vue 大屏数据展示组件库',
  head: [
    ['meta', { name: 'keywords', content: 'datav,data,bi,开源,免费,大屏' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  host: 'localhost',
  port: 5000,
  themeConfig: {
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
        'flylineChartEnhanced',
        'conicalColumnChart',
        'digitalFlop',
        'scrollBoard',
        'scrollRankingBoard'
      ],
      '/dev/': ['']
    }
  }
}
