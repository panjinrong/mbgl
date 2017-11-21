<template>
  <div id="personal-xq-wrapper">
		<v-collegegoal-header :mbxq="mbxq" :mblx="mblx"></v-collegegoal-header> 
		<v-collegegoal :mbxq="mbxq" :mblx="mblx" :id="id"></v-collegegoal> 
	</div> 
</template>

<script>
import collegegoal_xg from './collegegoal_xg'
import collegegoal_header from './collegegoal_header'
export default {
	data() {
		return{
			mbxq:this.$route.query.data,
			mblx:this.$route.query.mblx,
			id:this.$route.query.id,
		}
	},
	created(){
		console.log(this.mbxq);
	},
	components:{
		'v-collegegoal':collegegoal_xg,
		'v-collegegoal-header':collegegoal_header
	}
}
</script>

<style>
#personal-xq-wrapper{
	text-align: left;
	background: #f7f7f7;
}
</style>