<template>
	<div class="bt-wrapper" v-if="cjfx.series_Data[4].value">
		<div id="myChart-bt" :style="{width: '100%', height: '200px'}"></div>
	</div>
</template>
<script>
export default {
	// props:['cjfx'],
	mounted(){
		this.drawLine();
	},
	data(){
		return{
			list:'',
			cjfx:this.$route.query.data
		}
	},
	created() {
		console.log(this.$route.query.data);
	},
	methods:{
		drawLine() {
			let myChart = this.$echarts.init(document.getElementById('myChart-bt'));
        myChart.setOption({
        	tooltip : {
			        trigger: 'item',
			        formatter: "{a} <br/>{b} : {c} ({d}%)"
			    },
			    legend: {
			        orient : 'circle',
			        x : '55%',
			        y :'25%',
			        itemWidth:8,
			        itemHeight:8,
			        padding:[7,0,7,0],
			        data:this.cjfx.legend_data
			    },
			    color:['#56be93','#5395fe','#ffae3a','#2367b0','#f16a54'],
			    toolbox: {
			        show : true,
			        feature : {
			            magicType : {
			                show: true, 
			                type: ['pie', 'funnel'],
			                option: {
			                    funnel: {
			                        x: '25%',
			                        width: '50%',
			                        funnelAlign: 'right',
			                        max: 1548
			                    }
			                }
			            },
			        }
			    },
			    calculable : true,
			    series : [
			        {
			            name:'成绩情况',
			            type:'pie',
			            radius : ['45%', '65%'],
			            center:['30%','50%'],
			            itemStyle : {
			                normal : {
			                    label : {
			                        show : false
			                    },
			                    labelLine : {
			                        show : false
			                    }
			                },
			                emphasis : {
			                    label : {
			                        show : false,
			                        position : 'center',
			                        textStyle : {
			                            fontSize : '14',
			                            fontWeight : 'bold'
			                        }
			                    }
			                }
			            },
			            data:this.cjfx.series_Data
			        }
			    ]
           });
		}
	}
	}
</script>
<style>	
.bt-wrapper{
	background: white;
}
	
</style>