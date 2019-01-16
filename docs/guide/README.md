# 介绍

本组件库基于Vue，主要用于构建大屏（**全屏**）数据展示页面，具有多种类型组件可供使用
* **边框**

带有不同边框的盒子

* **装饰**

用来点缀页面效果，增加视觉效果

* **图表**

图表类组件类似于eCharts 但更为轻量精简，资源消耗也更小

* **其他**

进度条/轮播表/...

## 使用
* 你可以使用javascript包管理工具例如：**npm**、**yarn**直接安装组件库

* 亦或者手动下载他们然后置入你的项目中

* 最后在**main.js**中引入即可

## 安装

* npm安装

```sh
npm install @jiaminghi/data-view -D
```

* yarn安装
```sh
yarn add @jiaminghi/data-view -D
```

## 下载

* github下载

从github[项目地址](https://github.com/jiaming743/DataV)去下载

* 官网下载

从官网[下载地址](http://datav.jiaminghi.com)去下载

下载完成后将下载后的压缩包进行解压，然后放入你的项目中

## 完整引入

```js
// 如果你是手动下载的，你应该按组件库的实际位置去填写路径
// import dataV from './some/dir/dataV'
import dataV from '@jiaminghi/data-view'

Vue.use(dataV)
```

## 按需引入<Badge text="alpha" type="warn"/>
你也可以根据需要仅引入部分你需要的组件

```js
// import { borderBox1, columnChart } from './some/dir/dataV'
import { borderBox1, columnChart } from '@jiaminghi/data-view'

Vue.use(borderBox1)
Vue.use(columnChart)

// 或者这样
// Vue.component(borderBox1.name, borderBox1)
// Vue.component(columnChart.name, columnChart)
```

## 注入配置<Badge text="alpha" type="warn"/>
如果想要更改某些默认配置，可以进行配置注入

```js
// import { injectConfig } from './some/dir/dataV'
import { injectConfig } from '@jiaminghi/data-view'

injectConfig({
  config,
  ...
})
```

具体可注入配置参阅[配置项](/config/)

## 注意事项

* 引入组件会被自动注册为全局组件

* 组件库依赖部分插件，他们被直接挂载在Vue原型上（可能会存在冲突风险）

* 有部分方法被直接挂载在Vue原型上（可能会存在冲突风险）

挂载在Vue原型上的插件有如下几个
```js
Vue.prototype.color
Vue.prototype.canvas
Vue.prototype.color
```
