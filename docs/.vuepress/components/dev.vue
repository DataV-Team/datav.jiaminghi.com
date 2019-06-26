<template>
  <div id="dev-container">
    <dv-scroll-board class="dev" :config="config" />
  </div>
</template>

<script>
export default {
  name: 'dev',
  data () {
    return {
      config: {
        data: [
          ['行1列1', '行1列2', '行1列3'],
          ['行2列1', '行2列2', '行2列3'],
          ['行3列1', '行3列2', '行3列3'],
          ['行4列1', '行4列2', '行4列3'],
          ['行5列1', '行5列2', '行5列3'],
          ['行6列1', '行6列2', '行6列3'],
          ['行7列1', '行7列2', '行7列3'],
          ['行8列1', '行8列2', '行8列3'],
          ['行9列1', '行9列2', '行9列3'],
          ['行10列1', '行10列2', '行10列3']
        ]
      }
    }
  },
  created () {
    setTimeout(() => {
      this.config = {
        header: ['列1', '列2', '列----------------------'],
        data: [
          ['行1列1', '行1列2', '行1列3'],
          ['行2列1', '行2列2', '行2列3'],
          ['行3列1', '行3列2----------------------', '行3列3'],
          ['行4列1', '行4列2', '行4列3'],
          ['行5列1', '行5列2', '行5列3'],
          ['行6列1', '行6列2', '行6列3'],
          ['行7列1', '行7列2', '行7列3'],
          ['行8列1', '行8列2', '行8列3'],
          ['行9列1', '行9列2', '行9列3'],
          ['行10列1', '行10列2', '行10列3'],
          ['行11列1', '行11列2', '行11列2'],
          ['行12列1', '行12列2', '行12列3'],
        ],
        columnWidth: [50],
        align: ['center'],
        carousel: 'page',
        index: true,
        waitTime: 5000
      }
    }, 3000)
  }
}
</script>

<style lang="less">
#dev-container {
  width: 100%;
  height: 300px;
  box-shadow: 0 0 3px green;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #282c34;

  .dev {
    width: 100%;
    height: 100%;
    box-shadow: 0 0 3px red;
  }
}
</style>
