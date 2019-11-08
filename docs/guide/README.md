# 介绍

组件库基于Vue<react-page-btn />，主要用于构建大屏（**全屏**）数据展示页面即**数据可视化**，具有多种类型组件可供使用：

* **边框**

带有不同边框的容器

* **装饰**

用来点缀页面效果，增加视觉效果

* **图表**

图表组件基于[Charts](http://charts.jiaminghi.com)封装，轻量，易用

* **其他**

飞线图/水位图/轮播表/...

::: tip TIP
建议使用Chrome浏览器。

组件props均未设置`deep`监听，刷新props时，请直接生成**新的props**，请勿直接更新props下某一个属性，这样组件将无法刷新状态。

`this.someProps.someAttr = ['foo', 'foo']`是无效的

`this.someProps = { someAttr: ['foo', 'foo'] }`才是有效的
:::

## 安装

* npm安装

```sh
npm install @jiaminghi/data-view
```

* yarn安装
```sh
yarn add @jiaminghi/data-view
```

## 使用

```js
// 将自动注册所有组件为全局组件
import dataV from '@jiaminghi/data-view'

Vue.use(dataV)
```

## 按需引入

按需引入仅支持基于**ES module**的**tree shaking**，按需引入示例如下：

```js
import { borderBox1 } from '@jiaminghi/data-view'

Vue.use(borderBox1)
```

## UMD版

`UMD`版可直接使用`script`标签引入，`UMD`版文件下载请移步[UMD](https://github.com/jiaming743/DataV/tree/master/dist)，引入后将自动把所有组件注册为**Vue全局组件**，引入`DataV`前请确保已引入`Vue`。

<fold-box title="点击以展示/隐藏UMD版使用示例">
<<< @/docs/guide/umdExample.html
</fold-box>
