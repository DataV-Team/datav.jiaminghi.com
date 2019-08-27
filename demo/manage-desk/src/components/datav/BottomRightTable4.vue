<template>
  <div class="bottom-right-table-4">
    <dv-border-box-6>
      <div class="table-name">
        <img src="./img/icon4.png" />故障位置排行榜
      </div>

      <dv-scroll-board :config="config" />
    </dv-border-box-6>
  </div>
</template>

<script>
export default {
  name: 'BottomRightTable4',
  data () {
    return {
      config: {
        data: [
          ['收费广场', '月累计：4起'],
          ['外场道路', '月累计：3起'],
          ['运维分中心', '月累计：3起'],
          ['服务区', '月累计：3起'],
          ['备件库房', '月累计：2起'],
          ['其他', '月累计：1起']
        ],
        index: true,
        columnWidth: [30, 100],
        align: ['center'],
        oddRowBGC: 'rgba(9, 37, 50, 0.4)',
        evenRowBGC: 'rgba(10, 32, 50, 0.3)'
      }
    }
  }
}
</script>

<style lang="less">
.bottom-right-table-4 {
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
