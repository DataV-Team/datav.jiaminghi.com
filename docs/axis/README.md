# 坐标轴
组件库中包含坐标轴的组件例如：柱状图、折线图等，他们的坐标轴配置是相同的，
且配置属性都包含在组件的data中，且为一级属性，示例如下
```js
data: {
  x: { ... },
  y: { ... },
  ...
}
```

## 基本属性
<full-width-table>
属性|是否必须|作用|类型|默认值
:--:|:--:|:--:|:--:|:--:
x|否|x轴数据|`Object`|`null`
y|否|y轴数据|`Object`|`null`
rx|否|x轴对侧数据|`Object`|`null`
ry|否|y轴对侧数据|`Object`|`null`
horizon|否|水平模式|`Boolean`|`false`
</full-width-table>

::: warning
上述五个基本属性只是在相对情况下不是必须的，这不意味着你都不需要配置。
通常来说，你至少需要配置一项标签刻度
:::

## 轴位置

<div class="axis-show-container">
  <div class="axis-position">
    <div class="axis-x">x</div>
    <div class="axis-rx">rx</div>
    <div class="axis-y">y</div>
    <div class="axis-ry">ry</div>
  </div>
</div>

## 标签刻度
默认情况下标签刻度属性即为`x`或`rx`，若设置`horizon`为`true`时，则为`y`或`ry`，专有属性如下

<full-width-table>
属性|是否必须|作用|类型|默认值
:--:|:--:|:--:|:--:|:--:
tags|是|标签刻度数据|`Array`|`null`
rotate|否|标签旋转度数（仅x轴有效）|`Int`|`null`
</full-width-table>

```js
data: {
  series: [
    {
      value: [10, '', 20, '', 30]
    }
  ],
  x: {
    tags: ['标签1', '', '标签2', '', '标签3']
  }
}
```

::: tip
`tags`是该轴专有且必须配置的属性，允许留空占位，空位仅`占位不参与刻度绘制`。
插入空位可以用来调节数据点位置，以此来调节柱状图柱宽度等效果，
轴刻度插入空位时，其数据也必须插入空位，以此保持渲染效果一致
:::

## 数值刻度
默认情况下数值刻度属性即为`y`或`ry`，若设置`horizon`为`true`时，则为`x`或`rx`，专有属性如下

<full-width-table>
属性|是否必须|作用|类型|默认值
:--:|:--:|:--:|:--:|:--:
tags|否|数值刻度数据|`Array`|`null`
max|否|数值刻度最大值|`Int`|`null`
min|否|数值刻度最小值|`Int`|`null`
num|否|数值刻度个数|`Int`|`10`
fixed|否|数值刻度精度位数|`Int`|`null`
</full-width-table>

::: tip
一般来说数值刻度数据不需配置即可自动计算生成，需要自定义数值刻度数据可以配置`tags`属性，
`tags`属性一旦被配置将自动生效
:::

```js
data: {
  series: [
    {
      value: [10, '', 20, '', 30]
    }
  ],
  y: {
    tags: [0, 5, 10, 15, 20, 25, 30]
  }
}
```
::: tip
自动计算数值刻度数据时，可以配置一些计算规则来调整计算效果，例如：
`max`、`min`、`num`、`fixed`等（配置`tags`时不生效）
:::

::: tip
若想启用数值刻度对轴或使其配置生效（ry或rx），应至少有一组数据设置`against`属性为`true`，
该组数据将自动以对轴为基准进行绘制（如柱状折线图，柱线分别参照不同数值刻度即可考虑此种配置）
[折线柱状图](/guide/columnChart.html#折线柱状图)
:::

```js
data: {
  series: [
    {
      value: [10, '', 20, '', 30]
      against: true
    }
  ]
}
```

## 通用属性
`x`、`y`、`rx`、`ry`的通用属性如下

<full-width-table>
属性|是否必须|作用|类型|默认值
:--:|:--:|:--:|:--:|:--:
unit|否|该轴单位|`String`|`null`
grid|否|该轴是否绘制网格|`Boolean`|`false`
gridColor|否|网格颜色|`String`|`null`
gridLineType|否|网格类型|`String`|`line`
gridLineDash|否|网格Dash|`[Int, Int]`|`[5, 5]`
noAxisLine|否|不绘制轴线|`Boolean`|`false`
noAxisTag|否|不绘制刻度标签|`Boolean`|`false`
tagBefore|否|刻度标签前缀|`String`|`null`
tagAfter|否|刻度标签后缀|`String`|`null`
offset|否|该轴偏移量|`Int`|`null`
</full-width-table>

## 水平模式
`horizon`为`true`时即为水平模式，即想要横向绘制图表

::: warning
水平模式下`x`、`y`与`rx`、`ry`配置需对调，否则将会导致计算异常
:::

示例 [水平柱状图](/guide/columnChart.html#水平柱状图)


<style lang="less">
.axis-show-container {
  background-color: #282c34;
  height: 300px;
  position: relative;
  color: #fff;

  .axis-position {
    position: absolute;
    width: 300px;
    height: 200px;
    border: 1px solid #fff;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .axis-x, .axis-y, .axis-rx, .axis-ry {
    position: absolute;
  }

  .axis-x, .axis-rx{
    transform: translateX(-50%);
  }

  .axis-y, .axis-ry {
    transform: translateY(-50%);
  }

  .axis-x {
    left: 50%;
    bottom: 0px;
  }

  .axis-rx {
    left: 50%;
  }

  .axis-y {
    top: 50%;
  }

  .axis-ry {
    top: 50%;
    right: 0px;
  }
}
</style>
