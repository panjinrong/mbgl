<template>
  <div id="collegedetail-xq-wrapper">
		<v-collegegoal-header :mbxq="mbxq"></v-collegegoal-header> 
		<v-collegegoal :mbxq="mbxq" :id="id"></v-collegegoal> 
	</div> 
</template>

<script>
import completedgoal_xg from './completedgoal_xg'
import completedgoal_header from './completedgoal_header'
export default {
	data() {
		return{
			mbxq:this.$route.query.data,
			id:this.$route.query.id,
		}
	},
	created(){
		console.log(this.id);
	},
	components:{
		'v-collegegoal':completedgoal_xg,
		'v-collegegoal-header':completedgoal_header
	}
}
</script>

<style>
#collegedetail-xq-wrapper{
	text-align: left;
	background: #f7f7f7;
    border-top: 1px solid #eeeeee;
}
</style>