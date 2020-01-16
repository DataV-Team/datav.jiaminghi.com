<template>
  <div id="dev-container">
    <dv-active-ring-chart :config="config" style="width:300px;height:300px" />
  </div>
</template>

<script>
export default {
  name: 'dev',
  data () {
    return {
      config: {
        color: ['#e8dd82','#ff34a3','#c716e8','#4ae814','#100de8','#e80700','#797B7F','#CFB2A9','#DE9325','#7FAE90','#9FDABF','#E98F6F','#6AB0B8','#334B5C','#fc0503'],
        lineWidth: 30,
        radius: '55%',
        activeRadius: '60%',
        digitalFlopToFixed: 2,
        data: [
          { value: 1799, name: "公安"},
          { value: 1789, name: "人社"},
          { value: 1043, name: "医保"},
          { value: 787, name: "住建"},
          { value: 587, name: "总工会"},
          { value: 251, name: "档案"},
          { value: 136, name: "民政"},
          { value: 46, name: "卫健"},
          { value: 35, name: "残联"},
          { value: 19, name: "公安1"},
          { value: 7, name: "粮食"}
        ]
      }
    }
  }
}
</script>

<style lang="less">
#dev-container {
  width: 100%;
  height: 600px;
  box-shadow: 0 0 3px green;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #282c34;
  color: #fff;

  .dev {
    width: 300px;
    height: 200px;
  }
}
</style>
