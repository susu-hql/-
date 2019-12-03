<template>
  <div class="about">
    <h1>数据统计</h1>
    <div id="charts-zhe"></div>
    <div id="charts-bing"></div>
  </div>
</template>

<script> 
export default {
  name:'about',
  components: {
    
  },
  mounted() {
    var zheCharts = this.echarts.init(document.getElementById('charts-zhe'))
    var bingCharts = this.echarts.init(document.getElementById('charts-bing'))

    zheCharts.setOption({
      title: {
        text: '订单数'
      },
        xAxis: {
            type: 'category',
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320,1220,500,1000,888,1550],
            type: 'line'
        }]
    }),
    bingCharts.setOption({
      title: {
        text: '注册用户'
      },
      xAxis: {
          type: 'category',
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      },
      yAxis: {
          type: 'value'
      },
      series: [{
          data: [120, 200, 150, 80, 70, 110, 130,80,100,200,400,399],
          type: 'bar'
      }]
    })
  } 
}   
</script>

<style>
  h1 {
    text-align: left;
  }
  .about {
    width: 1000px;
    height: auto;
    display: flex;
    justify-content: center;
  }
  #charts-zhe {
    width: 400px;
    height: 400px;
    margin-top: 60px;
  }
  #charts-bing {
    width: 400px;
    height: 400px;
    margin-top: 60px;
  }
</style>