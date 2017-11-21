<template>
<div class="wd_detail">
   <div class="header">
   		<div class="img">
   			<img src="./../../assets/image/photo1.jpg">
   		</div>
   		<div class="msg">
   			<h4>张晓彤</h4>
   			<div class="wcqk">
	   			<router-link to="/completed" class="ywc">
	   				<span>{{tj.ywc}}</span>
	   				<p>已完成</p>
	   			</router-link>
	   			<router-link to="/incompleted" class="wwc">
	   				<span>{{tj.wwc}}</span>
	   				<p>未完成</p>
	   			</router-link>
	   			<router-link to="/fight" class="jy">
	   				<span>{{tj.dz}}</span>
	   				<p>加油</p>
	   			</router-link>
   			</div>
   		</div>
		<span @click="addzmbShow()">
			<img src="./../../assets/image/jia.png">
		</span>
    </div>
    <div class="bymb">
   	<div class="bymb-nr">
   		<span></span><h5>学习目标</h5>
   	</div>
	<div class="bp">
		<div>
			<img src="./../../assets/image/biaopan.png">
			<span>{{getxf}}</span>
			<p>我的学分</p>
		</div>
		<div class="xuanzhuan" :style="{transform:rotate}" ref="scroll" id="scroll">
			<img src="./../../assets/image/biaopan-dot.png">
		</div>
		<!-- <div id="myChart-zb" :style="{width: '100%', height: '200px'}"></div> -->
	</div>
	<div class="xf">
		<router-link to="/studyplan" class="xxjh">
			<img src="./../../assets/image/jh.png">
			<p>学习计划</p>
		</router-link>
		<router-link to="/mygrades" class="wdcj">
			<img src="./../../assets/image/cj.png">
			<p>我的成绩</p>
		</router-link>
		<router-link to="/lostsubject" class="ygkm">
			<img src="./../../assets/image/gk.png">
			<p>已挂科目</p>
		</router-link>
	</div>
    <div class="wdmb">
	   	<div class="bymb-nr">
	   		<span></span><h5>我的目标</h5>
	   	</div>
	</div>
    <div class="mbfl">
   		<ul>
   			  <li><router-link to="/college">学院目标</router-link></li>
   			  <li><router-link to="/personal">个人目标</router-link></li>      				
   		</ul>
   	</div>
   	<router-view></router-view>
   </div>
   <!-- <v-confirm></v-confirm> -->
</div>
</template>
<script>
import confirm from './confirm'
export default {
 	name: 'wd_detail',
 	props: {
 	
 	},
 	data(){
	  	return{
	  		rotate:'',
	  		getxf:'',
	  		tj:'',
	  		// xymbListShow:true,
	  		// grmbListShow:true,
	  	}
	 },
	// watch:{
	// 	rotate:'scrollStyle'
	// },
	methods: {
		addzmbShow() {
			this.$router.push('./collegegoal/add_zmb');
		},

	},
	computed: {
	},
	created() {
		var _this = this;
           this.$http.get('http://192.168.0.101:8081/target/school_xf?userid=1500654&function_id=20150101&ticket=06707289551C6223FB9E6868658AECAE').then(res=>{
            _this.getxf=res.data.content[0].xf;
            var grid=this.getxf/(300/44)*5;
			this.rotate='rotate('+(grid-20)+'deg)';
			if(grid>50&&grid<70){
				document.getElementById('scroll').style.width=13.85+'em';
			}else if(grid>70&&grid<90){
				document.getElementById('scroll').style.width=13.7+'em';
			}else if(grid>90&&grid<140){
				document.getElementById('scroll').style.width=13.66+'em';
			}else if(grid>140&&grid<170){
				document.getElementById('scroll').style.width=13.73+'em';
			}else if(grid>170&&grid<200){
				document.getElementById('scroll').style.width=13.85+'em';
			}else{
				document.getElementById('scroll').style.width=13.85+'em';
			}
        })
        this.$http.get('http://192.168.0.101:8081/target/target_mbdbtj?userid=11204050220&function_id=20150101&ticket=7A459E71400C19A4A813994B79BC4E41').then(res=>{
            _this.tj=res.data.content[0];   
            // console.log(res.data);
        })
	},
	mounted() {
		
	},
	components:{
		'v-confirm':confirm
	}

}
</script>

<style>
*{
	margin:0;
	padding:0;
}
a{
	text-decoration: none;
}
ul li{
  list-style: none;
}
.header{
	height:5.85em;
	background: #90CAF3;
	overflow: hidden;
}
.header>span{
	float: right;
	padding: .7em;
}
.header>span img{
	width: 1em;
	height: 1em;
}
.img{
	width: 3em;
	height:3em;
	line-height: 5.83em;
	margin-left: .83em;
	margin-right: .78em;
	float:left;
}
.img img{
	width:100%;
	height:100%;
	border-radius: 50%;
	vertical-align: middle;
}
.msg{
	float:left;
}
.msg h4{
	font-size: 18px;
	color: #f6f6f6;
	line-height: 1.5em;
	margin-top: 1.3em;
	text-align:left;
}
.msg .wcqk>a{
	display: inline-block;
	padding-right:3em;
	text-align: center; 
}
.msg .wcqk span{
	font-size: 14px;
	color:#ffdb96;
	display: block;
}
.msg .wcqk a{
	font-size: 11px;
	color:#ffffff;
}
/* .bymb{
	margin: .4em 0 3.2em;
} */
.bymb-nr{
	background: #ffffff;
	border-bottom: 1px solid #eeeeee;
	text-align: left;
	margin-top: .4em;
}
.bymb-nr span{
	display: inline-block;	
	width: .22em;
	height: .8em;
	background: #30A1F1;
	margin-right: .5em;
	border-radius: 1px;
}
.bymb-nr h5{
	font-size: 14px;
	color: #333333;
	line-height: 2.2em;
	display: inline-block;
	font-family: PingFang-SC-Bold;
}
.bp{
	background: #ffffff;
	position: relative;
}
.bp div{
	width: 14em;
	margin:0 auto;
	padding:1em 0;
}
.bp div span{
	display: block;
	font-family: FZYHJW--GB1-0;
	font-size: 40px;
	font-weight: bold;
	margin-top: -2.3em;
    height: 46px;
	text-align: center;
}
.bp div p{
	font-size: 12px;
	color: #666666;
	margin-top: .5em;
	text-align: center;
}
.bp div img{
	width:100%;
}
.xf{
	background: #ffffff;
	padding: .5em 0;
}
.xf>a{
	display: inline-block;
	width: calc(100%/3 - .4em);
	text-align: center;
	padding: .1em 0;
}
.xf>a img{
	width: .7em;
	vertical-align: middle;
}
.xf>a p{
	display: inline-block;
	font-size: 12px;
	color:#666666;
}
.mbfl ul{
	border-bottom: 1px solid #eeeeee;
	height: 2em;
	line-height: 2em;
	background: #ffffff;
}
.mbfl ul li{
	list-style: none;
	float: left;
	width: 4.5em;
	margin-left: .6em;
}
.mbfl ul li a{
	font-family: PingFang-SC-Bold;
	color: #999999;
	font-size: 14px;
	padding: .2em;
}
.mbfl .router-link-active{
  color:#3da8f5!important;
  border-bottom: 1px solid #3da8f5;
}
.mbfl .active{
	color:#3da8f5!important;
    border-bottom: 1px solid #3da8f5;
}
.xuanzhuan {
	/*border:1px solid red;*/
    transform: rotate(-20deg);
    margin-top: -60px !important;
    margin-bottom: 40px !important;
    height: 10px;
    padding: 0 !important;
    text-align: left;
}
.xuanzhuan > img{
	width: 1em !important;
    margin-left: -.1em; 
}
</style>