<template>
	<div class="wdcj-wrapper">
	     <mt-swipe @change="handleChange" :auto="0">
		  <mt-swipe-item v-for="(list,index) in data" :key="list.xq">
		  	<div class="header-wdcj" :data-id="index">
				<h3>{{list.xnxq}}</h3>
				<div class="bjpm">
					<p>班级排名：</p><span>{{list.pm}}</span>
				</div>
				<div class="gkkm">
					<p>挂科科目：</p><span>{{list.gk}}</span>
				</div>
			</div>
		  </mt-swipe-item>
		</mt-swipe>
		<div class="xkfs">
			 <div v-for="(items,$index) in cjList" :class="gradeClass($index)" @click="selectSubject($index,items.kcmc,items.xn,items.xq)" v-if="$index<subject[num].length">
				<span>{{items.cj}}</span>
				<p>{{items.kcmc}}</p>
			</div> 
			<div @click.stop="allShow(num)" v-show="subject[num].show" v-if="cjList">
				<span><img src="./../../../assets/image/more.png"></span>
				<p>更多</p>
			</div>
			<div @click.stop="sqHide(num)" v-show="!subject[num].show">
				<span><img src="./../../../assets/image/sq.png"></span>
				<p>收起</p>
			</div>
		</div>
		<div class="tjmb_title">
			<img src="./../../../assets/image/juxing.png">
			<h4>成绩分析</h4>
		</div> 
		<v-bt :cjfx="cjfx" v-if="bt"></v-bt>
		<div class="bt-wrapper" v-else>
			<div id="myChart-bt" :style="{width: '100%', height: '200px'}"></div>
		</div>
	</div>
</template>
<script>
import bt from './mygrades_bt'
	export default {
		data() {
			return {
				sum:0,
				num:0,
				data:'',
				show:'',
				cjList:'',
				subject:[],
				dataid:[],
				cjfx:'',
				bt:true
			}
		},
		created() {
			var _this = this;
			
	           this.$http.get('http://192.168.0.101:8081/target/school_cj?userid=1500654&ticket=06707289551C6223FB9E6868658AECAE&function_id=20150101').then(res=>{
	            _this.data=res.data.content;
	            _this.cjList=_this.data[_this.num].cj
	            _this.data.forEach(function(r,i){
	             	_this.subject.push({"show":true,"length":7});
	             })    
	        })

			 this.$http.get('http://192.168.0.101:8081/target/school_cjfx?userid=1500654&ticket=06707289551C6223FB9E6868658AECAE&function_id=20150101&xq=1&xn=2016-2017&kcmc=大学生创新创业训练').then(res=>{
	            _this.cjfx=res.data.content;
	        })
		},
		mounted() {
		},
		methods:{
			selectSubject(index,kcmc,xn,xq) {
				this.bt=false;
				this.sum=index;
				this.$http.get('http://192.168.0.101:8081/target/school_cjfx?userid=1500654&ticket=06707289551C6223FB9E6868658AECAE&function_id=20150101&xq='+xq+'&xn='+xn+'&kcmc='+kcmc).then(res=>{
	            	this.cjfx=res.data.content;
	            // console.log(this.cjfx);
	        })
				this.drawLine();
			},
			gradeClass(index) {
				if(this.data[this.num].cj[index].cj>60){
					if(this.sum === index){
						return 'active'
					}else{
						return ' '
					}
				}else if(this.data[this.num].cj[index].cj<60){
					if(this.sum === index){
						return 'active'
					}else{
						return 'actives '
					}
				}
			},
			allShow(index) {
				this.subject[this.num].length=this.cjList.length;
				// this.length=this.cjList.length;
				this.subject[this.num].show=false;
				this.more=false;
			},
			sqHide(index) {
				this.subject[this.num].length=7;
				this.subject[this.num].show=true;
				this.more=true;
			},
			handleChange(index) {
				this.num=index;
	            this.cjList=this.data[this.num].cj
		  	},

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
		},
		components:{
			'v-bt':bt,
		}
	}
</script>
<style>
html,body{
	height: 100%;
}
.xkfs .active{
	background: #65BFFF !important;
}
.xkfs .active p,.xkfs .active span{

	color: white !important;
}
.xkfs .actives p,.xkfs .actives span{
	color: red !important;
}
.wdcj-wrapper{
	background: #f7f7f7; 
	height: 100%;
}
.header-wrapper{
	padding: 2em 0 .5em;
	background: white;
	margin-bottom: .5em;
}
.header-wdcj{
	margin-top: 1.6em;
}
.header-wdcj h3{
	font-size: 16px;
	color:#333333;
}
.header-wdcj>div{
	margin:1em 0;
	display: inline-block;
}
.header-wdcj .bjpm{
	margin-right: 1em;
}
.header-wdcj .gkkm{
	margin-left: .5em;
}
.header-wdcj>div p,.header-wdcj>div span{
	display: inline-block;
	font-family: PingFang-SC-Bold;
	font-size: 13px;
}
.xkfs{
	width: 100%;
	text-align: left;
	margin-top: 1em;
	background: white;
	font-size: 0;
	border-top:1px solid #eeeeee;
}
.xkfs>div{
	font-size: 25px;
	display: inline-block;
	width: calc(100%/4 - 0em);
	height:3.8em; 
	text-align: center;
	vertical-align: middle;
	padding-top: .9em;
	border-right:1px solid #eeeeee;
	border-bottom:1px solid #eeeeee;
	box-sizing: border-box;
}
.xkfs>div:nth-child(4n){
	border-right:none;
}
.xkfs>div span{
	font-family: PingFang-SC-Bold;
	font-size: 25px;
	color: #333333;
}
.xkfs>div span img{
	width: 1em;
}
.xkfs>div p{
	font-family: PingFang-SC-Medium;
	font-size: 12px;
	color: #5d5d5d;
}
.tjmb_title{
	margin-top: .59em;
	background:white;
	padding: .4em 0;
	text-align: left;
}
.tjmb_title img{
	display: inline-block;
	height: 1em;
}
.tjmb_title h4{
	display: inline-block;
	font-family: PingFang-SC-Bold;
	font-size: 17px;
	color: #333333;
}
.mint-swipe-indicators{
	display: block!important;
    bottom: .2em!important;
}
.mint-swipe-indicators .mint-swipe-indicator{
    width: 1.5em;
    height: .25em;
    background: #e8e8e8;
	left: 50%;
	margin-left:5px;
	border-radius:0;
}
.mint-swipe-indicators .is-active{
	background: #65BFFF!important;
}
.mint-swipe{
	height: 8em !important;
    margin-bottom: .5em;
}
.mint-swipe-items-wrap > div.is-active{
	background: white;
}
</style>