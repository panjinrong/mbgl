<template>
  <div class="addzmb-wrapper" >
 		<div class="addzmb-title">
 			<input type="text" name="" placeholder="目标名称" maxlength="20">
 		</div>
 		<div class="zddlist">
 			<ul>
 				<li @click="selectfzr()">
	 				<div>
	 					<img src="./../../../assets/image/photo1.jpg">
	 					<p>张晓彤</p>
	 				</div>
 					<span>
 						<img src="./../../../assets/image/next.png">
 					</span>
 				</li>
 				<li @click="addzmbBz()" :message="msg">
 					<img src="./../../../assets/image/Remarks.png">
 					<div>
	 					<p v-if="editText">{{editText}}</p>
	 					<p v-else="">添加备注</p>
	 					<span>
	 						<img src="./../../../assets/image/next.png">
	 					</span>
 					</div>
 				</li>
 			</ul>
 		</div>
 		<!-- <v-yxj ></v-yxj> -->
 		<div class="addzmb-button" @click="onback()">
	 		<button>完成</button>
 		</div>
		<!-- 添加备注-->
		  <div class="addzmb-bz-wrapper" v-show="addedit">
		  		<div class="zmbbz">
			 		<textarea placeholder="添加备注" ref="textareaTxet" v-model="editText"></textarea>
		  			<p><span>{{editText.length}}</span>-500</p>
		  		</div>
		  		<div class="zmb-button">
		  			<button @click="tjbjChild()">确定</button>
		  		</div>
		  </div> 
  </div>
</template>

<script>
import mbyxj from './mbyxj'
import settime from './set_times'
export default {
	data() {
		return {
			yxj:false,
			addedit:false,
			msg:'qwertyuio',
			editText:'',
			li:[],
      		lx:'',
      		timeshow:'',
	        show:false,
	        mbfx:false,
	        mbfxVal:'',
            slots: [
	        {
	          // flex: 1,
	          values: ['自主目标', '协同目标',],
	          className: 'slot1',
	          textAlign: 'center'
	        },
	      ]

		}
	},
	watch:{
		editText:{
			handler:function(curVal,oldVal){
    		}
		},
		deep:true
	},
	methods:{
		addzmbBz:function(){
			this.addedit=true;
		},
		onback() {
			this.$router.push('./collegegoal_addzmb');
		},
		tjbjChild() {
			this.addedit=false;
		},
		selectfzr(){
			this.$router.push('./all_person_fz');
		}
	},
	components:{
		'v-yxj':mbyxj,
		'v-settime':settime 
	}
}
</script>

<style>
.addzmb-wrapper{
	text-align: left;
	background: #f7f7f7;
	min-height: 100%;
}
.addlst-title{
	background: white;
	padding: .8em .9em 0;
}
.zddlist{
	background: white;
	padding: 0 1em;
}
.addzmb-title{
	background: white;
	height: 3em;
	/* padding: .8em 0; */
}
.addzmb-title input {
	width: 100%;
	height: 100%;
	font-size: 17px;
	padding: 0 1em;
	color:#e4e4e4;
	border:none;
	border-bottom: 1px solid #eeeeee;
	box-sizing: border-box;
} 
.addlst-title p{
	background: #f2f2f2;
	font-family: PingFang-SC-Medium;
	font-size: 12px;
	color: #999999;
	display: inline-block;
	padding: .1em .5em;
	border-radius: 6px;
}
.zddlist ul li{
	line-height: 3em;
	height: 3em;
}
.zddlist ul li>img{
	width: .8em;
	height: .8em;
	vertical-align: top;
    margin-top: 1.15em;
}
.zddlist ul li div{
	display: inline-block;
	border-bottom: 1px solid #eeeeee;
	width: 93.5%;
	height:100%;
}
.zddlist ul li div input,.zddlist ul li div p,.zddlist ul li div select{
	font-size: 13px;
	color: #999999;
	width: 88%;
	height: 90%;
	border:none;
}
.zddlist ul li div >img{
	width: 1.7em;
	height: 1.7em;   
	margin-top: .7em;
    vertical-align: top;
	border-radius:50%;
}
.zddlist ul li div p{
	display: inline-block;
}
.zddlist ul li div span{
	float: right;
}
.zddlist ul li>span{
	float: right;
}
.zddlist ul li div span>img,.zddlist ul li>span>img{
	width: .5em;
	height: .8em;
}
.addzmb-button{
	box-sizing: border-box;
	width: 100%;
	margin-top: 1.67em;
}
.addzmb-button button{
	width: 96%;
	margin: 0 2%;
	font-size: 18px;
	color: #ffffff;
	height: 2.56em;
	padding: .5em 0 .2em;
	border-radius: 8px;
	background: #55b2f5;
	border:none;
}
/* 添加备注 */
.addzmb-bz-wrapper{
    text-align: left;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: white;
}
.zmbbz{
	height: 30%;
}
.zmbbz textarea{
	width: 100%;
	height: 100%;
	border:none;
	resize: none;
	font-size: 13px;
	padding: .9em;
	box-sizing: border-box;
}
.zmbbz p{
	text-align: right;
	padding: .8em;
	color: #999999;
	font-size: 14px;
	border-bottom: 1px solid #eeeeee;
}
.zmb-button{
	width: 98%;  
    margin: 4em 1%;
	text-align: center;
}
.zmb-button button{
	color: #ffffff;
	font-size: 18px;
	border:none;
	width: 96%;
	margin: 0 2%;
	height: 2.56em;
	padding: .5em 0 .2em;
	background: #55b2f5;
	border-radius: 6px;
}
</style>