<template>
  <div class="bottom-right-table-1">
    <dv-border-box-6>
      <div class="table-name">
        <img src="./img/icon1.png" />人员贡献排行榜
      </div>

      <dv-scroll-board :config="config" />
    </dv-border-box-6>
  </div>
</template>

<script>
export default {
  name: 'BottomRightTable1',
  data () {
    return {
      config: {
        data: [
          ['张三', '月累计排除故障：4起'],
          ['李四', '月累计排除故障：3起'],
          ['王五', '月累计排除故障：3起'],
          ['赵六', '月累计排除故障：3起'],
          ['钱七', '月累计排除故障：2起'],
          ['孙八', '月累计排除故障：2起'],
          ['杨九', '月累计排除故障：2起'],
          ['吴十', '月累计排除故障：2起'],
          ['李雷', '月累计排除故障：2起'],
          ['韩梅梅', '月累计排除故障：2起']
        ],
        index: true,
        columnWidth: [30, 70],
        align: ['center'],
        oddRowBGC: 'rgba(9, 37, 50, 0.4)',
        evenRowBGC: 'rgba(10, 32, 50, 0.3)'
      }
    }
  }
}
</script>

<style lang="less">
.bottom-right-table-1 {
  width: calc(~"25% + 10px");
  height: 100%;
  margin: 0 -5px;

  .border-box-content {
    padding: 20px;
    box-sizing: border-box;
  }

  .table-name {
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;

    img {
      width: 40px;
      height: 40px;
      margin-right: 5px;
    }
  }

  .dv-scroll-board {
    height: calc(~"100% - 60px");
  }
}
</style>
