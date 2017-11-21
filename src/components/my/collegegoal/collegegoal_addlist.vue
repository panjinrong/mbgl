<template>
  <div class="college-addlist-wrapper" >
 		<div class="addlst-title">
 			<p>属于目标：<span>30天英语大师</span></p>
 		</div>
 		<v-addzmb></v-addzmb>
  </div>
</template>

<script>
import addzmb from './add_selfzmb'
export default {
	data() {
		return {}
	},
	methods:{
		// zmbXqShow:function(index){
		// 	this.$router.push('./collegegoal_zmb_xq');
		// }
	},
	components:{
		'v-addzmb':addzmb
	}
}
</script>

<style>
.college-addlist-wrapper{
	text-align: left;
	background: #f7f7f7;
	min-height: 100%;
}
.addlst-title{
	background: white;
	padding: .8em .9em;
}
.zmb-title{
	background: white;
	height: 2em;
	padding: .8em 1em;
}
.zmb-title input{
	width: 100%;
	height: 100%;
	font-size: 17px;
	color:#e4e4e4;
	border:none;
	border-bottom: 1px solid #eeeeee;
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
</style>