<template>
  <div id="collegedetail-xq-wrapper">
		<v-collegegoal-header :mbxq="mbxq"></v-collegegoal-header> 
		<v-jd></v-jd> 
	</div> 
</template>

<script>
import zmb_jd_xq from './zmb_jd_xq'
import completedgoal_header from './completedgoal_header'
export default {
	data() {
		return{
			mbxq:this.$route.query.data,
		}
	},
	components:{
		'v-jd':zmb_jd_xq,
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