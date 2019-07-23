<template>
  <div id="ranking-board">
    <div class="ranking-board-title">巡查上报记录数量</div>
    <dv-scroll-ranking-board :config="config" />
  </div>
</template>

<script>
export default {
  name: 'RankingBoard',
  data () {
    return {
      config: {
        data: [
          {
            name: '日常养护',
            value: 55
          },
          {
            name: '交通事故',
            value: 120
          },
          {
            name: '路面',
            value: 78
          },
          {
            name: '桥通',
            value: 66
          },
          {
            name: '计日工',
            value: 80
          },
          {
            name: '路基',
            value: 45
          },
          {
            name: '交安设施',
            value: 29
          },
          {
            name: '除雪',
            value: 29
          },
          {
            name: '绿化',
            value: 29
          }
        ],
        rowNum: 9
      }
    }
  }
}
</script>

<style lang="less">
#ranking-board {
  width: 20%;
  box-shadow: 0 0 3px blue;
  display: flex;
  flex-direction: column;
  background-color: rgba(6, 30, 93, 0.5);
  border-top: 2px solid rgba(1, 153, 209, .5);
  box-sizing: border-box;
  padding: 0px 30px;

  .ranking-board-title {
    font-weight: bold;
    height: 50px;
    display: flex;
    align-items: center;
    font-size: 20px;
  }

  .dv-scroll-ranking-board {
    flex: 1;
  }
}
</style>
