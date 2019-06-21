# 介绍

本组件库基于Vue，主要用于构建大屏（**全屏**）数据展示页面，具有多种类型组件可供使用：

* **边框**

带有不同边框的容器

* **装饰**

用来点缀页面效果，增加视觉效果

* **图表**

图表组件基于[Charts](http://charts.jiaminghi.com)封装，轻量，易用

* **其他**

飞线图/水位图/轮播表/...

## 安装

* npm安装

```sh
npm install @jiaminghi/data-view -D
```

* yarn安装
```sh
yarn add @jiaminghi/data-view -D
```

## 使用

```js
// 将自动注册所有组件为全局组件
import dataV from '@jiaminghi/data-view'

Vue.use(dataV)
```

## 按需引入

```js
// 仅需个别组件时，建议按需引入
import borderBox1 from '@jiaminghi/data-view/components'

Vue.component('dvBorderBox1', borderBox1)
```