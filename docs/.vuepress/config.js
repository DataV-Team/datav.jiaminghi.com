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
      description: 'Vue Large screen data display component library'
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
            text: '坐标轴',
            link: '/axis/'
          },
          {
            text: '配置项',
            link: '/config/'
          },
          {
            text: 'Demo',
            items: [
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
            link: 'https://github.com/jiaming743/DataV'
          }
        ],
        sidebar: {
          // '/guide/': [
          //   '',
          //   'borderBox',
          //   'decoration',
          //   'seniorComponent',
          //   'columnChart',
          //   'polylineChart',
          //   'pointChart',
          //   'radarChart',
          //   'ringChart',
          //   'specialChart',
          //   'percent',
          //   'carousel',
          //   'other'
          // ],
          // '/axis/': [''],
          // '/config/': [''],
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
            text: 'Axis',
            link: '/axis/'
          },
          {
            text: 'Config',
            link: '/config/'
          },
          {
            text: 'GitHub',
            link: 'https://github.com/jiaming743/DataV'
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
