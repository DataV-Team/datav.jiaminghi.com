module.exports = {
  title: 'Datav',
  description: 'Just playing around',
  port: 6686,
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'DataV',
      description: 'Vue 图表类组件'
    },
    '/en/': {
      lang: 'en-US',
      title: 'DataV',
      description: 'Vue Chart components'
    }
  },
  themeConfig: {
    locales: {
      '/': {
        selectText: '选择语言',
        label: '简体中文',
        nav: [
          { text: 'GitHub', link: 'https://github.com/jiaming743/DataV' }
        ]
      },
      '/en/': {
        selectText: 'Languages',
        label: 'English',
        nav: [
          { text: 'GitHub', link: 'https://github.com/jiaming743/DataV' }
        ]
      }
    }
  }
}