<!-- <template>
  <div class="find-mbgc-ldt-wrapper">
    <div id="myChart_ldt" :style="{width: '100%', height: '240px'}"></div>
  </div>
</template>

<script>

export default {
  props: {
      km:{
        type:Number,
        default:1
      }
    },
    mounted(){
    this.drawLine();
      },
    data(){
      return{
        dyxq:false
      }
    },
    methods:{
      drawLine() {
        let myChart = this.$echarts.init(document.getElementById('myChart_ldt'));
       // myChart.showLoading();
        myChart.setOption({
          /*title: {
            text: '基础雷达图'
        },*/
        tooltip: {},
        legend: {
            //data: [ '实际开销（Actual Spending）']
        },
        radar: {
            // shape: 'circle',
            // 
            center:['44%','60%'],
            name: {
                textStyle: {
                    color: '#555',
                    fontSize:'11px',
                    // backgroundColor: '#999',
                    // borderRadius: 3,
                    // padding: [3, 5]
               }
            },
            indicator: [

               { name: '研究型', max: 3000},
               { name: '艺术型', max: 6500},
               { name: '现实性', max: 1600},
               { name: '社会性', max: 3800},
               { name: '企业型', max: 5200},
            ],
            splitArea: {
                areaStyle: {
                    color: ['#ffffff', '#ffffff']
                }
            },
             splitLine: {
              lineStyle: {
                 color: '#D9D9D9',
                  width: 1
              }
          },
        },
        series: [{
            type:'radar',
            name: '霍兰德类型',
            type: 'radar',
            itemStyle: {
              normal: {
                  color: '#6EBF6D',
                  borderColor: '#9ACB66'
              }
            },
            symbol: 'circle',
            symbolSize:5,
            data : [
                {
                    value : [2300, 1800, 1000, 1500, 4000],
                    name : '测评结果'
                }
            ]
        }]
        });
      }
    }
  }
</script>

<style>
.find-mbgc-ldt-wrapper{
   background: #ffffff;
}
#myChart_ldt >div{
  margin: 0 auto !important;
}
</style>

 -->