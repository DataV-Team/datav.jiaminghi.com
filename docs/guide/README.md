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

## 用前必看

使用前应阅读以下提示，这样出现相应问题后可以快速解决。

::: tip 兼容性
组件库的开发和调试都使用Chrome浏览器，没有时间和精力做其他浏览器的兼容，尤其是IE。

所以请使用Chrome浏览器。
:::

::: warning 宽高异常
组件的默认宽高都是100%，可以根据父容器宽高进行自适应，但在某些情况下组件宽高可能表现异常，这种情况一般是因为组件的父容器宽高发生了变化，而组件没有侦知这一变化，你可以在组件上绑定key值，在更改父容器宽高且页面完成重绘后（使用$nextTick），更新key值，使组件强制刷新，以获取正确宽高。
:::

::: danger 状态更新
避免你的组件更新了数据后，状态却不刷新，也就是没变化，请务必看这里

组件props均未设置`deep`监听，刷新props时，请直接生成**新的props**，请勿直接更新props下某一个属性，这样组件将无法刷新状态。

`this.someProps.someAttr = ['foo', 'foo']`是无效的

`this.someProps = { someAttr: ['foo', 'foo'] }`才是有效的
:::

**建议的更新数据的方式**

<fold-box title="点击以展示/隐藏示例">
<<< @/docs/guide/vueDemo/update.vue
</fold-box>

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
