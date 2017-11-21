<template>
  <div class="college-addzmb-wrapper" >
  	<div class="add-zmb" @click="addListShow(gjdid)" v-if="show">
  		<img src="./../../../assets/image/ZMB-Plus.png">
  		<span >添加子目标</span>
  	</div>
 	<v-zmb :zmbList="zmbList" :mblx="mblx"></v-zmb>
  </div>
</template>

<script>
import zmb from './collegegoal_zmb'
export default {
	data() {
		return {
			zmbList:this.$route.query.zmbList,
			gjdid:this.$route.query.gjdid,
			mblx:this.$route.query.mblx,
			show:true,
		}
	},
	methods:{
		addListShow:function(gjdid){
			this.$router.push({path:'./collegegoal_addlist',query:{gjdid:gjdid}});
		},
		open(){
			if(this.mblx==="xymb"){
				this.show=false;
			}else{
				this.show=true;
			}
		}
	},
	created(){
		this.open();
		// console.log(this.mblx)
	},
	components:{
		'v-zmb':zmb
	}
}
</script>

<style>
.college-addzmb-wrapper{
	text-align: left;
	background: #f7f7f7;
	min-height: 100%;
	width: 100%;
	position: absolute;
}
.add-zmb{
	background: white;
	margin: .8em .8em 0;
	line-height: 3em;
	border-radius: 8px;
}
.add-zmb img{
	width: 1em;
	margin: 0 .5em;
	vertical-align: top;
	margin-top: 1em;

}
.add-zmb span{
	font-size: 15px;
	color: #5d5d5d;
}
</style>